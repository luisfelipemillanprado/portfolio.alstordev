/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: 'customValue',
  },
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        port: '3000',
        pathname: './**',
      },
    ],
  },
  compress: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
