import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Dropdown from './dropdown';
import Chooser from './chooser';

const channels = [
  { name: 'All Channels', icon: 'ri-megaphone-fill mr-1 text-white' },
  { name: 'Twitter', href: '#', icon: 'ri-twitter-fill mr-1 text-white' },
  { name: 'Discord', href: '#', icon: 'ri-discord-fill mr-1 text-white' },
  { name: 'GitHub', href: '#', icon: 'ri-github-fill mr-1 text-white' },
  { name: 'LinkedIn', href: '#', icon: 'ri-linkedin-fill mr-1 text-white' },
];

const categories = [
  { name: 'All Categories', icon: 'ri-archive-drawer-fill mr-1 text-white' },
  { name: 'Design', href: '#', icon: 'ri-palette-fill mr-1 text-white' },
  { name: 'Community', href: '#', icon: 'ri-discuss-fill mr-1 text-white' },
  { name: 'Economy', href: '#', icon: 'ri-wallet-3-fill mr-1 text-white' },
  { name: 'Coding', href: '#', icon: 'ri-terminal-box-fill mr-1 text-white' },
];

const properties = [
  { name: 'All Properties', icon2: 'ri-plant-fill mr-1' },
  {
    name: 'Cheetah vs Lava',
    icon2: 'ri-seedling-fill mr-1 text-white',
    imgUrl: 'https://img.freepik.com/premium-vector/cartoon-happy-lamb-grass_29190-4907.jpg?w=2000',
  },
  {
    name: 'Codelambs',
    icon2: 'ri-seedling-fill mr-1 text-white',
    imgUrl: 'https://img.freepik.com/premium-vector/cartoon-happy-lamb-grass_29190-4907.jpg?w=2000',
  },
  {
    name: 'Dimension 98',
    icon2: 'ri-seedling-fill mr-1 text-white',
    imgUrl: 'https://img.freepik.com/premium-vector/cartoon-happy-lamb-grass_29190-4907.jpg?w=2000',
  },
  {
    name: 'Splotchlets',
    icon2: 'ri-seedling-fill mr-1 text-white',
    imgUrl: 'https://img.freepik.com/premium-vector/cartoon-happy-lamb-grass_29190-4907.jpg?w=2000',
  },
  {
    name: 'DevDads',
    icon2: 'ri-seedling-fill mr-1 text-white',
    imgUrl: 'https://img.freepik.com/premium-vector/cartoon-happy-lamb-grass_29190-4907.jpg?w=2000',
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Go on a Carmel Quest</h1>
      </div>
      <div className="border-b border-gray-200 bg-gray-900 pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4">
          <Dropdown items={channels} first />
          <Dropdown items={properties} primary />
          <Dropdown items={categories} />
        </div>
      </div>
    </div>
  );
};

export default () => {
  return <Main />;
};
