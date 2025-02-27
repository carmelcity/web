import React from 'react';
import Head from 'next/head';
import { AgentScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>Carmel Assets1</title>
        <link rel="icon" href="/favicon/favicon.ico" />        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      </Head>
      <AppLayout {...props}>
        <AgentScreen {...props}/>
      </AppLayout>
    </>
  );
};

export default Main