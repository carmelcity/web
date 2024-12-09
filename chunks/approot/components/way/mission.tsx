import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

export default function Main(props: any) {
  return (
    <div className="bg-gray-900 bg-opacity-50 border border-primary-color mt-20 lg:w-4/5 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col w-full py-16 lg:flex-row lg:items-center lg:py-0 xl:gap-x-20 xl:px-20">
          <img
            className="mask mask-squircle h-96 w-full flex-none object-cover shadow-xl lg:h-auto lg:max-w-lg"
            src="/images/building.png"
            alt=""
          />
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <div className="lg:row-start-2 lg:max-w-md text-left">
                <p className="text-2xl tracking-tight -mb-2 text-primary">Mission:</p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Redefining Human Work.</h2>
                <p className="mt-6 text-md lg:text-xl leading-8 text-gray-300 text-left tracking-tight ">
                  Before we can get to
                  <span className="text-primary-color text-md lg:text-xl tracking-tight"> work on building </span>a more
                  human world, we need to reevaluate our understanding of
                  <span className="text-primary-color text-md lg:text-xl tracking-tight"> work itself</span>.
                </p>
              </div>
              <div className="max-w-xl text-left tracking-tight text-xl lg:text-2xl lg:row-start-3 lg:mt-10 lg:max-w-md border-t border-white/10 lg:pt-10 pt-4 text-left text-primary-color">
                Global disengagement is widespread due to an emphasis on pleasure and power. The Carmel Way prioritizes
                meaning over wealth and influence, promoting freedom, creativity and openness. Working The Carmel Way
                transforms drudgery, uniformity and fear into meaningful work.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
