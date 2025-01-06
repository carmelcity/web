import React from 'react';
import Head from 'next/head';
import { ChallengesListScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>Carmel Challenges</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout {...props}> 
        <ChallengesListScreen {...props}/>
      </AppLayout>
    </>
  );
};

export default Main