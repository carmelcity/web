import React from 'react';
import Head from 'next/head';
import { AccessLayout } from '~/components/layout/Layout';
import { RegisterScreen } from '~/components/access/screens'

const Main = ({ user }: any) => {
   return (
    <>
      <Head>
        <title>Carmel Access</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AccessLayout>
        <RegisterScreen />
      </AccessLayout>
    </>
  );
};

export default Main;
