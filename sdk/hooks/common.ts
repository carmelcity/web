import { sendGatewayRequest } from "./utils"
import useSWR from 'swr'

export const useCarmelList = (service: string) => {
    const { data, isLoading, error } = useSWR({ service }, sendGatewayRequest)

    const content = () => {
        if (!data) {
            return []
        }
        
        return data.all
    }
    return { 
        isLoading, error, all: content()
    }
}

export const useCarmelItem = (service: string, id: any) => {
    const { data, isLoading, error } = useSWR({ service: `${service}/${id}` }, sendGatewayRequest)
    
    const content = () => {
        if (!data) {
            return {}
        }
        
        return data.item || data.account
    }
    
    return { 
        isLoading, error, item: content()
    }
}