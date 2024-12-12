import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';

const perks = [
  {
    name: 'Peer-to-Peer Infrastructure',
    imageSrc: '/images/feature-app-chain.png',
    description:
      'Carmel Apps run on the Carmel Network owned and operated by the Carmel Community. No central servers. No middlemen.',
  },
  {
    name: 'Always Online',
    imageSrc: '/images/feature-app-secure.png',
    description:
      'As long as the Carmel Network keeps operating, Carmel Apps will always be up and running. There is no single point of failure.',
  },
  {
    name: 'User-Owned Data',
    imageSrc: '/images/feature-app-home.png',
    description: 'Only users have access to control their personal data and the content they generate. No one else.',
  },
  {
    name: 'Digital Wallet',
    imageSrc: '/images/feature-app-wallet.png',
    description: 'Every Carmel Account comes with a secure Digital Wallet attached to their profile.',
  },
  {
    name: 'Digital Assets',
    imageSrc: '/images/feature-app-assets.png',
    description: 'Users own, buy, sell and trade Carmel Assets that can be used inside Carmel Apps.',
  },
  {
    name: 'Digital Payments',
    imageSrc: '/images/feature-app-payments.png',
    description: 'Carmel members can receive and send payments to other members of the Carmel Network.',
  },
  {
    name: 'High-Grade Security',
    imageSrc: '/images/feature-app-encrypt.png',
    description: 'User data is protected with the highest level of encryption and cryptographic algorithms.',
  },
  {
    name: 'Censorship-Free Content',
    imageSrc: '/images/feature-app-content.png',
    description: 'Only users have access to control their personal data and the content they generate. No one else.',
  },
  {
    name: 'Truly Private Messaging',
    imageSrc: '/images/feature-app-messaging.png',
    description:
      'The Carmel Network allows users to communicate with one another directly and privately. Without a central database.',
  },
  {
    name: 'Community Governance',
    imageSrc: '/images/feature-app-users.png',
    description:
      'Carmel Members organize themselves in Carmel Cities owned, operated and governed completely independently.',
  },
];

export default function Main() {
  return (
    <div className="isolate overflow-hidden lg:w-4/5 w-full mt-20 border border-primary-color ">
      <div className="flow-root bg-gray-900 pb-16 pt-4 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-10">
          <div className="relative z-10 mb-20 lg:pt-2 pt-12">
            <p className="lg:text-3xl text-lg tracking-tight mb-2 text-white/60">
              Next-generation <span className="relative lg:text-3xl text-lg text-primary font-bold">human-centric</span>{' '}
              apps.
            </p>
            <span className="mx-auto font-display lg:text-6xl text-4xl font-bold text-primary-color">
              You
              <span className="relative lg:text-6xl text-4xl text-white font-bold">: 100% in control.</span>
            </span>
          </div>
          <div className="mx-auto max-w-7xl pt-0 pb-20 lg:px-4 text-left">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {perks.map(perk => (
                <div key={perk.name} className="sm:flex">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img className="h-32 w-32 -mt-4" src={perk.imageSrc} alt="" />
                    </div>
                  </div>
                  <div className="mt-3 sm:ml-3 sm:mt-0">
                    <h1 className="text-2xl font-medium text-primary bg-gradient-to-r from-primary-color via-accent-color to-accent inline-block text-transparent bg-clip-text">
                      {perk.name}
                    </h1>
                    <p className="mt-2 text-sm text-white">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
