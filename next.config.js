/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: "use-credentials",
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  output: 'standalone',
  compress: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  swcMinify: true,
  env: {
    "NEXT_PUBLIC_API_SERVER": "https://api.music.cloudiance.space/api/v1/saavn",
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
