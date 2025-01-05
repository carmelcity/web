import React from 'react';
import Head from 'next/head';
import { CommunitiesListScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Communities</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <CommunitiesListScreen />
      </AppLayout>
    </>
  );
};

export default Main