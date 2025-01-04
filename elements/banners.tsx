import Image from 'next/image';

export const BannerImage = ({ banner, forceBanner, thumbnail, children }: any) => {
  return <div
      className={`w-full flex-col flex justify-center`}>
      <div className="lg:hidden block relative flex">
            <Image src={forceBanner ? banner : thumbnail} alt="card" className="object-cover w-full" width={300} height={300}/>
      </div>
      <div className="hidden lg:block relative flex">
            <Image src={banner} alt="card" className="object-cover w-full" width={1500} height={500}/>
      </div>   
      { children }  
      </div>
}
