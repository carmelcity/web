import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const CarmelListScreen = () => {
    return <ListScreen
      title="Carmel"
      onItemPress='/:carmelId'
      actionTitle="View Carmel"
      subtitle="Conversations"
      name="carmels"   
      placeholder={ListPlaceholder}
      shortIntro
      card={CarmelCard}
    />
}