import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { ChallengeCard } from '~/components/cards'
import { useCarmel } from '~/sdk'
 
export const ChallengeScreen = () => {
    const router = useRouter()
    const itemId: any = router.query.id
    const carmel = useCarmel()
   
    if (carmel.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const getChallenge = () => {
      if (carmel.isLoading || !carmel.data || !carmel.data.challenges) return
      const item = carmel.data.challenges.find((i: any) => parseInt(i.challengeId) === parseInt(itemId))

      return item
    }

    return <div className='w-full flex flex-col items-center lg:mt-0 mt-20 mb-20 p-4'>
         <ChallengeCard {...getChallenge()} noAction wide isLoading={carmel.isLoading}/>
     </div>
  }