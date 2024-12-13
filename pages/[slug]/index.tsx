import React from 'react';
import Head from 'next/head';
import { ChannelScreen } from '~/components/channel/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ChannelScreen />
      </AppLayout>
    </>
  );
};

export default Main;
