import { gatewayFetch } from "./utils"
import useSWR from 'swr'

const GATEWAY_URL = `${process.env['NEXT_PUBLIC_GATEWAY_URL']}`
const SITE_URL = process.env['NEXT_PUBLIC_SITE_URL']

export const useCarmelAccount = (username: string) => {
    const { data, isLoading, error } = useSWR(username ? { service: `accounts/${username}` } : null, gatewayFetch)

    const account = () => {
        if (!data) {
            return 
        }

        return data.account
    }

    return { 
        isLoading, error, account: account()
    }
}