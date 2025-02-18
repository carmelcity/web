import React from 'react'
import Head from 'next/head'
import { User } from '~/screens'
import { PrivateLayout } from '~/components/layout/Layout'

const Main = (props: any) => {
  return (
    <>
      <Head>
        <title>Carmel Admin</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <PrivateLayout {...props} minLevel={50}>
        <User.AdminScreen {...props}/>
      </PrivateLayout>
    </>
  )
}

export default Main