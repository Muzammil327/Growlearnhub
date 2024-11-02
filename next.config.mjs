/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      serverComponentsExternalPackages: ['typeorm'],
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
