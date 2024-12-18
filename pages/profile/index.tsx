import React from 'react'
import Head from 'next/head'
import { ProfileScreen } from '~/components/me/screens'
import { AppLayout } from '~/components/layout/Layout'

const Main = () => {
  return (
    <>
      <Head>
        <title>My Carmel Profile</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
        <ProfileScreen/>
      </AppLayout>
    </>
  )
}

export default Main
