import React from 'react';
import Head from 'next/head';
import { IncubatorScreen } from '~/components/incubator/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Incubator</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <IncubatorScreen />
      </AppLayout>
    </>
  );
};

export default Main