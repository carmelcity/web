import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CommunityCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const CommunitiesListScreen = () => {
    return <ListScreen
      title="Communities"
      onItemPress='/:username'
      actionTitle="View Community"
      subtitle="Carmel Communities are self-governing groups of members who share common values."
      wide
      filter={(item: any) => item.type === "community"}
      icon="UserGroupIcon"
      name="accounts"   
      placeholder={ListPlaceholder}
      shortIntro
      card={CommunityCard}
    />
  }
  