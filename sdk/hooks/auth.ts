import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import { customAlphabet } from 'nanoid'
import { UAParser } from 'ua-parser-js'

const id = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 16)

const BASE_URL = `${process.env['NEXT_PUBLIC_GATEWAY_URL']}`
const DEV_MODE = process.env['NEXT_PUBLIC_DEVMODE']

export const useCarmelAuth = () => {
    const [session, setSession, removeSession]: any = useLocalStorage('carmel.session', {})

    const uap = new UAParser()

    const makeCall = async ({ service, args, bearer }: any) => {
        let result: any = { error: "something went wrong "}
    
        try {
            const { data } = await axios.post(`${BASE_URL}/carmel/${service}`, {
                ...args,
                devMode: DEV_MODE
            }, {
                headers: Object.assign({
                    'Content-Type': 'application/json'
                }, bearer && { 'Authorization': `Bearer ${bearer}` })
            }) 
            result = { ...data }
        } catch (e: any) {
            result.error = e.message
        }

        console.log(result)

        if (result && result.session && result.session.authToken) {
            setSession({ ...session, authToken: result.session.authToken })
        }
    
        // result.session && delete result.session

        return result
    }

    const initialize = async () => {
        if (session.id) {
            const profile = await getProfile()
            console.log(profile)
            return
        }
        
        const { os, browser } = uap.getResult()    
        const sessionId = id()
        const device = Object.values(os).join("/") + "/" + Object.values(browser).join("/")
        
        let data = {
            id: sessionId, device, status: "initializing"
        }

        const res = await makeCall({ service: "auth/init", args: { sessionId, device } })

        console.log(res)

        if (!res.error) {
            data = { ...data, ...res }
        }

        setSession({ ...data, status: "initialized" })
    }

    const logout = () => {
        const newSession = { ...session, status: "signedout" }
        delete newSession.authToken

        setSession(newSession)
    }

    const isLoggedIn = () => {
        return session && session.status === "registered"
    }

    const getProfile = async () => {
        const result: any = await makeCall({ service: "me", args: {}, bearer: session.authToken })

        return result
    }

    const verifyRegisterToken = async ({ token }: any) => {
        const result: any = await makeCall({ service: "auth/verify", args: Object.assign({ 
            sessionId: session.id,
            sessionToken: session.token,
            username: session.username,
            email: session.email,
            token
        })})

        if (result.error) {
            return result
        }

        setSession({ ...session, status: "registered", authToken: result.authToken })

        return result
    }

    const checkUsername = async ({ username }: any) => {
        const result: any = await makeCall({ service: "auth/check", args: { 
            username,
            sessionId: session.id,
            sessionToken: session.token, 
        }})

        return result
    }

    const getAuthToken = async ({ email, username }: any) => {
        const newSession = Object.assign({ ...session, status: email ? 'registering' : 'authenticating' }, email && { email }, username && { username })

        setSession(newSession)
        
        const result: any = await makeCall({ service: "auth/start", args: Object.assign({ 
            sessionId: session.id,
            sessionToken: session.token, 
        }, email && { email }, username && { username }) })

        if (result.error) {
            return result
        }

        console.log(result)

        const { sessionToken, authToken } = result

        setSession({ ...newSession, token: sessionToken, authToken, status: email ? 'registered' : 'authenticated' })

        return result
    }

    return {
        getAuthToken, session, logout, initialize, checkUsername, getProfile, verifyRegisterToken, isLoggedIn
    }
}