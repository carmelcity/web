import { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { customAlphabet } from 'nanoid'
import { UAParser } from 'ua-parser-js'
import { sendGatewayRequest } from './utils'

const id = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 16)

export const useCarmelAuth = () => {
    const [session, setSession]: any = useLocalStorage('carmel.session', {})
    const [profile, setProfile] = useState<any>({ })
    const uap = new UAParser()
    
    const getFreshProfile = async () => {        
        if (!session.id) {
            return
        }

        const p = await getProfile()
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
        return session && session.authToken
    }

    const postAction = async (action: string, args: any) => {
        return makeCall({ service: `post/${action}`, args })
    }

    const getProfile = async () => {
        return makeCall({ service: "me" })
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