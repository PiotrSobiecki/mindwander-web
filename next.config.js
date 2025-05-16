/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
