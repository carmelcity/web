import { ShieldCheckIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import * as Banner from '~/components/banner';

const features = [
  {
    name: 'Biometric authentication.',
    description: 'Use your face or your fingerprint to authenticate.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'High-grade security.',
    description: 'Your private key are stored in your device and nowhere else.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Passwordless & keyless.',
    description: 'No need to keep track of a password, private keys or anything to remember at all.',
    icon: ShieldCheckIcon,
  },
];

export default function Main(props: any) {
  return (
    <div className="py-24">
      <Banner.Simple />
      <div className="border border-primary-color bg-opacity-20 relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:px-10 sm:py-24 lg:py-24 xl:px-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="lg:row-start-2 lg:max-w-md text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{props.title}</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">{props.subtitle}</p>
                </div>
                <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                  <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none text-left">
                    {features.map(feature => (
                      <div key={feature.name} className="relative">
                        <dt className="ml-9 inline-block font-semibold text-primary">
                          <feature.icon className="absolute left-1 h-5 w-5 text-primary" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img src={props.image} alt="Product screenshot" className="w-[48rem] " width={500} height={625} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
