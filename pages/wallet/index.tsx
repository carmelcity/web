import React from 'react'
import Head from 'next/head'
import { WalletScreen } from '~/components/me/screens'
import { PrivateLayout } from '~/components/layout/Layout'

const Main = () => {
  return (
    <>
      <Head>
        <title>My Carmel Wallet</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <PrivateLayout>
        <WalletScreen/>
      </PrivateLayout>
    </>
  )
}

export default Main