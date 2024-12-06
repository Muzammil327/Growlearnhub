const nextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    domains: ["rainbowthemes.net"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "growlearnhub.com" }], // Check for non-www domain
        destination: "https://www.growlearnhub.com/:path*", // Redirect to www version
        permanent: true,
      },
    ];
  },  
  trailingSlash: true,
  reactStrictMode: true,
  // swcMinify: true,
};

export default nextConfig;
