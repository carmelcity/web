import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from '@/components/common/Layout'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carmel",
  description: "Carmel"
};

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <html lang="en">
      <body className={inter.className}>
          <Layout>
            { React.Children.map(children, (child: any) => {
                return React.cloneElement(child, { hello: "world" })
            }) }
           </Layout>
        </body>
    </html>
  );
}