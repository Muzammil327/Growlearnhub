import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["typeorm"]
  }
}

export default nextConfig
