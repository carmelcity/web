import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { ChallengeCard } from '~/components/cards'

export const ChallengeScreen = () => {
    const router = useRouter()
    const itemId: any = router.query.id
    
    // if (data.isLoading) {
      return <ProfileHeaderPlaceholder/>
    // }

    // return <Container>
    //     <ChallengeCard {...data.item} noAction isLoading={data.isLoading}/>
    // </Container>
  }