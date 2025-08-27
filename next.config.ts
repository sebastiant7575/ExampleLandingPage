import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
        port: '',          // leave empty unless needed
        pathname: '/plus-assets/img/component-images/**', // allow this path
      },
    ],
  },
};

export default nextConfig;
