import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Header from './header';

const data = [
  {
    id: '0',
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: '1',
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: '2',
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    id: '3',
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: '4',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: '5',
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
];

import ListItem from './listItem';

import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid';
const tabs = [
  { name: 'My Account', href: '#', icon: UserIcon, current: false },
  { name: 'Company', href: '#', icon: BuildingOfficeIcon, current: false },
  { name: 'Team Members', href: '#', icon: UsersIcon, current: true },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'My Account', href: '#', icon: UserIcon, current: false },
  { name: 'Company', href: '#', icon: BuildingOfficeIcon, current: false },
  { name: 'Team Members', href: '#', icon: UsersIcon, current: true },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

const projects = [
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
  { name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
];

const Category = (props: any) => {
  return (
    <li key={props.name} className="col-span-1 flex rounded-md shadow-sm">
      <button className="btn gap-2">{props.name}</button>
    </li>
  );

  {
    /* <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
<div className="flex-1 truncate px-4 py-2 text-sm">
  <a href={props.href} className="font-medium text-gray-900 hover:text-gray-600">
    {props.name}
  </a>
  <p className="text-gray-500">{props.members} Members</p>
</div>
</div> */
  }
};

const Categories = () => {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Categories</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {projects.map((data: any, id: number) => (
          <Category key={id} {...data} />
        ))}
      </ul>
    </div>
  );
};

const Search = () => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
      <button type="button" className="-m-2.5 p-2.5 text-white xl:hidden" onClick={() => {}}>
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className="bg-gray-900 m-10 lg:w-1/2 border-2 p-2 border-primary-color w-full">
      <Header />
      <Search />
      <ul role="list" className="divide-y divide-gray-800">
        {data.map((item: any, id: number) => (
          <ListItem key={id} {...item} />
        ))}
      </ul>
    </div>
  );
};
