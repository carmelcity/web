import React from 'react';
import Head from 'next/head';
import { StoriesScreen } from '~/components/stories/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Stories</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <StoriesScreen />
      </AppLayout>
    </>
  );
};

export default Main