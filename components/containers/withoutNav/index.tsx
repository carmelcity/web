import React from 'react';
// import { useCarmelNet } from '~/sdk/hooks';

export default ({ children, containerClasses }: any) => {
  // const carmelNet = useCarmelNet();
  // const carmelAuth = useCarmelAuth();
  // const newProps: any = { carmel: { net: carmelNet, auth: carmelAuth } };

  return (
    <div className="w-full flex flex-col justify-center items-center text-center bg-primary-gradient bg-no-repeat bg-top bg-fill">
      <main className={`flex w-full flex-col justify-start items-center text-center ${containerClasses ?? ''}`}>
        {children}
      </main>
    </div>
  );
};
