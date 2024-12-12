import React from 'react';
import Head from 'next/head';
import { CommunitiesScreen } from '~/components/incubator/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Carmel Communities</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <CommunitiesScreen />
      </AppLayout>
    </>
  );
};

export default Main;
