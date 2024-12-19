import React from 'react';
import { readex_pro } from '~/components/fonts';
import Head from 'next/head';

export const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden bg-dark-indigo">
        <div className="px-6 py-4 rounded shadow-lg">
          <div className={`${readex_pro.className} mb-2 text-2xl font-light flex flex-col items-center`}>
            <span className={`${readex_pro.className} mb-2 text-2xl font-bold text-cyan`}>404</span>This page could not
            be found.
          </div>
        </div>
      </div>
    </>
  );
};
