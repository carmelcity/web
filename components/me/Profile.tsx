import { Readex_Pro } from 'next/font/google';
import Image from 'next/image';
import { ProfileHeaderNotEditablePlaceholder, ProfileHeaderPlaceholder } from '~/components/placeholders/ProfileHeader';
import EditIcon from '~/images/dashboard/EditIcon.webp';
import PhotoIcon from '~/images/dashboard/PhotoIcon.webp';
import { useEffect, useState } from 'react';
import { showErrorToast, showSuccessToast } from '../toasts';
import { SmallSpinner } from '../spinner';

const BANNER_PLACEHOLDER = `/images/bg-1.png`
const PROFILE_PLACEHOLDER = `/images/profile_placeholder.webp`

const readex_pro = Readex_Pro({ subsets: ['latin'] });

export const Profile = () => {
  const [bannerImage, setBannerImage] = useState(BANNER_PLACEHOLDER);
  const [profileImage, setProfileImage] = useState(PROFILE_PLACEHOLDER);
  const [isEditable, setIsEditable] = useState(true)
  const [bio, setBio] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [updating, setUpdating] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [bannerChanged, setBannerChanged] = useState(false)
  const [avatarChanged, setAvatarChanged] = useState(false)
  const [bioChanged, setBioChanged] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)
  const [bannerImageData, setBannerImageData] = useState<any>()
  const [avatarImageData, setAvatarImageData] = useState<any>()

  const borderColor = isFocused ? '#00FFF0' : isHovered ? '#00FFF052' : '#00FFF029'

  const initializeState = () => {
    // bioChanged || setBio(user?.dataState?.userData?.bio || '')
    // bannerChanged || setBannerImage(user?.dataState?.userData?.files?.banner?.link || BANNER_PLACEHOLDER)
    // avatarChanged || setProfileImage(user?.dataState?.userData?.files?.avatar?.link || PROFILE_PLACEHOLDER)
  }

  // useEffect(() => {
  //   if (!isLoading && data) {
  //     initializeState()
  //   }
  // }, [isLoading, data])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlaceholder(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // if ((isLoading || !showPlaceholder) && isEditable) {
  //   return <ProfileHeaderPlaceholder />
  // }
  // if ((isLoading || !showPlaceholder) && !isEditable) {
  //   return <ProfileHeaderNotEditablePlaceholder />
  // }

  const handleSave = async () => {
    try {
      setUpdating(true)
      // await user.data.updateAccount({ bannerImageData, avatarImageData, bio })

      setAvatarImageData(undefined)
      setBannerImageData(undefined)
      setBannerChanged(false)
      setAvatarChanged(false)
      setBioChanged(false)
      setHasChanges(false)
      setUpdating(false)
      showSuccessToast('Changes saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      setUpdating(false)
      showErrorToast('An error occurred while saving changes');
    }
  }

  const handleBioChange = (event: any, maxCharacters: number) => {
    const input = event.target.value;
    if (input.trim() !== '' && input.length <= maxCharacters) {
      setBio(input)
      if (input !== bio) {
        setBioChanged(true)
        setHasChanges(true)
      } else {
        setBioChanged(false)
        setHasChanges(false)
      }
    }
  }

  const handleEditBannerClick = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.addEventListener('change', (event: any) => {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = (e: any) => {
        setBannerImageData(file)
        setBannerImage(e.target.result)
        setBannerChanged(true)
        setHasChanges(true)
      }
      reader.readAsDataURL(file)
    })

    input.click()
  }

  const handleEditProfileClick = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.addEventListener('change', (event: any) => {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = (e: any) => {
        setAvatarImageData(file)
        setProfileImage(e.target.result)
        setAvatarChanged(true)
        setHasChanges(true)
      }
      reader.readAsDataURL(file)
    })

    input.click()
  }

  return (
    <div
      className={`flex flex-col justify-start h-auto mx-auto mt-4 xs:mt-10 mb-4 pb-10 relative bg-dark-green/80 border border-primary/50`}
      style={{
        width: isEditable ? '94%' : '100%',
      }}>
      <div
        className={`
          w-full flex justify-center
          bg-cover bg-no-repeat bg-center relative h-60 xs:h-80 z-10
          border border-primary/20
        `}
        style={{ backgroundImage: `url(${bannerImage})` }}>
        {isEditable && (
          <div
            className={`${readex_pro.className} flex text-white bg-black bg-opacity-40 p-3 font-thin cursor-pointer absolute items-center mt-5 sm:bottom-4 right-4 border border-1 border-cyan`}
            onClick={handleEditBannerClick}>
            <Image src={PhotoIcon} alt="photo" />
            <span className={`${readex_pro.className} ml-2 font-normal `}>Change Cover</span>
          </div>
        )}
        <div className="absolute top-[59%] xs:top-[67%] xs:left-10">
          <div className="mask mask-hexagon rounded-none bg-primary bg-opacity-20 border border-1 border-cyan/50">
             <Image
              src={profileImage || PROFILE_PLACEHOLDER}
              alt="profile"
              width={80}
              height={80}
              className="mask lg:w-48 lg:h-48 w-48 h-48 mask-hexagon object-fit"
            />
          </div>
          {isEditable && (
            <div
              className={`${readex_pro.className} text-white px-1 font-thin cursor-pointer absolute flex items-center right-0 z-50 bottom-8`}
              onClick={handleEditProfileClick}>
              <Image src={EditIcon} alt="edit" />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-col">
          <div className="relative z-10 mx-auto mt-24 xs:mt-0 xs:ml-60">
            <h1 className={`${readex_pro.className} mt-5 lg:text-4xl text-3xl`}>
              {/* {user?.dataState?.username} */}
            </h1>
          </div>
          <div className="flex mx-auto mt-0 xs:ml-60">
            <span className={`${readex_pro.className} font-thin text-primary text-opacity-60 text-md`}>
              {/* { user?.dataState?.user.email } */}
            </span>
          </div>
          <div className="mb-5 relative z-10 mt-2 px-5 lg:px-0 lg:ml-60">
            {isEditable ? (
              <div>
                <div className={`${readex_pro.className} font-thin text-grey mt-5 mb-0`}>Profile description</div>
                <textarea
                  value={bio}
                  onChange={event => handleBioChange(event, 500)}
                  className={`${readex_pro.className} border border-opacity-10 text-left p-2 bg-secondary mt-2 h-auto w-full sm:w-[500px] min-h-[130px] max-h-60`}
                  style={{
                    borderColor: borderColor,
                    outline: 'none',
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <div className={`${readex_pro.className} font-thin text-grey`}>
                  {bio.length}/{500}
                </div>
              </div>
            ) : (
              <div>
                <div className={`${readex_pro.className} text-grey font-normal mt-2 h-auto w-full max-h-60`}>
                  {bio}
                </div>
              </div>
            )}
          </div>
          { updating && <div className="flex flex-col sm:flex-row lg:ml-60 px-5 lg:px-0"> <SmallSpinner/> </div> }
          {isEditable && !updating && (
            <div className="flex flex-col sm:flex-row lg:ml-60 px-5 lg:px-0">
              <button
                onClick={handleSave}
                disabled={!hasChanges}
                className={`${readex_pro.className} font-normal xs:mt-4 p-3 w-40 sm:w-40`}
                style={{
                  border: `2px solid ${hasChanges ? 'cyan' : '#053D36'}`,
                  color: hasChanges ? 'cyan' : '#053D36',
                  cursor: hasChanges ? 'pointer' : 'not-allowed',
                }}>
                Save Changes
              </button>
            </div>
          )}
        </div>
        {/* {isEditable && (
          <Image src={user?.nft || nft} alt="nft" className="lg:w-[30%] 2xl:ml-auto lg:ml-60 2xl:mr-8 mt-8 p-5" />
        )} */}
      </div>
    </div>
  )
}