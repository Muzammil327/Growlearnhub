/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      serverComponentsExternalPackages: ['typeorm'],
      appDir: true, // If you're using the app directory feature
    },
    revalidate: 60,
};

export default nextConfig;
