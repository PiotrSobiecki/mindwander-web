/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
