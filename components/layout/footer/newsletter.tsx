import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(email);
  };

  return (
    <form className="flex flex-col text-center md:text-start max-w-[353px]  space-y-4" onSubmit={handleSubmit}>
      <h4>Join Newsletter</h4>
      <p className="text-sm md:text-md ">Subscribe our newsletter to get more free design course and resource</p>
      <div className="flex h-9  border border-primary-color">
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          value={email}
          className="w-full px-4 bg-transparent text-xs md:text-sm text-white placeholder:text-white border-none"
          placeholder="Enter your email"
        />
        <div className="w-[36px] m-[1px] h-auto bg-primary-color font-bold flex justify-center items-center">{'>'}</div>
      </div>
    </form>
  );
};

export default Newsletter;
