import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rc.israelcart.com',
      },  {
        protocol: 'http',
        hostname: 'shop-uat.loc',
      },
    ],
  },
};

export default nextConfig;
