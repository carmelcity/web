import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../styles/tiles.css';
import 'remixicon/fonts/remixicon.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCarmelAuth } from '~/sdk';
import Head from 'next/head';
import { AppLoadingLayout } from '~/components/layout/Layout';

const Loading = () => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLoadingLayout/>
    </>
  );
}
function App({ Component }: any) {
  const [ready, setReady] = useState(false)
  const auth = useCarmelAuth()
  
  useEffect(() => {
    (async () => {
      await auth.initialize()
      await auth.getFreshProfile()
    })()
  }, [])

  useEffect(() => {
    if (auth.isLoggedIn() && (!auth.profile || !auth.profile.username)) {
      return 
    }
    setReady (!auth.isLoggedIn() || (auth.profile || !auth.profile.username))
  }, [auth.profile])

  return (
      <ThemeProvider attribute="class">
        { ready ? <Component auth={auth}/> : <Loading/> }
        <ToastContainer />
    </ThemeProvider>
  );
}

export default App