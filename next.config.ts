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
