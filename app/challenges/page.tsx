import React from 'react' 
import Feed from '@/chunks/datafeed/components/feed'

export default () => {
  return <Feed 
    base="challenges"
    icon="FlagIcon"
    filter="category"
    title="Challenges"
    tabs={["Trends/trends", "Stories/stories", "Journeys/journeys", "Experiments/experiments"]} />
}