import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const CarmelListScreen = (props: any) => {
    return <ListScreen
      title="Top Carmels"
      onItemPress='/:carmelId'
      actionTitle="View Carmel"
      subtitle=""
      name="carmels"   
      placeholder={ListPlaceholder}
      shortIntro
      card={CarmelCard}
      {...props}
    >
      <div className='w-full text-lg mt-4 mb-10 text-center'>
        A Carmel is a meaningful conversation about how to build a more human world.
      </div>
    </ListScreen>
}