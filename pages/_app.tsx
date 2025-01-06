import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../styles/tiles.css';
import 'remixicon/fonts/remixicon.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCarmelAuth } from '~/sdk';

function App({ Component, pageProps }: any) {
  const [ready, setReady] = useState(false)
  const auth = useCarmelAuth()

  useEffect(() => {
    (async () => {
      await auth.initialize()
      await auth.getFreshProfile()
    })()
  }, [])

  useEffect(() => {
    if (!auth.profile || !auth.profile.username) {
      return 
    }

    setReady(true)
  }, [auth.profile])

  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} auth={auth} ready={ready}/>
        <ToastContainer />
    </ThemeProvider>
  );
}

export default App