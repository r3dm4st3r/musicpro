/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: "use-credentials",
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  compress: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
    API_PATH: process.env.API_PATH,
    API_SERVER: process.env.API_SERVER,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.saavncdn.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

module.exports = nextConfig;
