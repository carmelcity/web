import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader'
import { readexPro } from '~/elements/fonts'
import { CarmelBox, Engagements, ActionButton, Community, Author, People, Tags, DynamicIcon, PostIntro, PostText } from '~/elements';
import { getImageUrl } from '~/utils/main';
import { useRouter } from 'next/router';

export const CarmelEditCard = ({ 
  onDone, 
  onCancel,
  carmelId,
  isLoading, 
  author, 
  community,
  title, 
  intro, 
  tags,
}: any) => {    

    const router = useRouter()
    
    if (isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    const text = `${intro}`

     return <div className={`flex flex-col justify-start relative w-full border border-primary/10 p-4 bg-black/50`}>
        <CarmelBox title={title} text={text} onDone={onDone} onCancel={onCancel} author={author} community={community} tags={tags} carmelId={carmelId}/>
    </div>
}