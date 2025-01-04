import React from 'react';
import Head from 'next/head';
import { SimpleListScreen } from '~/components/screens';
import { AppLayout } from '~/components/layout/Layout';

const Main = () => {  
  return (
    <>
      <Head>
        <title>Carmel Store</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <SimpleListScreen
          title="Carmel"
          onItemPress='/store/:username'
          actionTitle="View Assets"
          subtitle="Asset Store"
          icon="CurrencyDollarIcon" 
          name="assetgroups" 
        />
      </AppLayout>
    </>
  );
};

export default Main