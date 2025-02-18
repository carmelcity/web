import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MobileNavigation } from '~/components/layout/MobileNavigation';
import { SidebarNavigation } from '~/components/layout/SidebarNavigation';
import { Navbar } from '~/components/layout/Navbar';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import Image from 'next/image';
import { Spinner } from '~/elements'

export const AppLayout = ({ auth, children }: any) => {
  return (
      <div className="flex w-full mx-auto justify-center lg:pb-0">
          <div className="w-80 hidden lg:flex">
            <SidebarNavigation auth={auth}/>
          </div>     
          <div className="lg:hidden">
            <MobileNavigation />
          </div>
          <div className="flex flex-col w-full z-0">
            <Navbar auth={auth}/>
            <div className='lg:mt-20 mt-0'>
                {children}
             </div>
          </div>
    </div>
  )
}

export const AppLoadingLayout = ({ children }: any) => {
  return (
    <div className="">
      <div className="flex w-full mx-auto justify-center lg:pb-0">       
          <div className="lg:hidden">
            <MobileNavigation />
          </div>
        <div className="flex flex-col w-full z-0 ">
            <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full animate-pulse" />
            <Image src={wire1} alt="wire1" className="z-0 top-[40%] absolute animate-pulse" />
            <Image src={wire2} alt="wire2" className="z-0 top-[40%] absolute animate-pulse" />     
        </div>

      </div>
    </div>
  )
}

export const PrivateLayout = ({ children, auth, minLevel = 0 }: any) => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoggedIn() || auth.profile.level < minLevel) {
      router.push("/")
      return
    }

    setIsLoading(false)
  }, [])

  return <AppLayout auth={auth}>
           <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
            <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
            <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />     
              { isLoading ? <div className='flex flex-col items-center align-center justify-center h-screen'><Spinner/></div> : children }
          </AppLayout>
}

export const LandingLayout = ({ children, env }: any) => {
  return (
    <div className="">
      <div className="flex w-full mx-auto justify-center pb-16 lg:pb-0">
        <div className="flex flex-col w-full">
           <Navbar />
           <div className='lg:mt-32'>
            {children}
          </div>
        </div>      
      </div>
    </div>
  )
}

export const WaitLayout = ({ children, env }: any) => {
  return (
    <div className="flex w-full h-full mx-auto justify-center pb-16 lg:pb-0">
        <div className="flex flex-col w-full">
           <div className='lg:mt-32'>
            {children}
          </div>
        </div>      
    </div>
  )
}

export const AccessLayout = ({ children, env }: any) => {
  return (
          <div className="bg-dark-indigo w-full flex justify-center m-auto">
            <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
            <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
            <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
       
            <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
              <div className="flex flex-col justify-center items-center w-11/12 min-h-full">
                {children}
              </div>
          </div>      
        </div>
  )
}