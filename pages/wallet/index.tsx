import React from 'react'
import Head from 'next/head'
import { User } from '~/screens'
import { PrivateLayout } from '~/components/layout/Layout'

const Main = () => {
  return (
    <>
      <Head>
        <title>My Carmel Wallet</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <PrivateLayout>
        <User.WalletScreen/>
      </PrivateLayout>
    </>
  )
}

export default Main