/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/cv-portfolio',
  assetPrefix: '/cv-portfolio',
};

module.exports = nextConfig;
