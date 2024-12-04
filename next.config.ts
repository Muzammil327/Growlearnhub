const nextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    domains: ["rainbowthemes.net"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       has: [{ type: "host", value: "www.growlearnhub.com" }],
  //       destination: "https://growlearnhub.com/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },
  // trailingSlash: (path: string): boolean => {
  //   if (path.startsWith('/api')) {
  //     return false;
  //   }
  //   return true;
  // },
  // reactStrictMode: true,
  // swcMinify: true,
};

export default nextConfig;
