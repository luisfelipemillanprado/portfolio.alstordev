/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    customKey: 'customValue',
  },
  images: {
    unoptimized: true,
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
