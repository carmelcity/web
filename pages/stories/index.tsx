import React from 'react';
import Head from 'next/head';
import { StoriesScreen } from '~/components/stories/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = ({ env }: any) => {
  return (
    <>
      <Head>
        <title>Carmel Incubator</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout env={env}>
        <StoriesScreen />
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
