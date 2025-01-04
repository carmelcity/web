import React, { useState } from 'react';
import { readexPro } from '~/elements/fonts';

const Form = () => {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <label className={`${readexPro.className} text-primary`}>Your Email</label>
      <div className="flex gap-2 flex-col md:flex-row w-full">
        <input
          className={`max-w-[420px] flex-1 text-primary bg-[#00BCD414] drop-shadow shadow-md shadow-[#03664E] focus:border-current focus:ring-0 ${readexPro.className}`}
          style={{
            borderImageSource: 'linear-gradient(0.25turn, #00FFFF, #03664E)',
            borderWidth: 1,
            borderImageSlice: 1,
          }}
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button className={`py-2 px-6 text-black bg-primary font-medium ${readexPro.className}`}>
          Request an Invite
        </button>
      </div>
    </div>
  );
};

export default Form;
