import React from 'react';
import Head from 'next/head';
import { CarmelListScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout {...props}>
          <CarmelListScreen {...props}/>
      </AppLayout>
    </>
  );
};

export default Main