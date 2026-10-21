import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  // basePath: "/pri_frontend",
  // trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
