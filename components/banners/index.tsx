import Image from 'next/image';
import PhotoIcon from '~/images/dashboard/PhotoIcon.webp';
import { readex_pro } from '~/components/fonts'

export const BannerImage = ({ isLoading, image, children }: any) => {
  return  <div
      className={`
        ${isLoading && 'animate-pulse'}
        w-full flex justify-center
        bg-cover bg-no-repeat bg-center object-cover relative lg:h-[500px] h-64
        border border-primary/20
      `}
      style={{ backgroundImage: `url(${image})` }}>
      { children }
    </div>

    //     {isEditable && (
    //       <div
    //         className={`${readex_pro.className} flex text-white bg-black bg-opacity-40 p-3 font-thin cursor-pointer absolute items-center mt-5 sm:bottom-4 right-4 border border-1 border-cyan`}
    //         onClick={onEdit}>
    //         <Image src={PhotoIcon} alt="photo"/>
    //         <span className={`${readex_pro.className} ml-2 font-normal `}>Change Cover</span>
    //       </div>
    //     )}
}
