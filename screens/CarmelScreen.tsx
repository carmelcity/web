import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useCarmelItem } from '~/sdk/hooks';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { CarmelCard } from '~/components/cards'
import { CarmelPosts } from '~/components/posts'

export const CarmelScreen = () => {
    const router = useRouter()
    const itemId: any = router.query.id
    
    const data = useCarmelItem('carmels', itemId)

    if (data.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    console.log(data.item.posts)

    return <Container>
      <CarmelCard {...data.item} noAction isLoading={data.isLoading}/>
      <CarmelPosts posts={data.item.posts}/>
    </Container>
  }