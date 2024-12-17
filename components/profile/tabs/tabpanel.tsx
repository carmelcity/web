import { Readex_Pro } from 'next/font/google';
import React from 'react';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

export interface TabPanelProps {
  title: any;
  icon?: any;
  description?: string;
  children?: any;
  childrenClasses?: any;
}

const TabPanel = ({ title, icon, description, children, childrenClasses }: TabPanelProps) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <img src={icon} width={28} height={28} className="max-h-[28px] max-w-[28px]" />
        <h3 className={`m-0 ${readex_pro.className}`}>{title}</h3>
      </div>
      <p className={`${readex_pro.className} text-grey w-full lg:w-2/3 text-left mb-6`}>{description}</p>
      <div className={`w-full ${childrenClasses ?? ''}`}>{children}</div>
    </div>
  );
};

export default TabPanel;
