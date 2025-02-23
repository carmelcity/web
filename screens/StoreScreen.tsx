import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { AssetGroupCard, AgentCard, ProjectCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const StoreScreen = () => {
    return <ListScreen
      title="Store"
      actionTitle="View Assets"
      subtitle="Do more with agents, try out new products and collect digital assets."
      icon="CurrencyDollarIcon"
      placeholder={ListPlaceholder}
      shortIntro
      sections={[
        { node: "agents", card: AgentCard, onItemPress: '/agents/:name', id: "agents", icon: "PlayIcon", title: "Agents" }, 
        { node: "accounts", card: ProjectCard, onItemPress: '/:username', id: "products", icon: "RocketLaunchIcon", title: "Products", filter: {  key: "type", value: "product" } },
        { node: "collections", section: "collections", card: AssetGroupCard, onItemPress: '/assets/:username', id: "assets", icon: "SparklesIcon", title: "Assets" } 
      ]}
    />
  }
  