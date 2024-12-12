import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MobileNavigation } from '~/components/layout/MobileNavigation';
import { MobileTopNavbar } from '~/components/layout/MobileTopNavbar';
import { TopNavBar } from '~/components/layout/TopNavBar';
import { SidebarNavigation } from '~/components/layout/SidebarNavigation';
import { Navbar } from '~/components/layout/Navbar';

export const AppLayout = ({ children, user }: any) => {
  const navData: any = [];
  const isLoading = true;
  const router = useRouter();

  const username: any = router.query.id;
  const slug: any = router.query.slug;

  const isDashboard = false;
  // const navbarRules = false

  return (
    <div className="">
      <div className="flex w-full max-w-[1920px] mx-auto justify-center lg:pb-0">
          {/* <Navbar isDashboard={false} notNeeded={false} /> */}
          <div className="w-80 hidden lg:flex">
            <SidebarNavigation data={navData} user={user} isLoading={false} />
          </div>
        
        <div className="flex flex-col w-full">
          <TopNavBar />
          {children}
        </div>
          <div className="lg:hidden">
            <MobileTopNavbar data={navData} user={user} />
            <MobileNavigation />
          </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};



export const LandingLayout = ({ children, user }: any) => {
  const navData: any = [];
  const isLoading = true;
  const router = useRouter();

  const username: any = router.query.id;
  const slug: any = router.query.slug;

  const isDashboard = false;
  // const navbarRules = false

  return (
    <div className="">
      <div className="flex w-full max-w-[1920px] mx-auto justify-center pb-16 lg:pb-0">
        <div className="flex flex-col w-full">
          {/* <TopNavBar isDashboard={isDashboard} notNeeded={true} /> */}
           <Navbar isDashboard={false} notNeeded={false} />
           <div className='lg:mt-32'>
            {children}
          </div>
        </div>      
      </div>
      {/* <Footer /> */}
    </div>
  );
};