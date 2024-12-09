import React from 'react';
import Header from './header';

const Featured = ({ children, title, description }: any) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-12 w-11/12 lg:w-4/5">
      <Header title={title} description={description} />
      {children}
    </div>
  );
};

export default Featured;
