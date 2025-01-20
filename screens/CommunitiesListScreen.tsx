import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CommunityCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const CommunitiesListScreen = () => {
    return <ListScreen
      title="Carmel"
      onItemPress='/:username'
      actionTitle="View Community"
      subtitle="Communities"
      wide
      filter={(item: any) => item.type === "community"}
      icon="UserGroupIcon"
      name="accounts"   
      placeholder={ListPlaceholder}
      shortIntro
      card={CommunityCard}
    >
       <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-md mb-8 text-center'>
          Carmel Communities are self-governing groups of members who share common values.
      </span>
    </ListScreen>
  }
  