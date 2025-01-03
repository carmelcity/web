import React from 'react';
import Head from 'next/head';
import { ChallengesScreen } from '~/components/challenges/screens/';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Challenges</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ChallengesScreen />
      </AppLayout>
    </>
  );
};

export default Main