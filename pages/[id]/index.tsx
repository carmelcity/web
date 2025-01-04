import React from 'react';
import Head from 'next/head';
import { ItemScreen } from '~/components/screens';
import { AppLayout } from '~/components/layout/Layout';
import { useRouter } from 'next/router';

const Main = () => {
  const router = useRouter()
  const id: any = router.query.id

  if (!id) {
    return <div/>
  }


  // if (isNaN(parseInt(slug))) {
  //   return <AccountProfile username={slug}/>
  // }

  // return <Carmel id={parseInt(slug)}/>

  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ItemScreen name="accounts"/>
      </AppLayout>
    </>
  );
};

export default Main