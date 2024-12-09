import React from 'react';
import Head from 'next/head';
import { ContactsScreen } from '~/components/contacts/screens';
import { StoriesScreen } from '~/components/stories/screens';

const MyWalletPage = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <StoriesScreen />
      {/* <ContactsScreen user={user} /> */}
    </>
  );
};

export default MyWalletPage;
