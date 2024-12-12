import {
  ArrowPathIcon,
  ChevronDoubleDownIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  CheckCircleIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Always online',
    icon: CheckCircleIcon,
  },
  {
    name: 'Users own their data',
    icon: CheckCircleIcon,
  },
  {
    name: 'Built-in privacy and encryption',
    icon: CheckCircleIcon,
  },
  {
    name: 'Owned and operated by the community',
    icon: CheckCircleIcon,
  },
  {
    name: 'Low cost of innovation',
    icon: CheckCircleIcon,
  },
  {
    name: 'Fast time to market',
    icon: CheckCircleIcon,
  },
  {
    name: 'Composable architecture',
    icon: CheckCircleIcon,
  },
  {
    name: 'Composable architecture',
    icon: CheckCircleIcon,
  },
  {
    name: 'Easy to develop',
    icon: CheckCircleIcon,
  },
];

export default function Main(props: any) {
  return (
    <div className="bg-gray-900 bg-opacity-20 mt-20 border border-primary-color py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl sm:text-center items-center justify-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Say hello to a new type of apps.</h2>
          <h1 className="w-full mb-5 lg:text-4xl text-2xl text-white inline-block text-transparent bg-clip-text">
            Introducing Carmel Apps.
          </h1>
        </div>
        <div className="mx-auto max-w-xl sm:text-center items-center justify-center">
          <p className="mt-6 text-lg leading-8 text-gray-300"></p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src={props.image}
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl sm:mt-10 md:mt-10 px-6 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-20">
          {features.map(feature => (
            <div key={feature.name} className="relative pl-9 text-left">
              <dt className="inline font-bold text-primary text-left bg-gradient-to-r from-primary-color via-accent-color to-accent inline-block text-transparent bg-clip-text">
                <feature.icon className="absolute -left-1 -top-1 h-8 w-8 text-primary" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

// export default () => (<div className="m-2 flex justify-end border border-primary-color flex-col md:flex-row">
//   <img
//       className="w-full px-8 pt-8 bg-primary-background md:pt-0 md:w-2/3 md:px-0"
//       src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
//     />
//     <div className="flex flex-col px-8 pb-8 pt-6 gap-10 w-full md:w-1/3 bg-primary-background md:p-8 md:justify-between">
//       <div className="flex flex-col gap-4">
//         <span className="font-epilogue-bold text-2xl">
//             ffff
//         </span>
//         <span className="text-sm">
//          fff
//         </span>
//       </div>
//       <div className="flex flex-col gap-4">
//         <div className="flex justify-between flex-row">
//           <span>
//            adfsfd
//           </span>
//           <span className="text-primary-color font-epilogue-bold">
//            fffff
//           </span>
//         </div>
//         <div className="flex items-center gap-2">
//           <img
//             className="w-8 h-8"
//             src=""
//           />
//           <span>
//             ffffff
//           </span>
//         </div>
//       </div>
//       <button
//         type="button"
//       />
//     </div>
// </div>)
