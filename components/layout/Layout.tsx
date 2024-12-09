import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MobileNavigation } from '~/components/layout/MobileNavigation';
import { MobileTopNavbar } from '~/components/layout/MobileTopNavbar';
import { TopNavBar } from '~/components/layout/TopNavBar';
import { SidebarNavigation } from '~/components/layout/SidebarNavigation';

export const Layout = ({ children, user }: any) => {
  const navData = [];
  const isLoading = true;
  const router = useRouter();

  const username: any = router.query.id;
  const slug: any = router.query.slug;

  const isDashboard = true;
  // const navbarRules = false

  return (
    <div className="">
      <div className="flex w-full max-w-[1920px] mx-auto justify-center pb-16 lg:pb-0">
        {isDashboard && (
          <div className="w-80 hidden lg:flex">
            <SidebarNavigation data={navData} user={user} isLoading={false} />
          </div>
        )}
        <div className="flex flex-col w-full">
          <TopNavBar isDashboard={isDashboard} notNeeded={true} />
          {children}
        </div>
        {isDashboard && (
          <div className="lg:hidden">
            <MobileTopNavbar data={navData} user={user} />
            <MobileNavigation />
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};
