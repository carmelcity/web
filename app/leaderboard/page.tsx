import React from 'react' 
import Feed from '@/chunks/datafeed/components/feed'

export default () => {
  return <Feed 
    base="accounts/top"
    filter="type"
    icon="ArrowTrendingUpIcon"
    title="Leaderboard"
    tabs={["Initiatives/initiative", "Communities/community", "Teams/team", "Leaders/user"]} />
}