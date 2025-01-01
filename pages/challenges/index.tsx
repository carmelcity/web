import React from 'react';
import Head from 'next/head';
import { HubScreen } from '~/components/hub/screens/';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Challenges</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <HubScreen tab="challenges"/>
      </AppLayout>
    </>
  );
};

export default Main