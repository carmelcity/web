import nodeExternals from 'webpack-node-externals';

/** @type {import('next').NextConfig} */
export default {
  ssg: false,
  // output: "export",
  // env: {
  //   NEXT_PUBLIC_GATEWAY_URL: process.env.NEXT_PUBLIC_GATEWAY_URL,
  //   NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
  // },
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: 'files.carmel.io',
        port: '',
        pathname: '/*/**',
      },
    ],
  },
};
