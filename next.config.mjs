import nodeExternals from 'webpack-node-externals';

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  // externals: [nodeExternals()],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'data.fitroot.xyz',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
};
