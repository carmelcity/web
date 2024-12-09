import Head from 'next/head';
import { Children, cloneElement, isValidElement } from 'react';
// import { useCarmelNet } from '~/sdk/hooks';
// import { useCarmelSystem } from '~/sdk/hooks/useSystem';

export default ({ children, containerClasses, useFontGrotesk, removeGradient }: any) => {
  // const carmelNet = useCarmelNet();
  // const carmelAuth = useCarmelAuth(carmelNet);
  // const { account } = carmelAuth;

  // const newProps: any = { carmel: { net: carmelNet, auth: carmelAuth } };
  // const system = useCarmelSystem()

  const newProps: any = {}; // carmel: { net: carmelNet, auth: carmelAuth } };

  const Content = () => {
    const childrenWithProps = Children.map(children, child => {
      if (isValidElement(child)) {
        return cloneElement(child, newProps);
      }
      return child;
    });

    return (
      <main className={`flex w-full flex-col justify-start items-center text-center ${containerClasses ?? ''}`}>
        {childrenWithProps}
      </main>
    );
  };

  return (
    <div
      className={`w-full flex flex-col justify-center items-center text-center ${
        removeGradient ? '' : 'bg-primary-gradient'
      } bg-no-repeat bg-top bg-fill`}>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        {useFontGrotesk ?? <link rel="stylesheet" href="https://use.typekit.net/vpc6bgi.css" />}
      </Head>

      <Content />
    </div>
  );
};
