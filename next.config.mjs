import path from 'path'

/** @type {import('next').NextConfig} */
export default {
  transpilePackages: ["@carmel/core"],
  webpack(webpackConfig) {
    console.log(path.resolve("./node_modules/@carmel/core"))
    webpackConfig.resolve.alias["@carmel/core"] = path.resolve("./node_modules/@carmel/core");
    return {
      ...webpackConfig,
    }
  },
  reactStrictMode: true,
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