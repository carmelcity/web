import { readex_pro } from '~/elements/fonts'
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { useCarmelItem } from '~/sdk/hooks';
import { useRouter } from 'next/router'
import { Container } from './Container';

const Username = ({ username, isLoading }: any) => {
  return <div className={`relative z-10 lg:ml-64 mx-auto lg:mt-0 mt-16`}>
        <h1 className={`${readex_pro.className} mt-5 lg:text-4xl text-3xl`}>
          { isLoading ? '' : username }
        </h1>
      </div>
}

const ProfileSummary = ({ bio }: any) => {
    return <div className="relative z-10 lg:ml-64">
              <div className={`${readex_pro.className} font-thin text-gray-400 text-left text-lg mt-5 mb-0`}>
                  { bio }
              </div>
            </div>
}

export const AccountScreen = () => {
    const router = useRouter()
    const itemId: any = router.query.id
    
    const data = useCarmelItem('accounts', itemId)

    if (data.isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    return <Container data={data}>
          <div className={`flex flex-col ${data.isLoading && 'animate-pulse'} align-start items-start w-full bg-black/80 border border-primary/20 pb-10 px-4`}>
              <Username username={data.item.username} isLoading={data.isLoading}/>
              <ProfileSummary bio={data.item.bio}/>
          </div>
    </Container>
  }