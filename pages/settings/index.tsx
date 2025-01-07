import React from 'react'
import Head from 'next/head'
import { User } from '~/screens'
import { PrivateLayout } from '~/components/layout/Layout'

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>My Carmel Settings</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <PrivateLayout {...props}>
        <User.SettingsScreen {...props}/>
      </PrivateLayout>
    </>
  )
}

export default Main