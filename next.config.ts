const nextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    domains: ["rainbowthemes.net"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       has: [{ type: "host", value: "www.growlearnhub.com" }], // Check for non-www domain
  //       destination: "https://growlearnhub.com/:path*", // Redirect to www version
  //       permanent: true,
  //     },
  //   ];
  // },  
  trailingSlash: true,
};

export default nextConfig;
