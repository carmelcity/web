import React from 'react';
import Head from 'next/head';
import { CarmelsScreen } from '~/components/carmels/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <CarmelsScreen />
      </AppLayout>
    </>
  );
};

export default Main;
