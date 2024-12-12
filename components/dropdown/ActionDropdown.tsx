import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Readex_Pro } from 'next/font/google';
import { ActionDropdownProps } from './props';
import { DotsVertical } from '../icons';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const ActionDropdown = ({ items }: ActionDropdownProps) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${readexPro.className} inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm`}>
          <DotsVertical />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-50 mt-1 w-40 bg-[#022A27] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map(item => (
              <Menu.Item key={item}>
                {() => (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedItem(item);
                    }}
                    className={`${readexPro.className} font-thin text-white block px-4 hover:bg-cyan/50 py-2 text-sm w-full text-left`}>
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
