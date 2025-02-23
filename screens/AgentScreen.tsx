import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { AgentCard } from '~/components/cards'
import { useCarmel } from '~/sdk'
 
export const AgentScreen = () => {
    const router = useRouter()
    const itemId: any = router.query.id
    const carmel = useCarmel()
   
    if (carmel.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const getAgent = () => {
      if (carmel.isLoading || !carmel.data || !carmel.data.agents) return
      const item = carmel.data.agents.find((i: any) => i.name.toLowerCase() === itemId.toLowerCase())
    
      console.log(item)

      return item
    }

    return <div className='w-full flex flex-col items-center lg:mt-0 mt-20 mb-20 p-4'>
         <AgentCard {...getAgent()} noAction wide isLoading={carmel.isLoading}/>
     </div>
  }