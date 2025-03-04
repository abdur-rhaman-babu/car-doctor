import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.ibb.co.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
      },
    ], // Add allowed image domain
  },
};

export default nextConfig;
