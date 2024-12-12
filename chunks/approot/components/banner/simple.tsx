import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Main() {
  return (
    <div className="relative border border-primary-color bg-opacity-80 isolate flex items-center gap-x-6 overflow-hidden bg-primary-color px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 font-bold text-xl">
        You
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
          Request early access <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
        </button>
      </div>
    </div>
  );
}
