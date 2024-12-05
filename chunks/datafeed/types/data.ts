export interface DataItem {
    title: string
    onSelect: any
    simple: boolean
    purchase?: boolean
    banner?: string
    pricing?: string
    intro?: string
    since?: string
    tags?: string[]
    descriptor?: string
    name?: string
    author: string
    target?: string
    upvotes?: number
    downvotes?: number
    community?: string
    for?: string
    type: string
    funds: number
    who: string
    id: number | string
    people: number
    boosts: number
    likes: number
    comments: number
}