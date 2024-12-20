import Image from 'next/image';
import EditIcon from '~/images/dashboard/EditIcon.webp';
import PhotoIcon from '~/images/dashboard/PhotoIcon.webp';
import { useEffect, useState } from 'react';
import { showErrorToast, showSuccessToast } from '../toasts';
import { SmallSpinner } from '../spinner';
import { useCarmelAuth } from '~/sdk';
import { readex_pro } from '~/components/fonts'

const BANNER_PLACEHOLDER = `/images/bg-1.png`
const PROFILE_PLACEHOLDER = `/images/profile_placeholder.webp`

const ProfileImage = ({ isEditable, image, onEdit }: any) => {
  return <div className="absolute top-[59%] xs:top-[67%] xs:left-10">
        <div className="mask mask-hexagon rounded-none bg-primary bg-opacity-20 border border-1 border-cyan/50">
          <Image
            src={image || PROFILE_PLACEHOLDER}
            alt="profile"
            width={80}
            height={80}
            className="mask lg:w-48 lg:h-48 w-48 h-48 mask-hexagon object-fit"
          />
        </div>
        {isEditable && (
          <div
            className={`${readex_pro.className} text-white px-1 font-thin cursor-pointer absolute flex items-center right-0 z-50 bottom-8`}
            onClick={onEdit}>
            <Image src={EditIcon} alt="edit" />
          </div>
        )}
      </div>
}

const BannerImage = ({ isEditable, image, onEdit, children }: any) => {
  return <div
      className={`
        w-full flex justify-center
        bg-cover bg-no-repeat bg-center relative h-60 xs:h-80 z-10
        border border-primary/20
      `}
      style={{ backgroundImage: `url(${image})` }}>
      {isEditable && (
        <div
          className={`${readex_pro.className} flex text-white bg-black bg-opacity-40 p-3 font-thin cursor-pointer absolute items-center mt-5 sm:bottom-4 right-4 border border-1 border-cyan`}
          onClick={onEdit}>
          <Image src={PhotoIcon} alt="photo" />
          <span className={`${readex_pro.className} ml-2 font-normal `}>Change Cover</span>
        </div>
      )}
      { children }
    </div>
}

export const Profile = () => {
  const auth = useCarmelAuth()

  const [isLoading, setIsLoading] = useState(true)
  const [bannerImage, setBannerImage] = useState(BANNER_PLACEHOLDER);
  const [profileImage, setProfileImage] = useState(PROFILE_PLACEHOLDER);
  const [isEditable, setIsEditable] = useState(false)
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

  const refreshData = () => {
    (async () => {
      await auth.getFreshProfile()
    })()
  }

  useEffect(() => {
    refreshData()
  }, [])

  useEffect(() => {
    if (!auth.profile || !auth.profile.username) {
      return 
    }
    
    const { bio, banner, profile } = auth.profile
      
    bio && setBio(bio)
    banner && setBannerImage(banner)
    profile && setProfileImage(profile)

    setIsLoading(false)
  }, [auth.profile])

  const handleEdit = async (e: any) => {
    e.preventDefault()

    if (!isEditable) {
      setIsEditable(true)
      return 
    }

    setIsLoading(true)

    const formData = new FormData(e.target)
    const data: any = Object.fromEntries(formData.entries())

    const bioText = data.bio.length > 0 ? `data:application/json;base64,${Buffer.from(data.bio).toString('base64')}` : ""
    setBio(data.bio)

    const result = await auth.updateProfile({
      bannerImage, profileImage, bioText
    })

    await auth.getFreshProfile()

    setIsLoading(false)
    setIsEditable(false)
    showSuccessToast("Profile updated")     
  }

  const handleEditBannerEdit = async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.addEventListener('change', async (event: any) => {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = async (e: any) => {
        setBannerImageData(file)
        setBannerImage(e.target.result)
        setBannerChanged(true)
        setHasChanges(true)
      }
      reader.readAsDataURL(file)
    })

    input.click()
  }

  const handleEditProfileEdit = async () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.addEventListener('change', async (event: any) => {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = async (e: any) => {
        setAvatarImageData(file)
        setProfileImage(e.target.result)
        setAvatarChanged(true)
        setHasChanges(true)
      }

      reader.readAsDataURL(file)
    })

    input.click()
  }

  const ProfileSummary = () => {
    if (!isEditable) {
      return <div className="mb-12 relative z-10 w-full items-start flex flex-col">
                <div className={`${readex_pro.className} font-thin text-gray-400 text-lg mt-5 mb-0`}>
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

  const ActionButtons = () => {
    return <div className="flex flex-col w-full items-center">
        <button
          type="submit"
          className={`${readex_pro.className} font-normal text-gray-900 xs:mt-4 p-3 w-40 sm:w-40 bg-primary`}>
            { isEditable ? 'Save Changes' : 'Edit Profile' }
        </button>
      </div>
  }

  const Username = () => {
    return <div className="relative z-10 mx-auto mt-24 xs:mt-0 xs:ml-60">
          <h1 className={`${readex_pro.className} mt-5 lg:text-4xl text-3xl`}>
            { auth.profile.username }
          </h1>
        </div>
  }

  const Email = () => {
    return <div className="flex mx-auto mt-0 xs:ml-60">
          <span className={`${readex_pro.className} font-thin text-primary text-opacity-60 text-lg`}>
            { auth.profile.email }
          </span>
        </div>
  }

  const Progress = () => {
    return <div className="flex flex-col sm:flex-row lg:ml-60 px-5 lg:px-0"> 
      <SmallSpinner/> 
    </div>
  }
  
  if (isLoading) {
    return <SmallSpinner/>
  }

  return (
    <div className={`flex flex-col justify-start relative w-full px-2 lg:px-12 mb-20`}>
      <form method='post' onSubmit={handleEdit}>
        <div className={`flex flex-col justify-start relative bg-black/80 border-b border-primary/20 mb-8 w-full`}>
          <BannerImage image={bannerImage} isEditable={isEditable} onEdit={handleEditBannerEdit}>
              <ProfileImage image={profileImage} isEditable={isEditable} onEdit={handleEditProfileEdit}/>
          </BannerImage>
          <div className="flex flex-col">
              <Username/>
              <Email/>
              <div className='w-full lg:px-60 mt-2 flex flex-col items-center'>
                <ProfileSummary/>
              </div>
          </div>
        </div>
        <ActionButtons/>
      </form>
    </div>
  )
}