import { useEffect, useState } from "react"
import { sendGatewayRequest } from "./utils"
import useSWR from 'swr'

export const useCarmelAccount = ({ username }: any) => {
    const [loading, setLoading] = useState(1)
    const { data, isLoading, error } = useSWR(username ? { service: `accounts/${username}` } : null, sendGatewayRequest)

    useEffect(() => {
        if (isLoading && loading === 1) {
            setLoading(2)
        } else if (!isLoading && loading === 2) {
            setLoading(3)
        }
    },[isLoading])

    const account = () => {
        if (!data) {
            return 
        }
        
        return data.account
    }

    return { 
        isLoading: loading < 3, error, account: account()
    }
}