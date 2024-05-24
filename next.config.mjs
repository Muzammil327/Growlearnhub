/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.website-files.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "growlearnhubbackend.vercel.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "svgrepo.com",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.growlearnhub.com" }],
        destination: "https://growlearnhub.com/:path*",
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
