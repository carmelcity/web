/** @type {import('next').NextConfig} */

const props = { 
  // assetPrefix: "./",
  output: "export", 
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

export default props
