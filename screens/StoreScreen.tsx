import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { AssetGroupCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const StoreScreen = () => {
    return <ListScreen
      title="Carmel"
      onItemPress='/store/:username'
      actionTitle="View Assets"
      subtitle="Asset Store"
      icon="CurrencyDollarIcon"
      name="assetgroups"   
      placeholder={ListPlaceholder}
      shortIntro
      card={AssetGroupCard}
    />
  }
  