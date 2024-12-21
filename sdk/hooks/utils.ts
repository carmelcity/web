import axios from 'axios'

export const gatewayFetch = async ({ service, args = {}, bearer = ""}: any) => {
    let result: any = { error: "something went wrong "}

    try {
        const { data } = await axios.post(`${process.env['NEXT_PUBLIC_GATEWAY_URL']}/carmel/${service}`, {
            ...args,
            siteUrl: `${process.env['NEXT_PUBLIC_SITE_URL']}`
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