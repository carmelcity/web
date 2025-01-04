import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useCarmelItem } from '~/sdk/hooks';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { CarmelCard } from '~/components/cards'

export const CarmelScreen = () => {
    const router = useRouter()
    const itemId: any = router.query.id
    
    const data = useCarmelItem('carmels', itemId)

    if (data.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    return <Container>
        <CarmelCard {...data.item} noAction isLoading={data.isLoading}/>
    </Container>
  }