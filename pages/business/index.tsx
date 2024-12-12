import React from 'react';
import Head from 'next/head';
import { BusinessScreen } from '~/components/business/screens';
import { LandingLayout } from '~/components/layout/Layout';

const Main = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Carmel | Business </title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <LandingLayout>
        <BusinessScreen />
      </LandingLayout>
    </>
  );
};

export default Main;
