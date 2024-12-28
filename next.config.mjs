/** @type {import('next').NextConfig} */
export default {
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
        hostname: 'files.carmel.city',
        port: '',
        pathname: '/*/**',
      },
    ],
  },
};
