import React from 'react';
import Head from 'next/head';
import { CarmelsScreen } from '~/components/carmels/screens';
import { WaitScreen } from '~/components/wait/screens';
import { AppLayout, WaitLayout } from '~/components/layout/Layout';

const Main = ({ env }: any) => {
  console.log({
    env
  })

  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
          <CarmelsScreen/>
      </AppLayout>
    </>
  );
};

export default Main


export async function getStaticProps() {
  const env = {
      NEXT_PUBLIC_GATEWAY_URL: process.env.NEXT_PUBLIC_GATEWAY_URL,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL        
  }

  return {
    props: {
      env
    }
  }
}