import React from 'react';
import Head from 'next/head';
import { ChallengeScreen } from '~/components/hub/screens/ChallengeScreen';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Challenge</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ChallengeScreen/>
      </AppLayout>
    </>
  );
};

export default Main