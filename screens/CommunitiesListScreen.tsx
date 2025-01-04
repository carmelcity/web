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
      icon="UserGroupIcon"
      name="communities"   
      placeholder={ListPlaceholder}
      shortIntro
      card={CommunityCard}
    />
  }
  