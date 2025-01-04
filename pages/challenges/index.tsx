import React from 'react';
import Head from 'next/head';
import { SimpleListScreen } from '~/components/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Challenges</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
      <SimpleListScreen
          title="Carmel"
          onItemPress='/challenges/:challengeId'
          actionTitle="View Challenge"
          subtitle="Challenges"
          icon="TrophyIcon" 
          name="challenges" 
        />
      </AppLayout>
    </>
  );
};

export default Main