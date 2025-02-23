import React from 'react';
import Head from 'next/head';
import { AgentScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>Carmel Assets</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout {...props}>
        <AgentScreen {...props}/>
      </AppLayout>
    </>
  );
};

export default Main