"use client"

import useSWR from 'swr'
import { useEffect, useState } from 'react'

const URL = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/carmel`

/**
 * 
 * @param base 
 * @returns 
 */
const postFetch = async (base: string) => {
    return fetch(`${URL}/${base}`, { method: 'POST', body: JSON.stringify({})}).then(res => res.json())
}

/**
 * 
 * @returns 
 */
const useDataList = ({ base }: any) => {    
    const [isReady, setIsReady] = useState(false)
    const [all, setAll] = useState<any>(undefined)

    const { data, error, mutate } = useSWR(base, postFetch)

    const refresh = async () => {
        await mutate()
    }

    useEffect(() => {
        if (!data || !data.data) return 
        setAll(data.data)

        setIsReady(true)
    }, [data])

    return { all, isReady, refresh }
}

export default useDataList