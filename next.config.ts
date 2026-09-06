import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/newwaveconsulting",
        destination: "/newwaveconsulting/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;