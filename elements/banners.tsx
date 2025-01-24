import Image from 'next/image';
import PhotoIcon from '~/images/dashboard/PhotoIcon.webp';
import { readex_pro } from '~/elements'
import { getImageUrl } from '~/utils/main';

const BANNER_PLACEHOLDER = `/images/bg-1.png`

export const BannerImage = ({ banner, section, username, raw, isEditable, onEdit, forceBanner, avatar, children }: any) => {
      const bannerImageSmall = banner ? raw ? banner : getImageUrl(username, 'banner', section) : BANNER_PLACEHOLDER
      const bannerImage  = banner ? raw ? banner : getImageUrl(username, 'banner', section) : BANNER_PLACEHOLDER
      
      return <div
            className={`w-full flex-col flex justify-center items-center`}>
            <div className="lg:hidden block relative flex">
                  <Image src={bannerImageSmall} alt="card" className="object-cover w-full" width={500} height={500}/>
                  { children }  
            </div>
            <div className="hidden lg:block relative flex bg-black w-full">
                  <Image src={bannerImage} alt="card" className="object-cover w-full" width={1500} height={500}/>
                  { children }  
            </div>  
            { isEditable && <div className={`${readex_pro.className} flex text-white bg-black bg-opacity-40 lg:p-4 p-1 mr-2 font-thin cursor-pointer absolute items-center mt-2 top-0 right-0 border border-1 border-cyan`} onClick={onEdit}>
                  <Image src={PhotoIcon} alt="photo"/>
                  <span className={`${readex_pro.className} ml-2 font-normal`}>Change Cover</span>
            </div> }
      </div>
}