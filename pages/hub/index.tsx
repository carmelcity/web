import React from 'react';
import Head from 'next/head';
import { HubScreen } from '~/components/hub/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Hub</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <HubScreen />
      </AppLayout>
    </>
  );
};

export default Main