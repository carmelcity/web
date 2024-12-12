import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Main(props: any) {
  return (
    <div className="bg-gray-900 bg-opacity-50 border border-primary-color mt-20 lg:w-4/5 w-full mb-20">
      <div className="relative border border-primary-color bg-opacity-80 isolate flex items-center gap-x-6 overflow-hidden bg-primary-color px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="flex flex-wrap flex-col lg:flex-row items-center gap-x-4 gap-y-4 text-lg text-white">
          The first interation of Carmel is now operational.
          <a className="btn rounded-full border border-white/50 hover:border-white pt-1 bg-gradient-to-r from-primary from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
            Carmel Genesis
            <ArrowRightIcon className="w-4 h-4 ml-2 -mt-1" />
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col w-full py-16 lg:flex-row lg:items-center lg:py-0 xl:gap-x-20 xl:px-20">
          <img
            className="object-cover shadow-xl lg:h-auto lg:max-w-lg mt-10 mb-10 border border-white/20"
            src="/images/card-2.png"
            alt=""
          />
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <div className="lg:row-start-2 lg:max-w-md text-left mb-10">
                <p className="text-xl tracking-tight mb-2 text-primary text-center pt-10">Request Genesis Access.</p>

                <h2 className="lg:text-3xl text-2xl font-bold tracking-tight text-white text-center sm:text-4xl">
                  Get{' '}
                  <span className="relative whitespace-nowrap">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 418 42"
                      className="absolute left-0 top-2/3 mt-2 h-[0.58em] w-full fill-primary-color"
                      preserveAspectRatio="none">
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    </svg>
                    <span className="relative lg:text-3xl text-2xl text-primary font-bold">Your </span>
                  </span>{' '}
                  Genesis Access Card.
                </h2>
              </div>

              <dl className="mt-10 max-w-xl border-t border-white/40 pt-16 space-y-8 text-base text-gray-300 lg:max-w-none">
                <div key={'1'} className="relative pl-6 text-lg lg:text-xl text-left text-primary">
                  <dt className="inline font-semibold text-white mr-4">
                    <CheckCircleIcon className="absolute left-1 h-6 w-6 text-primary" aria-hidden="true" />
                  </dt>
                  No passwords. No private keys.
                </div>

                <div key={'2'} className="relative pl-6 text-md lg:text-xl text-left text-primary">
                  <dt className="inline font-semibold text-white mr-4">
                    <CheckCircleIcon className="absolute left-1  h-6 w-6 text-primary" aria-hidden="true" />
                  </dt>
                  Nothing to download. Or to remember.
                </div>
                <div key={'3'} className="relative pl-6 text-md lg:text-xl text-left text-primary">
                  <dt className="inline font-semibold text-white mr-4">
                    <CheckCircleIcon className="absolute left-1  h-6 w-6 text-primary" aria-hidden="true" />
                  </dt>
                  Gives you 100% control of your data.
                </div>
              </dl>
            </div>
            <div className="flex flex-col justify-center items-center relative mx-auto mt-10 grid max-w-md mb-20">
              <Link href="/access" className="btn btn-primary mt-10 text-white z-30">
                {' '}
                Request Genesis Access Now{' '}
              </Link>
              <h2 className="lg:text-lg text-lg text-white/80 mt-4">
                Limited
                <span className="relative lg:text-lg text-lg text-primary font-bold"> Genesis Cards </span>
                available.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
