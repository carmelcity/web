import React, { useState, useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { DropdownProps } from './props';
import { readexPro } from '~/components/fonts'

export const Dropdown = ({ items, defaultText, onSelect, preselectedItem }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState(preselectedItem || defaultText);

  // Update selected item when preselectedItem changes
  useEffect(() => {
    setSelectedItem(preselectedItem || defaultText);
  }, [preselectedItem, defaultText]);

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button
          className={`${
            readexPro.className
          } inline-flex w-full justify-center gap-x-1.5 bg-[#022A27] px-3 py-2 text-sm ${
            selectedItem === defaultText ? 'text-cyan/50 font-light' : 'text-white font-thin'
          } border border-cyan border-opacity-20 border-solid border-1`}>
          {selectedItem}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400 ml-auto" aria-hidden="true" />
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
        <Menu.Items className="absolute z-50 mt-1 w-full bg-[#022A27] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map(item => (
              <Menu.Item key={item}>
                {() => (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedItem(item);
                      onSelect(item);
                    }}
                    className={`${
                      readexPro.className
                    } font-thin text-white block px-4 hover:bg-cyan/50 py-2 text-sm w-full text-left ${
                      selectedItem === item ? 'bg-cyan' : ''
                    }`}>
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
