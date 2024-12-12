import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full py-10 bg-gradient-to-br from-[#00554f] via-[#001c1a] to-black flex justify-center">
      <div className="xl:w-1/2 px-4">
        <h2 className={`text-4xl font-bold ${readex_pro}`}>Subscribe Newsletter</h2>
        <div className={`text-xl text-carmel-grey mb-6 ${readex_pro}`}>Get the latest NFTs news every week.</div>
        <div className="flex flex-1 gap-2">
          <input
            color="primary"
            className={`flex-1 text-primary border-primary border-[1px] focus:border-current focus:ring-0 bg-[#00BCD414] ${readex_pro.className}`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className={`text-black font-bold bg-primary px-6 ${readex_pro}`}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
