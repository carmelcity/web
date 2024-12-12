import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { ShieldCheckIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export default function Main(props: any) {
  return (
    <div className="bg-gray-900 bg-opacity-50 border border-primary-color mt-20">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex flex-col w-full gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10  sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-xl border border-primary-color object-cover shadow-xl lg:h-auto lg:max-w-lg"
              src={props.image}
              alt=""
            />
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="lg:row-start-2 lg:max-w-md text-justify">
                  <p className="text-2xl tracking-tight -mb-2 text-primary">{props.top}</p>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{props.title}</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">{props.subtitle}</p>
                </div>
                <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                  <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none text-left">
                    {props.features.map((feature: any) => (
                      <div key={feature.name} className="relative  text-justify">
                        <dt className="ml-9 inline-block font-semibold text-primary">
                          <ShieldCheckIcon className="absolute left-1 h-5 w-5 text-primary" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true">
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
