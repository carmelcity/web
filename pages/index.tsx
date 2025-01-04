import React from 'react';
import Head from 'next/head';
import { SimpleListScreen } from '~/components/screens';
import { WaitScreen } from '~/components/wait/screens';
import { AppLayout, WaitLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
      <SimpleListScreen
          title="Carmel"
          onItemPress='/:carmelId'
          actionTitle="View Carmel"
          subtitle="Conversations"
          name="carmels" 
        />
      </AppLayout>
    </>
  );
};

export default Main