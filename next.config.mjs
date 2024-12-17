import nodeExternals from 'webpack-node-externals';

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: false,
  // externals: [nodeExternals()],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/*/**',
      },
    ],
  },
};
