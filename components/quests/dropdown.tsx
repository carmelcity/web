import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default ({ items, icon, primary, first }: any) => {
  const [selection, setSelection] = useState(0);

  const onChange = (id: any) => {
    setSelection(id);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {<i className={icon} />}
        <Menu.Button
          className={`group inline-flex justify-center ${primary ? 'text-primary-color' : 'text-gray-400'} ${
            first ? 'border pl-1 pr-1 rounded-full text-white bg-primary-color' : ''
          } text-xs lg:text-lg font-medium  hover:text-white`}>
          {items[selection].icon && <i className={items[selection].icon} />}
          {first || items[selection].name}
          <ChevronDownIcon className="h-4 w-4 lg:h-6 lg:w-6 flex-shrink-0 text-white" aria-hidden="true" />
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
        <Menu.Items
          className={`absolute z-50 ${
            first ? 'left' : 'right'
          }-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-gray-900 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className="py-1 border border-primary-color">
            {items.map((option: any, id: number) => (
              <Menu.Item key={option.name}>
                {({ active }) => (
                  <a
                    onClick={() => onChange(id)}
                    href={option.href}
                    className={classNames(
                      'block px-4 py-2 text-xs lg:text-lg flex items-center hover:bg-gray-800 cursor-pointer',
                    )}>
                    {option.icon && <i className={option.icon} />}
                    <span className={classNames(id === selection ? 'font-medium text-white' : 'text-gray-500')}>
                      {option.name}
                    </span>
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
