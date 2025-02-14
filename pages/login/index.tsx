import React from 'react';
import Head from 'next/head';
import { AccessLayout } from '~/components/layout/Layout';
import { Access } from '~/screens'

const Main = (props: any) => {
   return (
    <>
      <Head>
        <title>Carmel Login</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AccessLayout {...props}>
        <Access.LoginStartScreen {...props}/>
      </AccessLayout>
    </>
  );
};

export default Main