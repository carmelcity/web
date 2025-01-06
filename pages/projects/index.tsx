import React from 'react';
import Head from 'next/head';
import { ProjectsListScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>Carmel Projects</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout {...props}>
        <ProjectsListScreen {...props}/>
      </AppLayout>
    </>
  );
};

export default Main