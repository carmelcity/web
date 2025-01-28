import { SimpleAvatar, ComplexAvatar } from './avatars';
import moment from 'moment'
import { getImageUrl } from '~/utils/main';

export const Author = ({
    image, username, community
}: any) => {
    return <div className="flex flex-row mt-auto mb-1">
      <ComplexAvatar
        profileImage={image}
        alt="User"
        username={username}
        communityName={community}
      />           
  </div>
}


export const PostAuthor = ({
  image, username, updatedOn
}: any) => {
  return <div className="flex flex-row mt-auto mb-1">
    <ComplexAvatar
      noCommunityLink
      profileImage={image}
      alt="User"
      username={username}
      communityName={moment.unix(updatedOn / 1000).fromNow()}
    />           
</div>
}

export const Community = ({
  image, username
}: any) => {
  return <div className="flex flex-row mt-auto mb-1">
    <ComplexAvatar
      noCommunityLink
      profileImage={image}
      alt="Community"
      communityName={"community"}
      username={username}
    />           
</div>
}

 export const People = ({ all, size }: any) => {
    return <div className="px-8 flex flex-row items-center">
      { all.slice(0, size).map((p: any, i: number) => <div key={`${i}-num`} className='-ml-2 z-10'><SimpleAvatar src={getImageUrl(p)} className=""/></div>) }
          <div className="flex items-center justify-center ml-3 mt-1">
            <span className="text-gray-300 text-sm font-bold"> 
              { all.length > size ? `+${all.length - size}\u00A0more` : `${all.length}\u00A0${all.length === 1 ? 'person' : 'people'}` }
            </span> 
          </div>
    </div>
}