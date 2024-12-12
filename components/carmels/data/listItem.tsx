import {
  Bars3Icon,
  ChevronRightIcon,
  ServerIcon,
  FolderIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
// const navigation = [
//     { name: 'Projects', href: '#', icon: FolderIcon, current: false },
//     { name: 'Deployments', href: '#', icon: ServerIcon, current: true },
//     // { name: 'Activity', href: '#', icon: SignalIcon, current: false },
//     // { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
//     // { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
//     // { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
//   ]
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
];
const statuses = {
  offline: 'text-gray-500 bg-gray-100/10',
  online: 'text-green-400 bg-green-400/10',
  error: 'text-rose-400 bg-rose-400/10',
};
const environments = {
  Preview: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  Production: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
};
const deployments = [
  {
    id: 1,
    href: '#',
    projectName: 'ios-app',
    teamName: 'Planetaria',
    status: 'offline',
    statusText: 'Initiated 1m 32s ago',
    description: 'Deploys from GitHub',
    environment: 'Preview',
  },
  // More deployments...
];
const activityItems = [
  {
    user: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    projectName: 'ios-app',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  // More items...
];

//   <a href="https://twitter.com/codelambs" className="flex gap-x-2 rounded-full border p-2 border-primary-color">
//   <span className="text-md"><i className="ri-twitter-fill"></i></span>
//   <span className="text-md">Codelambs</span>
// </a>

export default (props: any) => {
  const imgUrl = 'https://img.freepik.com/premium-vector/cartoon-happy-lamb-grass_29190-4907.jpg?w=2000';
  //     <div className="min-w-0 flex-auto">
  //     <p className="text-sm font-semibold leading-6 text-white">ddddd</p>
  //     <p className="mt-1 truncate text-xs leading-5 text-gray-400">Codelambs</p>
  //   </div>

  return (
    <li className="cursor-pointer hover:bg-gray-800 relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex">
        <div className="relative z-10 avatar w-16 h-16">
          <div className="mask mask-hexagon bg-primary border-2 border-primary-color">
            <img src={imgUrl} className="mask w-16 h-16 mask-hexagon" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start text-gray-400">
        <span className="text-left"> What do you think about this level? How would you make it better?</span>
        <div className="flex flex-row gap-4">
          <span className="text-xs text-primary-color">
            <i className="ri-twitter-fill mr-1"></i>Codelambs
          </span>
          <span className="text-xs text-gray-400">
            <i className="ri-palette-fill mr-1"></i>Design
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-end grow items-end">
        <ChevronRightIcon className="h-8 w-8 flex-none text-gray-400 text-xl" aria-hidden="true" />
      </div>
    </li>
  );
};

{
  /* <li key={props.id} className="cursor-pointer hover:bg-gray-800 p-4 flex justify-between gap-x-6 py-5">
    <div className="flex gap-x-4 items-start">
        <div className={'text-5xl'}>
            <i className="ri-twitter-fill"></i>
        </div>
      <div className="min-w-0 flex-auto items-start">
        <p className="text-sm font-semibold leading-6 text-white">{props.name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-400">{props.email}</p>
      </div>
    </div>

    <div className="hidden sm:flex sm:flex-col sm:items-start">
      <p className="text-sm leading-6 text-white">{props.role}</p>
      {props.lastSeen ? (
        <p className="mt-1 text-xs leading-5 text-gray-400">
          Last seen <time dateTime={props.lastSeenDateTime}>{props.lastSeen}</time>
        </p>
      ) : (
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 text-gray-400">Online</p>
        </div>
      )}
    </div>


    <div className="hidden sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-white">{props.role}</p>
      {props.lastSeen ? (
        <p className="mt-1 text-xs leading-5 text-gray-400">
          Last seen <time dateTime={props.lastSeenDateTime}>{props.lastSeen}</time>
        </p>
      ) : (
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 text-gray-400">Online</p>
        </div>
      )}
        <div
            className={'rounded-full flex-none py-1 px-2 text-xs text-xl font-medium ring-1 ring-inset'}>
            <i className="ri-twitter-fill"></i>
            </div>
        <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />

    </div>

    
  </li> */
}
