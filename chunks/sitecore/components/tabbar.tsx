import React from 'react';

import { Home, Bell, Mail, User, Hash } from 'lucide-react';
import { cn } from '@/lib/utils';

export default ({ className }: { className?: string }) => {
  return (
    <nav className={cn('fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 border-t border-gray-700', className)}>
      <div className="flex justify-around p-2">
        <a href="#" className="p-2 text-gray-400 hover:text-white">
          <Home className="w-6 h-6" />
        </a>
        <a href="#" className="p-2 text-gray-400 hover:text-white">
          <Hash className="w-6 h-6" />
        </a>
        <a href="#" className="p-2 text-gray-400 hover:text-white">
          <Bell className="w-6 h-6" />
        </a>
        <a href="#" className="p-2 text-gray-400 hover:text-white">
          <Mail className="w-6 h-6" />
        </a>
        <a href="#" className="p-2 text-gray-400 hover:text-white">
          <User className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};
