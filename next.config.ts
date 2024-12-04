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
      {
        source: "/sitemap.xml/",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/api/:path*/",
        destination: "/api/:path*",
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
