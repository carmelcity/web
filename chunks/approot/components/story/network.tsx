//     <StoryMain
//     image="/images/network.png"
//     subtitle="With the Carmel Way of working as our beacon, we're creating a network of people who believe work should revolve around meaning. Where we collaborate to redefine human work together - The Carmel Way."
//     title="A Network of Education, Productivity and Exchange"
//     features={[
//       {
//         name: 'Redefining Education with Carmel Challenges.',
//         description: 'Learn about a wide array of topics that contribute to your personal and professional growth. As you complete these challenges, you collect Knowledge Badges, proof of your journey of learning.',
//       },
//       {
//         name: 'Redefining Productivity with Carmel Quests.',
//         description: "Once you've learned, you put that knowledge into action with Carmel Quests. You work in small teams on various tasks ranging from design to programming and marketing. Collect Skills Badges and even financial rewards for some Premium Quests.",
//       },
//       {
//         name: 'Redefining Exchange with Carmel Assets.',
//         description: 'Carmel Assets are items you can purchase for use within Carmel Apps, such as power-ups, game characters or any other in-app elements. You can level up your Carmel Assets by using them within Carmel Apps. You can collect them or even sell them.',
//       },
//     ]}
//     />,
// <Features.Main image="/images/apps-top.jpg"/>,

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Learn',
    intro: 'Carmel Challenges',
    subtitle: 'Grow your knowledge.',
    action: 'Take Challenges',
    mainFeatures: [
      'Acquire new knowledge',
      'Grow personally and professionally',
      'Learn at your own pace',
      'Personalize your learning journey',
      'Collect Knowledge Badges',
    ],
  },
  {
    name: 'Build',
    featured: true,
    intro: 'Carmel Quests',
    action: 'Complete Quests',
    subtitle: 'Put your knowledge into action.',
    mainFeatures: [
      'Apply your knowledge',
      'Complete tasks at your own pace',
      'Work alone or in small teams',
      'Collect Skills Badges',
      'Get paid for Premium Quests',
    ],
  },
  {
    name: 'Own',
    intro: 'Carmel Assets',
    action: 'Buy Assets',
    subtitle: 'Put your knowledge into action.',
    mainFeatures: [
      'Buy in-app elements',
      'Use them in Carmel Apps',
      'Level them up by using them',
      'Sell them to other members',
      'Add them to your collection',
    ],
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Main() {
  return (
    <div className="isolate overflow-hidden lg:w-4/5 w-full border border-primary-color">
      <div className="flow-root bg-gray-900 pb-16 pt-24 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-10">
          <div className="relative z-10 pb-10">
            <p className="text-2xl tracking-tight mb-2 text-primary">Do meaningful work.</p>

            <span className="mx-auto font-display lg:text-4xl text-2xl text-white">
              <span className="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 mt-2 h-[0.58em] w-full fill-primary-color"
                  preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative lg:text-4xl text-2xl text-primary font-bold">Learn, build, own</span>
              </span>{' '}
              and collect{' '}
              <span className="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 mt-2 h-[0.58em] w-full fill-primary-color"
                  preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative lg:text-4xl text-2xl text-primary font-bold">Meraki</span>
              </span>{' '}
              points.
            </span>
          </div>
          <h1 className="text-5xl">[mA-`rak-E]</h1>
          <h2 className="lg:text-xl text-md font-bold tracking-tight text-gray-400">
            (adv.) to do something with soul; to put something of yourself into your work.
          </h2>
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

            <div
              className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:ring-1 lg:ring-white/10"
              aria-hidden="true"
            />

            {tiers.map(tier => (
              <div
                key={tier.name}
                className={classNames(
                  tier.featured
                    ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                    : 'bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                  'relative',
                )}>
                <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h1
                    id={tier.name}
                    className={classNames(
                      tier.featured ? 'text-gray-900' : 'text-white',
                      'text-3xl font-semibold leading-6',
                    )}>
                    {tier.name}
                  </h1>
                  <h2
                    id={tier.name}
                    className={classNames(
                      tier.featured ? 'text-gray-900' : 'text-white',
                      'text-2xl font-semibold leading-6',
                    )}>
                    with <span className="text-2xl font-semibold leading-6 text-primary">{tier.intro}</span>
                  </h2>

                  <div className="mt-8 flow-root sm:mt-10">
                    <ul
                      role="list"
                      className={classNames(
                        tier.featured
                          ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                          : 'divide-white/5 border-white/5 text-white',
                        '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0',
                      )}>
                      {tier.mainFeatures.map(mainFeature => (
                        <li key={mainFeature} className="flex gap-x-3 py-2">
                          <CheckIcon
                            className={classNames(tier.featured ? 'text-primary' : 'text-white', 'h-6 w-5 flex-none')}
                            aria-hidden="true"
                          />
                          {mainFeature}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-primary mt-10 text-white"> {tier.action} </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
