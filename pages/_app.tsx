import React, { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../styles/tiles.css';
import 'remixicon/fonts/remixicon.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCarmelAuth } from '~/sdk';

function App({ Component, pageProps }: any) {
  const auth = useCarmelAuth()

  useEffect(() => {
    (async () => {
      await auth.initialize()
    })()
  }, [])

  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} auth={auth}/>
        <ToastContainer />
    </ThemeProvider>
  );
}

export default App