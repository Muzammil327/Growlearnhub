const nextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    domains: ["rainbowthemes.net"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.growlearnhub.com" }],
        destination: "https://growlearnhub.com/:path*/",  // Ensure trailing slash in the destination URL
        permanent: true,
      },
    ];
  },
  trailingSlash: true,  // Ensuring all routes use trailing slashes
  reactStrictMode: true,
};

export default nextConfig;
