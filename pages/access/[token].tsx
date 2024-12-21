import React from 'react';
import Head from 'next/head';
import { AccessLayout } from '~/components/layout/Layout';
import { AccessScreen } from '~/components/access/screens'

const Main = ({ env }: any) => {
   return (
    <>
      <Head>
        <title>Carmel Access</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AccessLayout env={env}>
        <AccessScreen env={env}/>
      </AccessLayout>
    </>
  );
};

export default Main

export const getStaticPaths = async () => {
  return {
      paths: [],
      fallback: 'blocking'
  }
}

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
