import React from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../styles/tiles.css';
import type { AppProps } from 'next/app';
import * as config from '../sdk/config';
import 'remixicon/fonts/remixicon.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const user = {};

  return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} config={config} user={user} />
        <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
