/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/DWC',
  assetPrefix: '/DWC/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 