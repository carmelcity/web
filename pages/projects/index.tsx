import React from 'react';
import Head from 'next/head';
import { ProjectsListScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>Carmel Projects</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ProjectsListScreen />
      </AppLayout>
    </>
  );
};

export default Main