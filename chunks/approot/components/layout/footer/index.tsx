import Image from 'next/image';
import { FOOTER_TEXTS } from '~/text/footer';
import { getCurrentYear } from '~/utils/time';
import Newsletter from './newsletter';
import Link from 'next/link';

export default () => (
  <div className="relative w-full">
    <footer className="footer flex flex-col px-6 pt-6 md:px-10 md:pt-10 bg-dark-green border-t border-t-cyan/50 shadow-footer">
      <div className="flex justify-between w-full flex-col md:flex-row gap-y-8 items-center md:items-start">
        <div className="flex flex-col space-y-4  text-center md:text-start items-center md:items-start">
          <Image width={146} height={26} className="w-36" src="/images/logo/footer-logo.svg" alt="footer logo" />
          <h4 className="text-lg w-full">Everyone an innovator.</h4>
        </div>
        <div>
          {/* <Newsletter /> */}
          {/* <Link
            href={'/access/login'}
            className={`cursor-pointer font-normal text-white`}>
            Sign in
          </Link> */}
        </div>
      </div>
      <div className="border-t h-24 border-primary/30 w-full justify-center items-center text-center md:text-start">
        {/* <p className="text-white/70 text-xs mb-0">Copyright © {getCurrentYear()} Carmel. All rights reserved</p> */}
      </div>
    </footer>
  </div>
);
