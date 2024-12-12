import React from 'react';
import { Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-700 border-b border-gray-600 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        Take the test
        {/* <button className="md:hidden mr-2 text-white">
          <Menu className="h-6 w-6" />
        </button> */}
        {/* <h2 className="text-lg font-semibold text-white">#general</h2> */}
      </div>
      <div className="flex items-center">
        <div className="relative"></div>
        {/* <img
          src="/placeholder.svg?height=32&width=32"
          alt="User avatar"
          className="h-8 w-8 rounded-full ml-4"
        /> */}
      </div>
    </header>
  );
}
