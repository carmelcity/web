import { sendGatewayRequest } from "./utils"
import useSWR from 'swr'

export const useCarmelAccount = ({ username }: any) => {
    const { data, isLoading, error } = useSWR(username ? { service: `accounts/${username}` } : null, sendGatewayRequest)

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