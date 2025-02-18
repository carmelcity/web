import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const CarmelListScreen = (props: any) => {
    const isEditable = props.auth && props.auth.profile.level > 50

    return <ListScreen
      title="Top Carmels"
      onItemPress='/:carmelId'
      actionTitle="Join debate"  
      subtitle="Carmels are thoughtful debates about how to build a more human world."
      name="carmels"
      mainAction={ isEditable ? { title: "Add a new Carmel", link: "/new/carmel"} : undefined} 
      placeholder={ListPlaceholder}
      shortIntro
      highlight
      card={CarmelCard}
      {...props}
    />
}