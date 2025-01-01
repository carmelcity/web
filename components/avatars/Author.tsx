import { HexagonalAvatarWithProperty } from './HexagonalAvatarWithProperty';

export const Author = ({
    image, username, community
}: any) => {
    return <div className="flex flex-row mt-auto mb-1">
      <HexagonalAvatarWithProperty
        profileImage={image}
        alt="User"
        username={username}
        communityName={community}
      />           
  </div>
  }