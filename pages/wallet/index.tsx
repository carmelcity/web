import React from 'react'
import Head from 'next/head'
import { WalletScreen } from '~/components/me/screens'
import { PrivateLayout } from '~/components/layout/Layout'

const Main = ({ env }: any) => {
  return (
    <>
      <Head>
        <title>My Carmel Wallet</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <PrivateLayout env={env}>
        <WalletScreen/>
      </PrivateLayout>
    </>
  )
}

export default Main


export async function getStaticProps() {
  return {
    props: {
      env: {
        NEXT_PUBLIC_GATEWAY_URL: process.env.NEXT_PUBLIC_GATEWAY_URL,
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL     
      }
    }
  }
}
