import { useCarmelItem, useCarmelList } from "./common"

export { useCarmelList, useCarmelItem }

export const useCarmels = () => useCarmelList('carmels')
export const useCarmel = (id: number) => useCarmelItem('carmels', id)
export const useCarmelChallenges = () => useCarmelList('challenges')
export const useCarmelChallenge = (id: number) => useCarmelItem('challenges', id)
export const useCarmelCommunities = () => useCarmelList('communities')
export const useCarmelProjects = () => useCarmelList('projects')