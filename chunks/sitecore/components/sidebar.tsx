import React from 'react';

import { Home, Bell, Mail, User, Hash } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

{
  /* <div className="flex z-10 grow sticky top-0 flex-col gap-y-5 overflow-y-auto bg-gradient-to-br from-dark-green to-transparent px-6 w-full mr-auto md:h-screen"> */
}

export default ({ className }: { className?: string }) => {
  return (
    <div className="flex z-10 grow sticky top-0 flex-col gap-y-5 overflow-y-auto bg-gradient-to-br from-dark-green to-transparent px-6 w-full mr-auto md:h-screen">
      ddddd
      <div className="flex h-16 shrink-0 items-center">
        <Link href="/">
          dddd
          <Image
            src="/images/logo/logo-white-with-white-text.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-full"
          />
        </Link>
      </div>
    </div>
  );
};

{
  /* <div className={cn("w-64 bg-gray-900 bg-opacity-80 border-r border-gray-700 h-full overflow-y-auto", className)}>
      <div className="flex flex-col h-full p-4">
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 text-lg font-medium text-gray-200 hover:text-white">
            <Home className="w-6 h-6" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-lg font-medium text-gray-200 hover:text-white">
            <Hash className="w-6 h-6" />
            <span>Explore</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-lg font-medium text-gray-200 hover:text-white">
            <Bell className="w-6 h-6" />
            <span>Notifications</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-lg font-medium text-gray-200 hover:text-white">
            <Mail className="w-6 h-6" />
            <span>Messages</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-lg font-medium text-gray-200 hover:text-white">
            <User className="w-6 h-6" />
            <span>Profile</span>
          </a>
        </nav>
      </div>
    </div> */
}
