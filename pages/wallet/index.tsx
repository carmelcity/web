import React from 'react'
import Head from 'next/head'
import { WalletScreen } from '~/components/me/screens'
import { AppLayout } from '~/components/layout/Layout'

const Main = () => {
  return (
    <>
      <Head>
        <title>My Carmel Wallet</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <WalletScreen/>
      </AppLayout>
    </>
  )
}

export default Main
