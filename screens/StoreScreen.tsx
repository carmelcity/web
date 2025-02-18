import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { AssetGroupCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const StoreScreen = () => {
    return <ListScreen
      title="Store"
      onItemPress='/store/:username'
      actionTitle="View Assets"
      subtitle="Carmel Assets are unique digital collectibles that unlock functionality, earn rewards and level up with usage."
      icon="CurrencyDollarIcon"
      name="collections"   
      wide
      placeholder={ListPlaceholder}
      shortIntro
      card={AssetGroupCard}
    />
  }
  