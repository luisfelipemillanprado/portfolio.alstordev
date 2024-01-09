/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  env: {
    customKey: 'customValue',
  },
  swcMinify: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/styles': {
      transform: '@mui/styles/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  images: {
    unoptimized: false,
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
