import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import Layout from '@/components/common/Layout'
// import NavigationBar from '@/components/common/NavigationBar'
// import TabBar from './TabBar';
import SideMenu from './menu';
import Image from 'next/image';
import spot from '@/chunks/layouts/images/spot.webp';
import wire1 from '@/chunks/layouts/images/wire1.webp';
import wire2 from '@/chunks/layouts/images/wire2.webp';
import '@/app/globals.css';
import Loader from './loader';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/components/ui/sidebar';

const inter = Inter({ subsets: ['latin'] });

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export const metadata: Metadata = {
  title: 'Carmel',
  description: 'Carmel',
};

// const Main = ({ children }: Readonly<{ children: React.ReactNode }>) => {
//     return ( <html lang="en">
//         <body className={inter.className}>
//             <Layout>
//               { React.Children.map(children, (child: any) => {
//                   return React.cloneElement(child, { hello: "world" })
//               }) }
//             </Layout>
//             </body>
//       </html>
//     )
//   }

const Layoutd = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col w-full items-center">
          {/* <NavigationBar/> */}

          <div className="flex lg:w-[1024px] md:w-[768px] w-full border-4 border-primary">
            <div className="z-0">
              <Image src={spot} alt="spot" className="top-0 z-0 left-0 fixed h-screen object-fit" />
              <Image src={wire1} alt="spot" className="bottom-0 z-0 left-0 fixed w-screen object-fit opacity-30" />
              <Image src={wire2} alt="spot" className="bottom-0 z-0 left-0 fixed w-screen object-fit opacity-80" />
            </div>

            <aside className="h-screen sticky top-0 bg-black/30 border">
              <div className="w-48 hidden md:flex lg:flex justify-start items-center sticky top-0 p-4 pt-24 flex z-10 grow relative flex-col">
                {/* <SideMenu/> */}
              </div>
            </aside>

            <div className="flex flex-col bg-black/30 w-full border-l border-r min-h-screen -mt-1 border-primary-color/40 p-4 pb-20 pt-24 z-10">
              {/* { React.Children.map(children, (child: any) => {
                        return React.cloneElement(child, { })
                    }) } */}
            </div>

            <aside className="h-screen sticky top-0 bg-black/30">
              <div className="w-48 hidden md:flex lg:flex justify-start items-center sticky top-0 p-4 pt-24 flex z-10 grow relative flex-col"></div>
            </aside>

            {/* <TabBar/> */}
          </div>
        </div>
      </body>
      <Loader />
    </html>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

// export default Layout
