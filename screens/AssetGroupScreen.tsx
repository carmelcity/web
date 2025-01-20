import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { AssetGroupCard } from '~/components/cards'
import { useCarmel } from '~/sdk'

export const AssetGroupScreen = () => {
    const router = useRouter()
    const itemId: any = router.query.id
    const carmel = useCarmel()
    
    const getCollection = () => {
      if (carmel.isLoading || !carmel.data || !carmel.data.collections) return
      const item = carmel.data.collections.find((i: any) => i.username === itemId)

      return item
    }

    if (carmel.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    return <div className='w-full flex flex-col items-center mt-20 mb-20 p-4'>
         <AssetGroupCard {...getCollection()} noAction wide isLoading={carmel.isLoading} section="collections"/>
     </div>
  }

// import React from 'react';
// import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
// import { CarmelCard } from '~/components/cards'
// import { ListScreen } from './ListScreen'

// export const AssetGroupScreen = (props: any) => {
//     return <ListScreen
//       title="Top Carmels"
//       onItemPress='/:carmelId'
//       actionTitle="View Carmel"
//       subtitle=""
//       name="collections"   
//       placeholder={ListPlaceholder}
//       shortIntro
//       card={CarmelCard}
//       {...props}
//     >
//       <div className='w-full text-lg mt-4 mb-10 text-center'>
//         A Carmel is a meaningful conversation about how to build a more human world.
//       </div>
//     </ListScreen>
// }