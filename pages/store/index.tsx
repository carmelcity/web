import React from 'react';
import Head from 'next/head';
import { StoreScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {  
  return (
    <>
      <Head>
        <title>Carmel Store</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <StoreScreen/>
      </AppLayout>
    </>
  );
};

export default Main