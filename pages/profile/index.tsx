import React from 'react'
import Head from 'next/head'
import { ProfileScreen } from '~/components/me/screens'
import { PrivateLayout } from '~/components/layout/Layout'

const Main = () => {
  return (
    <>
      <Head>
        <title>My Carmel Profile</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <PrivateLayout>
        <ProfileScreen/>
      </PrivateLayout>
    </>
  )
}

export default Main
