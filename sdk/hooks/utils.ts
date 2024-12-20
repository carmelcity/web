import axios from 'axios'

const GATEWAY_URL = `${process.env['NEXT_PUBLIC_GATEWAY_URL']}`
const SITE_URL = process.env['NEXT_PUBLIC_SITE_URL']

export const gatewayFetch = async ({ env, service, args = {}, bearer = ""}: any) => {
    let result: any = { error: "something went wrong "}

    try {
        const { data } = await axios.post(`${env.NEXT_PUBLIC_GATEWAY_URL}/carmel/${service}`, {
            ...args,
            siteUrl: env.NEXT_PUBLIC_SITE_URL
        }, {
            headers: Object.assign({
                'Content-Type': 'application/json'
            }, bearer && { 'Authorization': `Bearer ${bearer}` })
        }) 
        result = { ...data }
    } catch (e: any) {
        result.error = e.message
    }

    return result
}