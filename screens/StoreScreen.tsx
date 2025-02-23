import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { AssetGroupCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const StoreScreen = () => {
    return <ListScreen
      title="Store"
      onItemPress='/store/:username'
      actionTitle="View Assets"
      subtitle="Do more with agents, try out new products and collect digital assets."
      icon="CurrencyDollarIcon"
      wide
      placeholder={ListPlaceholder}
      shortIntro
      sections={[
        { node: "agents", id: "agents",icon: "PlayIcon", title: "Agents" }, 
        { node: "accounts", id: "products", icon: "RocketLaunchIcon", title: "Products", filter: {  key: "type", value: "product" } },
        { node: "collections", id: "assets", icon: "SparklesIcon", title: "Assets" } 
      ]}
      card={AssetGroupCard}
    />
  }
  