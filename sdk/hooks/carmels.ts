import { sendGatewayRequest } from "./utils"
import useSWR from 'swr'

export const useCarmels = () => {
    const { data, isLoading, error } = useSWR({ service: `carmels` }, sendGatewayRequest)

    const all = () => {
        if (!data) {
            return 
        }
        
        return data.carmels
    }
    return { 
        isLoading, error, all
    }
}