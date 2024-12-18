import nodeExternals from 'webpack-node-externals';

/** @type {import('next').NextConfig} */
export default {
  output: "export",
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
    ],
  },
};
