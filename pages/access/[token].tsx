import React from 'react';
import Head from 'next/head';
import { AccessLayout } from '~/components/layout/Layout';
import { AccessScreen } from '~/components/access/screens'

const Main = () => {
   return (
    <>
      <Head>
        <title>Carmel Access</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AccessLayout>
        <AccessScreen/>
      </AccessLayout>
    </>
  );
};

export default Main