import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { TabsProps } from './props';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const Tabs = ({ onTabChange, questsNumber, challengesNumber }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b border-cyan border-opacity-10">
      <li className="mr-2">
        <div
          className={`${activeTab === 0 ? 'text-lg font-light' : 'text-lg font-light text-gray-400'} ${
            readexPro.className
          } flex px-4 py-3 hover:text-gray-900 hover:bg-cyan hover:bg-opacity-20 cursor-pointer ${
            activeTab === 0 ? 'text-cyan border-b-2 border-cyan' : 'bg-transparent'
          }`}
          onClick={() => handleTabClick(0)}>
          Challenges
          <div className={`ml-2 w-7 h-7 flex items-center ${activeTab === 0 ? 'bg-cyan' : 'bg-cyan bg-opacity-20'}`}>
            <span className={`${readexPro.className} font-bold text-black m-auto`}>3</span>
          </div>
        </div>
      </li>
      <li className="mr-2">
        <div
          className={`${activeTab === 1 ? 'text-lg font-light' : 'text-lg font-light text-gray-400'} ${
            readexPro.className
          } flex px-4 py-3 hover:text-gray-900 hover:bg-cyan hover:bg-opacity-20 cursor-pointer ${
            activeTab === 1 ? 'text-cyan border-b-2 border-cyan' : 'bg-transparent'
          }`}
          onClick={() => handleTabClick(1)}>
          Quests
          <div className={`ml-2 w-7 h-7 flex items-center ${activeTab === 1 ? 'bg-cyan' : 'bg-cyan bg-opacity-20'}`}>
            <span className={`${readexPro.className} font-bold text-black m-auto`}>3</span>
          </div>
        </div>
      </li>
    </ul>
  );
};
