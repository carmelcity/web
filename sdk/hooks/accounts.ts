import { gatewayFetch } from "./utils"
import useSWR from 'swr'

export const useCarmelAccount = ({ username, env }: any) => {
    const { data, isLoading, error } = useSWR(username ? { env, service: `accounts/${username}` } : null, gatewayFetch)

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