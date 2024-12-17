import React from 'react'
import Head from 'next/head'
import { MeScreen } from '~/components/me/screens'
import { AppLayout } from '~/components/layout/Layout'

const Main = () => {
  return (
    <>
      <Head>
        <title>My Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <MeScreen/>
      </AppLayout>
    </>
  )
}

export default Main
