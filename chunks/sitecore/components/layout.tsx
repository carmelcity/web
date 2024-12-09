import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Sidebar from './sidebar';
import MobileNav from './tabbar';
import AuthSection from './auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carmel',
  description: 'Carmel',
};

// bg-gradient-to-r from-green-800 to-gray-900
// bg-gradient-to-br from-gray-900 via-green-900 to-gray-900

const Header = () => {
  return (
    <header className="fixed top-0 z-40 w-full pb-1 p-4 pb-4 z-10 shadow-md w-full flex flex-row">
      <div className={`text-3xl font-extrabold text-white w-full`}>Your Feed</div>
      <div className="flex justify-end w-full">
        <AuthSection />
      </div>
    </header>
  );
};

// flex h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-gray-900
export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
          {/* <Sidebar className="hidden md:flex fixed left-0 top-0 bottom-0 z-30 w-64" /> */}
          <div className="flex-1 flex flex-col md:ml-64 w-full">
            <header className="sticky top-0 z-40 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm">
              <div className="flex justify-end p-4">
                <AuthSection />
              </div>
            </header>
            <main className="flex-1 overflow-hidden">{children}</main>
          </div>
          {/* <MobileNav className="md:hidden" /> */}
        </div>
      </body>
    </html>
  );
};

{
  /* <html lang="en">
<body className={`${inter.className} dark`}>
<div className="flex min-h-screen overflow-y-auto ">
    <Sidebar className="hidden md:flex fixed left-0 top-0 bottom-0 z-30 w-64" />
    <div className="flex-1 flex flex-col md:ml-64 w-full">
      <header className="fixed top-0 z-40 w-full pb-1 p-4 pb-4 z-10 shadow-md w-full flex flex-row">
            <div className={`text-3xl font-extrabold text-white w-full`}>
                Your Feed
              </div>
              <div className="flex justify-end w-full">
                <AuthSection />
            </div>
      </header>
      <main className="flex-1 mb-20">{children}</main>
    </div>
    <MobileNav className="md:hidden" />
  </div>
</body>
</html> */
}
