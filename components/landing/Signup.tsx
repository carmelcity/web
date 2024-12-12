import React from 'react';
import { Readex_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import { Wires } from './Wires'

const readexPro = Readex_Pro({ subsets: ['latin'] });

export const SignUp = ({ text }: any) => {
  const router = useRouter();

  const handleCarmelUniverse = () => {
    router.push('/business/access');
  };

  return (
    <div className="flex flex-col items-center z-40 mb-24">
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-4 lg:mt-20 -mt-40">
          <button
            className={`${readexPro.className} text-xs xxs:text-lg py-3 px-20 bg-cyan  text-black font-normal`}
            onClick={handleCarmelUniverse}>
            Get Early Access
          </button>
          <div className={`${readexPro.className} text-xs xxs:text-lg font-thin md:font-light text-cyan sm:mt-2`}>
            Invitation-only
          </div>
        </div>
      </div>
    </div>
  );
};
