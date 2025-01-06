import React from 'react';
import Head from 'next/head';
import { BusinessScreen } from '~/components/business/screens';
import { LandingLayout } from '~/components/layout/Layout';

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>Carmel for Business </title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <LandingLayout {...props}>
        <BusinessScreen {...props}/>
      </LandingLayout>
    </>
  );
};

export default Main