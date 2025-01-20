// import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
// import { useRouter } from 'next/router'
// import { Container } from './Container';
// import { AssetGroupCard } from '~/components/cards'

// export const AssetGroupScreen = () => {
  
//     // const router = useRouter()
//     // const itemId: any = router.query.id
    
//     // if (data.isLoading) {
//     //   return <ProfileHeaderPlaceholder/>
//     // }

//     // return <Container>
//     //     <AssetGroupCard {...data.item} noAction isLoading={data.isLoading}/>
//     // </Container>
//   }

import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const AssetGroupScreen = (props: any) => {
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