import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MobileNavigation } from '~/components/layout/MobileNavigation';
import { MobileTopNavbar } from '~/components/layout/MobileTopNavbar';
import { TopNavBar } from '~/components/layout/TopNavbar';
import { SidebarNavigation } from '~/components/layout/SidebarNavigation';
import { Navbar } from '~/components/layout/Navbar';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import Image from 'next/image';
import { Spinner } from '~/components/spinner'
import { useCarmelAuth } from '~/sdk';
import { PublicEnvScript } from 'next-runtime-env';

export const AppLayout = ({ children, user }: any) => {
  const navData: any = [];
  const isLoading = true;
  const router = useRouter();
  const [isReady, setIsready] = useState(false)

  useEffect(() => {
    setIsready(true)
  }, [])

  const username: any = router.query.id;
  const slug: any = router.query.slug;

  const isDashboard = false;
  // const navbarRules = false

  if (!isReady) {
    return <div className="flex w-full h-screen flex-col items-center mx-auto justify-center lg:pb-0">
      <Spinner/>
    </div>
  }

  return (
    <div className="">
      <div className="flex w-full max-w-[1920px] mx-auto justify-center lg:pb-0">
        <div className="w-80 hidden lg:flex">
          <SidebarNavigation data={navData} user={user} isLoading={false} />
        </div>
        
          <div className="lg:hidden">
            <MobileTopNavbar data={navData} user={user} />
            <MobileNavigation />
          </div>


        <div className="flex flex-col w-full z-0">
          {children}
        </div>

      </div>
    </div>
  )
}

export const PrivateLayout = ({ children, user }: any) => {
  const [isLoading, setIsLoading] = useState(true)
  const auth = useCarmelAuth()
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoggedIn()) {
      router.push("/")
      return
    }
  }, [])

  return <AppLayout>
           <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
            <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
            <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />     
              { isLoading ? <div className='flex flex-col items-center align-center justify-center h-screen'><Spinner/></div> : children }
          </AppLayout>
}

export const LandingLayout = ({ children, user }: any) => {
  return (
    <div className="">
      <div className="flex w-full mx-auto justify-center pb-16 lg:pb-0">
        <div className="flex flex-col w-full">
           <Navbar isDashboard={false} notNeeded={false} />
           <div className='lg:mt-32'>
            {children}
          </div>
        </div>      
      </div>
    </div>
  )
}

export const WaitLayout = ({ children, user }: any) => {
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

export const AccessLayout = ({ children }: any) => {
  return (
          <div className="bg-dark-indigo w-full flex justify-center m-auto">
            <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
            <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
            <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
       
            <div className="w-full mb-10 flex justify-center min-h-screen max-w-[1920px] relative z-30">
              <div className="flex flex-col justify-center items-center w-11/12 pb-32 pt-32 lg:pt-4 min-h-full">
                {children}
              </div>
          </div>      
        </div>
  )
}