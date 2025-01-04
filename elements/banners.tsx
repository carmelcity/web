import Image from 'next/image';
import PhotoIcon from '~/images/dashboard/PhotoIcon.webp';
import { readex_pro } from '~/elements/fonts'

export const BannerImage = ({ isLoading, image, children }: any) => {
  return <div
      className={`w-full flex-col flex justify-center`}>
      <div className="lg:hidden block relative flex">
            <Image src={image} alt="card" className="object-cover h-48 w-full" width={1500} height={300}/>
      </div>
      <div className="hidden lg:block relative flex">
            <Image src={image} alt="card" className="object-cover h-[500px] w-full" width={1500} height={500}/>
      </div>   
      { children }  
      </div>
}
