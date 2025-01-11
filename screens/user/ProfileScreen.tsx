import { Container } from './Container';
import { useEffect, useState } from 'react';
import { showSuccessToast, readex_pro } from '~/elements';
import { ProfileIntro } from './ProfileIntro'
import Image from 'next/image'

const BANNER_PLACEHOLDER = `/images/bg-1.png`
const PROFILE_PLACEHOLDER = `/images/profile_placeholder.webp`

export const ProfileScreen = ({ auth }: any) => {
  const [isLoading, setIsLoading] = useState(true)
  const [bannerImage, setBannerImage] = useState(BANNER_PLACEHOLDER);
  const [profileImage, setProfileImage] = useState(PROFILE_PLACEHOLDER);
  const [isEditable, setIsEditable] = useState(false)
  const [bio, setBio] = useState('');
  const [bannerChanged, setBannerChanged] = useState(false)
  const [avatarChanged, setAvatarChanged] = useState(false)
  const [bioChanged, setBioChanged] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)
  const [bannerImageData, setBannerImageData] = useState<any>()
  const [avatarImageData, setAvatarImageData] = useState<any>()

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

    setBio(bio)
    setBannerImage(banner || BANNER_PLACEHOLDER)
    setProfileImage(profile || PROFILE_PLACEHOLDER)

    setIsLoading(false)
  }, [auth.profile])

  const handleEdit = async (e: any) => {
    e.preventDefault()

    if (!isEditable) {
      setIsEditable(true)
      return 
    }

    setIsEditable(false)
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

  const onCancelEdit = async () => {
    setIsLoading(false)
    setIsEditable(false)
    await auth.getFreshProfile()
  }

  const ActionButtons = () => {
    if (isLoading) {
      return <div/>
    }

    return <div className="flex flex-row w-full justify-center">
       {isEditable && <button
          onClick={onCancelEdit}
          className={`${readex_pro.className} font-normal text-primary xs:mt-4 p-3 w-40 sm:w-40 bg-black border border-primary/50 mr-8`}>
            { 'Cancel' }
        </button> }
        <button
          type="submit"
          className={`${readex_pro.className} font-normal text-gray-900 xs:mt-4 p-3 w-40 sm:w-40 bg-primary`}>
            { isEditable ? 'Save Changes' : 'Edit Profile' }
        </button>
      
      </div>
  }

  return <Container name="Profile" icon="UserIcon">
      <div className={`flex flex-col justify-start relative w-full mb-20`}>
      <form method='post' onSubmit={handleEdit}>
        <ProfileIntro 
         isLoading={isLoading}
         bannerImage={bannerImage} 
         profileImage={profileImage}
         isEditable={isEditable}
         onBannerEdit={handleEditBannerEdit}
         onProfileEdit={handleEditProfileEdit}
         email={auth.profile.email}
         username={auth.profile.username}
         bio={auth.profile.bio}        
        />
        
        <ActionButtons/>
      </form>
    </div>     
  </Container>
}