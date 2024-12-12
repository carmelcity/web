import React from 'react';
import Head from 'next/head';
import { ProjectsScreen } from '~/components/incubator/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Carmel Projects</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ProjectsScreen />
      </AppLayout>
    </>
  );
};

export default Main;
