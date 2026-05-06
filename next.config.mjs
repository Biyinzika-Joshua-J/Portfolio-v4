/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com'
      },
      {
        protocol: 'https',
        hostname: 'www.josh-codes.dev'
      },
      {
        protocol: 'https',
        hostname: 'josh-codes.dev'
      }
    ]
  }
};

export default nextConfig;
