import React from 'react';
import Head from 'next/head';
import { CommunitiesListScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>Carmel Studios</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout {...props}>
        <CommunitiesListScreen {...props}/>
      </AppLayout>
    </>
  );
};

export default Main