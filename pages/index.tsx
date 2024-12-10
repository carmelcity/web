import React from 'react';
import Head from 'next/head';
import { ContactsScreen } from '~/components/contacts/screens';
import { CarmelsScreen } from '~/components/carmels/screens';

const MyWalletPage = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <CarmelsScreen />
      {/* <ContactsScreen user={user} /> */}
    </>
  );
};

export default MyWalletPage;
