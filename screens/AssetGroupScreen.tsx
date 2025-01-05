import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useCarmelItem } from '~/sdk/hooks';
import { useRouter } from 'next/router'
import { Container } from './Container';
import { AssetGroupCard } from '~/components/cards'

export const AssetGroupScreen = () => {
    const router = useRouter()
    const itemId: any = router.query.id
    
    const data = useCarmelItem('assetgroups', itemId)

    if (data.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    return <Container>
        <AssetGroupCard {...data.item} noAction isLoading={data.isLoading}/>
    </Container>
  }