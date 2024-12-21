import React from 'react'
import Head from 'next/head'
import { ProfileScreen } from '~/components/me/screens'
import { PrivateLayout } from '~/components/layout/Layout'

const Main = ({ env }: any) => {
  return (
    <>
      <Head>
        <title>My Carmel Profile</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <PrivateLayout env={env}>
        <ProfileScreen env={env}/>
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