/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/DWC',
  assetPrefix: '/DWC/',
}

module.exports = nextConfig