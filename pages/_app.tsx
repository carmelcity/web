import React from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../styles/tiles.css';
import type { AppProps } from 'next/app';
import { Layout } from '~/components/layout/Layout';
import * as config from '../sdk/config';
import 'remixicon/fonts/remixicon.css';
// import { useCarmelUser } from '~/sdk';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const user = {};

  return (
    <ThemeProvider attribute="class">
      <Layout user={user}>
        <Component {...pageProps} config={config} user={user} />
      </Layout>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
