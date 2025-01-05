import React from 'react';
import Head from 'next/head';
import { AccountScreen, CarmelScreen } from '~/screens';
import { AppLayout } from '~/components/layout/Layout';
import { useRouter } from 'next/router';

const Main = (props: any) => {
  const router = useRouter()
  const id: any = router.query.id

  const Content = () => {
    if (!id) {
      return <div/>
    }

    return isNaN(parseInt(id)) ? <AccountScreen {...props}/> : <CarmelScreen {...props}/>
  }

  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <Content/>
      </AppLayout>
    </>
  );
};

export default Main