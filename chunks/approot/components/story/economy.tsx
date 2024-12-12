// import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

// const features = [
//   {
//     name: 'Infrastructure',
//     description:
//       'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
//     href: '#',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'Governance',
//     description:
//       'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
//     href: '#',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Stakeholding',
//     description:
//       'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
//     href: '#',
//     icon: ArrowPathIcon,
//   },
// ]

// export default function Main() {
//   return (
//     <div className="bg-gray-900 py-24 sm:py-32 mt-20 border border-primary-color">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">

//         <div className="relative z-10 pb-10">
//             <p className="text-2xl tracking-tight mb-2 text-primary">
//                 A circular creator economy.
//             </p>

//             <span className="mx-auto font-display lg:text-4xl text-2xl text-white">
//                 <span className="relative whitespace-nowrap">
//                             <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 mt-2 h-[0.58em] w-full fill-primary-color" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
//                             <span className="relative lg:text-4xl text-2xl text-primary font-bold">
//                                  Contribute</span>
//                         </span>
//                       {' '} and collect {' '}
//                         <span className="relative whitespace-nowrap">
//                             <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 mt-2 h-[0.58em] w-full fill-primary-color" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
//                             <span className="relative lg:text-4xl text-2xl text-primary font-bold">
//                                  Meraki</span>
//                         </span>
//                         {' '} points.
//                 </span>
//           </div>

//         </div>

//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
//             {features.map((feature) => (
//               <div key={feature.name} className="flex flex-col">
//                 <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
//                   <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
//                   <p className="flex-auto">{feature.description}</p>
//                   <p className="mt-6">
//                     <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
//                       Learn more <span aria-hidden="true">→</span>
//                     </a>
//                   </p>
//                 </dd>
//               </div>
//             ))}
//           </dl>

//         </div>
//       </div>

//     </div>
//   )
// }

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';

export default function Main() {
  return (
    <div className="isolate overflow-hidden lg:w-4/5 w-full mt-20 border border-primary-color ">
      <div className="flow-root bg-gray-900 pb-16 pt-4 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-10">
          <div className="relative z-10  border-b border-white/10 mb-20 lg:pt-2 pt-12">
            <p className="text-2xl tracking-tight mb-2 text-primary"></p>
            <h2 className="lg:text-4xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
              A{' '}
              <span className="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 mt-2 h-[0.58em] w-full fill-primary-color"
                  preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative lg:text-4xl text-2xl text-primary font-bold">Circular </span>
              </span>{' '}
              Creator Economy.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-md lg:text-xl leading-8 text-white/60 pt-10 pb-12">
              A network of
              <span className="text-primary-color text-md lg:text-xl tracking-tight">
                {' '}
                education, productivity and exchange
              </span>
              .
              <br />
              <br />
            </p>
          </div>

          <div className="mx-auto max-w-7xl pt-0 pb-20 lg:px-4 text-left">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"></div>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
            <svg
              viewBox="0 0 1208 1024"
              aria-hidden="true"
              className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
              <ellipse cx={604} cy={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx={604} ry={512} />
              <defs>
                <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                  <stop stopColor="#00BCD4" />
                  <stop offset={1} stopColor="#00BCD4" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
