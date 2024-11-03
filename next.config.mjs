/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      serverComponentsExternalPackages: ['typeorm'],
    },
    images: {
      domains: ['rainbowthemes.net'],
    },
};

export default nextConfig;
