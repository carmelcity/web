import React from 'react';
import Head from 'next/head';
import { IncubatorScreen } from '~/components/incubator/screens';

const Main = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Carmel | Incubator</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <IncubatorScreen />
    </>
  );
};

export default Main;
