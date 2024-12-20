import React from 'react';
import Head from 'next/head';
import { StoreScreen } from '~/components/store/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = ({ env }: any) => {
  return (
    <>
      <Head>
        <title>Carmel Communities</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout env={env}>
        <StoreScreen />
      </AppLayout>
    </>
  );
};

export default Main


export async function getStaticProps() {
  return {
    props: {
      env: {
        NEXT_PUBLIC_GATEWAY_URL: process.env.NEXT_PUBLIC_GATEWAY_URL,
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL     
      }
    }
  }
}
