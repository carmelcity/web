import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const CarmelListScreen = (props: any) => {
    return <ListScreen
      title="Top Carmels"
      onItemPress='/:carmelId'
      actionTitle="Join debate"
      subtitle=""
      name="carmels"   
      placeholder={ListPlaceholder}
      shortIntro
      highlight
      card={CarmelCard}
      {...props}
    >
      <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-md mb-8 text-center'>
          Carmels are thoughtful debates about how to build a more human world.
      </span>
    </ListScreen>
}