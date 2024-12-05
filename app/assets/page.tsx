import React from 'react' 
import Feed from '@/chunks/datafeed/components/feed'

export default () => {
  return <Feed 
    base="assets"
    filter="type"
    icon="SparklesIcon"
    title="Assets"
    tabs={[ "Platform/platform", "Communities/community", "Initiatives/initiative", "Chunks/chunk" ]} />
}