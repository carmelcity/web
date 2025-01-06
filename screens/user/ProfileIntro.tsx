import Image from 'next/image';
import EditIcon from '~/images/dashboard/EditIcon.webp';
import { readex_pro } from '~/elements/fonts'
import { ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import { BannerImage } from '~/elements'

const BANNER_PLACEHOLDER = `/images/bg-1.png`
const PROFILE_PLACEHOLDER = `/images/profile_placeholder.webp`

const ProfileImage = ({ isEditable, image, onEdit, isLoading }: any) => {
    return <div className={`absolute lg:top-[70%] top-[30%] lg:left-10 left-[32%]`}>
          <div className="mask mask-hexagon rounded-none bg-primary bg-opacity-20 border border-1 border-cyan/50">
            { isLoading || <Image
              src={image || PROFILE_PLACEHOLDER}
              alt="profile"
              width={80}
              height={80}
              className={`mask ${isLoading && 'animate-pulse' } lg:w-48 lg:h-48 w-32 h-32 mask-hexagon object-fit`}
            /> }
          </div>
          {isEditable && (
            <div
              className={`${readex_pro.className} text-white px-1 font-thin cursor-pointer absolute flex items-center right-0 z-50 bottom-2 lg:bottom-8`}
              onClick={onEdit}>
              <Image src={EditIcon} alt="edit" />
            </div>
          )}
        </div>
  }

  const Username = ({ username, isLoading }: any) => {
    return <div className={`relative z-10 mx-auto mt-24 xs:mt-0 xs:ml-60`}>
          <h1 className={`${readex_pro.className} mt-5 lg:text-4xl text-3xl`}>
            { isLoading ? '' : username }
          </h1>
        </div>
  }

  const Email = ({ email, isLoading }: any) => {
    return <div className="flex mx-auto mt-0 xs:ml-60">
          <span className={`${readex_pro.className} font-thin text-primary text-opacity-60 text-lg`}>
            { isLoading ? '' : email }
          </span>
        </div>
  }

  const ProfileSummary = ({ isEditable, bio }: any) => {
    if (!isEditable) {
      return <div className="mb-12 relative z-10 w-full items-start flex flex-col">
                <div className={`${readex_pro.className} font-thin text-gray-400 text-left text-lg mt-5 mb-0 lg:px-0 px-4`}>
                    { bio }
                </div>
              </div>
    }

    return <div className="mb-12 relative z-10 w-full items-start flex flex-col px-2 ">
                <div className={`${readex_pro.className} font-thin text-grey mt-5 mb-0`}>
                  Update your bio
                </div>
                <textarea
                  defaultValue={bio}
                  name="bio"
                  className={`${readex_pro.className} border border-opacity-10 text-left p-2 bg-secondary mt-2 w-full h-48 border-primary/50`}
                />
      </div>
  }

  export const ProfileIntro = ({
    isLoading, bannerImage, profileImage, isEditable, 
    onBannerEdit, onProfileEdit,
    email, username, bio
  }: any) => {

    if (isLoading) {
      return <ProfileHeaderPlaceholder/>
    }

    return <div className={`flex flex-col justify-start relative bg-black/80 border border-primary/20 mb-8 w-full`}>
         <BannerImage
            forceBanner
            isLoading={isLoading} 
            banner={bannerImage} 
            isEditable={isEditable} 
            onEdit={onBannerEdit}>
                    <ProfileImage 
                        isLoading={isLoading} 
                        image={profileImage} 
                        isEditable={isEditable} 
                        onEdit={onProfileEdit}/>
            </BannerImage>
          <div className={`flex flex-col ${isLoading && 'animate-pulse'}`}>
              <Username username={username} isLoading={isLoading}/>
              <Email email={email} isLoading={isLoading}/>
              <div className='w-full lg:px-60 mt-2 flex flex-col items-center'>
                <ProfileSummary bio={bio} isEditable={isEditable}/>
              </div>
          </div>
        </div>
  }