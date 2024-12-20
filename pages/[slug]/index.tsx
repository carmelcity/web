import React from 'react';
import Head from 'next/head';
import { ChannelScreen } from '~/components/channel/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = ({ env }: any) => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ChannelScreen env={env}/>
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

export const getStaticPaths = async () => {
  return {
      paths: [],
      fallback: 'blocking'
  }
}
