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
    />
  }
  