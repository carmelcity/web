'use client';

import React from 'react';
import Footer from '../../components/layout/footer';
import { MobileNavigation } from '../../components/layout/MobileNavigation';
import { MobileTopNavbar } from '../../components/layout/MobileTopNavbar';
import { Navbar } from '../../components/layout/Navbar';
import { SidebarNavigation } from '../../components/layout/SidebarNavigation';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`dark`}>
        <div>
          <div className="flex w-full max-w-[1920px] mx-auto justify-center]">
            <div className="w-80 hidden lg:flex">
              {/* <SidebarNavigation data={{}} user={{}} isLoading={false} /> */}
            </div>

            <div className="flex flex-col w-full">
              {/* <Navbar isDashboard={true} notNeeded={false}/> */}
              {children}
            </div>
            <div className="lg:hidden">
              {/* <MobileTopNavbar data={{}} user={{}} /> */}
              <MobileNavigation />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};
