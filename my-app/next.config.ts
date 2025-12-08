import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cknj.com.br",
      },
      {
        protocol: "https",
        hostname: "www.receitasedicasdochef.com.br",
      },
      {
        protocol: "https",
        hostname: "www.comidaereceitas.com.br",
      },
    ],
  },
}

export default nextConfig
