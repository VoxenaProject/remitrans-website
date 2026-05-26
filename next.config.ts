import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  turbopack: {
    root: ".",
  },
}

export default nextConfig
