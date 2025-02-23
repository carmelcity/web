import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CommunityCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const CommunitiesListScreen = () => {
    return <ListScreen
      title="Studios"
      onItemPress='/:username'
      actionTitle="View Studio"
      subtitle="Carmel Studios are self-governing groups of innovators who share common values."
      wide
      filter={(item: any) => item.type === "studio"}
      icon="UserGroupIcon"
      name="accounts"   
      placeholder={ListPlaceholder}
      shortIntro
      card={CommunityCard}
    />
  }
  