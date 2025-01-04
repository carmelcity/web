import React from 'react';
import Head from 'next/head';
import { ItemScreen } from '~/components/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Assets</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ItemScreen name="assetgroups" />
      </AppLayout>
    </>
  );
};

export default Main