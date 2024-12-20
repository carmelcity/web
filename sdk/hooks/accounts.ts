import { gatewayFetch } from "./utils"
import useSWR from 'swr'

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