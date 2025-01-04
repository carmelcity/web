import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { BannerImage } from '~/elements'

const BANNER_PLACEHOLDER = `/images/bg-1.png`
const PROFILE_PLACEHOLDER = `/images/profile_placeholder.webp`

const ProfileImage = ({ image, isLoading }: any) => {
  return <div className="absolute lg:top-[50%] top-[32%] lg:left-10 left-[25%]">
        <div className="mask mask-hexagon rounded-none bg-primary bg-opacity-20 border border-1 border-cyan/50">
          { isLoading || <Image
            src={image || PROFILE_PLACEHOLDER}
            alt="profile"
            width={80}
            height={80}
            className={`mask ${isLoading && 'animate-pulse' } lg:w-48 lg:h-48 w-48 h-48 mask-hexagon object-fit`}
          /> }
        </div>
        {/* {isEditable && (
          <div
            className={`${readex_pro.className} text-white px-1 font-thin cursor-pointer absolute flex items-center right-0 z-50 bottom-8`}
            onClick={onEdit}>
            <Image src={EditIcon} alt="edit" />
          </div>
        )} */}
      </div>
}
export const Container = ({ noThumbnail, children, data }: any) => {
    const BannerSection = () => {
      if (!data) {
        return <div/>
      }

      return <BannerImage isLoading={data.isLoading} image={data.item.banner || BANNER_PLACEHOLDER}>
              { noThumbnail || <ProfileImage isLoading={data.isLoading} image={data.item.profile || PROFILE_PLACEHOLDER}/> }
          </BannerImage>
    }

    return (
      <div className="bg-dark-indigo w-full flex justify-center m-auto -mt-24 lg:mt-4 w-full">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center w-full relative z-30">
          <div className="flex flex-col justify-start items-center pb-32 pt-32 lg:pt-4 min-h-full w-full m-4 lg:mt-0 mt-12">
              <BannerSection/>
              { children }
          </div>
        </div>
      </div>
  )
}