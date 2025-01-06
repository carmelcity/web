import Image from 'next/image';
import PhotoIcon from '~/images/dashboard/PhotoIcon.webp';
import { readex_pro } from '~/elements'

export const BannerImage = ({ banner, isEditable, onEdit, forceBanner, thumbnail, children }: any) => {
  return <div
      className={`w-full flex-col flex justify-center items-center`}>
      <div className="lg:hidden block relative flex">
            <Image src={forceBanner ? banner : thumbnail} alt="card" className="object-cover w-full" width={500} height={500}/>
            { children }  
      </div>
      <div className="hidden lg:block relative flex bg-black w-full">
            <Image src={banner} alt="card" className="object-cover w-full" width={1500} height={500}/>
            { children }  
      </div>  
      { isEditable && <div className={`${readex_pro.className} flex text-white bg-black bg-opacity-40 lg:p-4 p-1 mr-2 font-thin cursor-pointer absolute items-center mt-2 top-0 right-0 border border-1 border-cyan`} onClick={onEdit}>
              <Image src={PhotoIcon} alt="photo"/>
              <span className={`${readex_pro.className} ml-2 font-normal`}>Change Cover</span>
      </div> }
     
   </div>
}