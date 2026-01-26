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
      {
        protocol: "https",
        hostname: "cdn.vucasolution.com.br",
      },
      {
        protocol: "https",
        hostname: "gryyplgyeyqb.compat.objectstorage.sa-saopaulo-1.oraclecloud.com",
      },
      {
        protocol: "https",
        hostname: "malte.agilecdn.com.br",
      },
      {
        protocol: "https",
        hostname: "br.openfoodfacts.org",
      },
      {
        protocol: "https",
        hostname: "www.aguasantaines.com.br",
      },
    ],
  },
}

export default nextConfig
