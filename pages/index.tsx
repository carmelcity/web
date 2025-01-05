import React from 'react';
import Head from 'next/head';
import { CarmelListScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
          <CarmelListScreen/>
      </AppLayout>
    </>
  );
};

export default Main