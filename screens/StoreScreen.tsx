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
      name="collections"   
      wide
      placeholder={ListPlaceholder}
      shortIntro
      card={AssetGroupCard}
    >
        <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-md mb-8 text-center'>
            Carmel Assets are unique digital collectibles that unlock functionality, earn rewards and level up with usage.
        </span>
    </ListScreen>
  }
  