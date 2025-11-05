import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow cross-origin requests from local network
  allowedDevOrigins: ['192.168.200.200'],
};

export default nextConfig;
