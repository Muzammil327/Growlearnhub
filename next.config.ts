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
        has: [{ type: "host", value: "growlearnhub.com" }],
        destination: "https://growlearnhub.com/:path*",
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
};

export default nextConfig;
