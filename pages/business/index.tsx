import React from 'react';
import Head from 'next/head';
import { BusinessScreen } from '~/components/business/screens';
import { LandingLayout } from '~/components/layout/Layout';

const Main = ({ env }: any) => {
  return (
    <>
      <Head>
        <title>Carmel | Business </title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <LandingLayout env={env}>
        <BusinessScreen />
      </LandingLayout>
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
