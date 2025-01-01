import { sendGatewayRequest } from "./utils"
import useSWR from 'swr'

export const useCarmelChallenges = () => {
    const { data, isLoading, error } = useSWR({ service: `challenges` }, sendGatewayRequest)

    const all = () => {
        if (!data) {
            return 
        }
        
        return data.challenges
    }
    return { 
        isLoading, error, all
    }
}

export const useCarmelChallenge = (id: number) => {
    const { data, isLoading, error } = useSWR({ service: `challenges/${id}` }, sendGatewayRequest)

    const content = () => {
        if (!data) {
            return 
        }
        
        return data.challenge
    }
    return { 
        isLoading, error, challenge: content()
    }
}