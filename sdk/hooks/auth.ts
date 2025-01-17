import { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { customAlphabet } from 'nanoid'
import { UAParser } from 'ua-parser-js'
import { sendGatewayRequest } from './utils'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: `${process.env['NEXT_PUBLIC_FIREBASE_KEY']}`,
  authDomain: "chunky-platform.firebaseapp.com",
  databaseURL: `${process.env['NEXT_PUBLIC_FIREBASE_URL']}`,
  projectId: "chunky-platform",
  storageBucket: "chunky-platform.firebasestorage.app",
  messagingSenderId: "749572323876",
  appId: "1:749572323876:web:1f484e8ccf4e0e900a36b1",
  measurementId: "G-3GLT0KHLW5"
}

const id = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 16)

export const useCarmelAuth = () => {
    const [session, setSession]: any = useLocalStorage('carmel.session', {})
    const [profile, setProfile] = useState<any>({ })
    const [isListeningForUser, setIsListeningForUser] = useState(false)
    const [userTransactions, setUserTransactions] = useState<any>([])

    const app = initializeApp(firebaseConfig)
    // const analytics = getAnalytics(app)
    const db = getDatabase(app);
    const uap = new UAParser()

    const listenForUserNotifications = (username: string) => {
        if (isListeningForUser) {
            return 
        }

        const topups = ref(db, '/transactions/' + username)        
        onValue(topups, (snapshot: any) => { 
            let all = [
                ...userTransactions,
                ...Object.values(snapshot.val() || {})
            ]
            all = all.sort((a: any, b: any) => b.timestamp - a.timestamp)
            setUserTransactions(all)
        })
        setIsListeningForUser(true)
    }

    const getFreshProfile = async () => {        
        if (!session.id || !isLoggedIn()) {
            return
        }

        const p = await getProfile()
     
        if (p && p.account && p.account.username) {
            listenForUserNotifications(p.account.username)
        }
    
        setProfile(p.account)
    
        return p.account
    }

    const initialize = async () => {        
        if (session.id) {
            return session
        }
        
        const { os, browser } = uap.getResult()    
        const sessionId = id()
        const device = Object.values(os).join("/") + "/" + Object.values(browser).join("/")
        
        let data = {
            id: sessionId, device, status: "initialized"
        }

        setSession({ ...data })

        return data
    }

    const isDeviceSecured = () => {
        if (profile.signatures) {
            const found = profile.signatures.signatures.find((s: any) => s.clientId === session.id)
            if (found) {
                return true
            }
        }

        return false
    }

    const makeCall = async ({ service, args = {} }: any) => {
        const s = await initialize()

        const result = await sendGatewayRequest(Object.assign({ service, 
            args: Object.assign({ ...args }, s.id && { clientId: s.id })
        },         
        s.authToken && { bearer: s.authToken }))

        if (result && result.session && result.session.authToken) {
            setSession({ ...s, authToken: result.session.authToken })
        }
    
        return result
    }

    const logout = () => {
        setSession({ id: session.id, device: session.device, status: "signedout" })
    }

    const isLoggedIn = () => {
        return session && session.authToken ? true : false
    }

    const postAction = async (action: string, args: any) => {
        return makeCall({ service: `post/${action}`, args })
    }

    const accountAction = async (action: string, args: any) => {
        return makeCall({ service: `account/${action}`, args })
    }

    const signatureAction = async (action: string, args: any) => {
        return makeCall({ service: `signature/${action}`, args })
    }

    const sendInvite = async (action: string, args: any) => {
        return makeCall({ service: `invite/${action}`, args })
    }

    const getProfile = async () => {
        return makeCall({ service: "me" })
    }

    const getCrypto = async () => {
        return makeCall({ service: "crypto" })
    }

    const updateProfile = async (args: any) => {
        return makeCall({ service: "update", args })
    }

    const verifyAuthToken = async ({ token }: any) => {
        return makeCall({ service: "auth/verify", args: { 
            username: session.username,
            email: session.email,
            token
        }})
    }

    const activateAccount = async ({ token, username }: any) => {
        let newSession = { ...session }
        delete newSession.email 
        delete newSession.username

        setSession({ ...newSession, username })

        return makeCall({ service: "auth/activate", args: { 
            username,
            token
        }})
    }

    const checkUsername = async (args: any) => {
        return makeCall({ service: "auth/check", args })
    }

    const getAuthToken = async (args: any) => {
        let newSession = { ...session }
        delete newSession.email 
        delete newSession.username
        setSession({ ...newSession, ...args })
        return makeCall({ service: "auth/start", args })
    }

    const user = () => {
        return { ...profile }
    }

    return {
        getAuthToken, 
        updateProfile, 
        session, 
        getCrypto,
        isDeviceSecured,
        accountAction,
        activateAccount,
        sendInvite,
        signatureAction,
        userTransactions,
        user,
        profile, 
        getFreshProfile, 
        logout, 
        initialize, 
        postAction,
        checkUsername, 
        getProfile, 
        verifyAuthToken, 
        isLoggedIn
    }
}