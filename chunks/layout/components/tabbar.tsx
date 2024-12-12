import React from 'react';
import { Home, Hash, Users, Bell } from 'lucide-react';

export default function MobileTabBar() {
  return (
    <div className="md:hidden bg-gray-700 border-t border-gray-600 fixed bottom-0 left-0 right-0 flex justify-around py-2">
      <a href="#" className="flex flex-col items-center text-white">
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </a>
      <a href="#" className="flex flex-col items-center text-white">
        <Hash className="h-6 w-6" />
        <span className="text-xs mt-1">Channels</span>
      </a>
      <a href="#" className="flex flex-col items-center text-white">
        <Users className="h-6 w-6" />
        <span className="text-xs mt-1">DMs</span>
      </a>
      <a href="#" className="flex flex-col items-center text-white">
        <Bell className="h-6 w-6" />
        <span className="text-xs mt-1">Notifications</span>
      </a>
    </div>
  );
}
