import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    NEXT_PUBLIC_DYNAMIC_VALUE: process.env.NEXT_PUBLIC_DYNAMIC_VALUE, // This will read from the runtime environment
  },
};
console.log(
  "NEXT_PUBLIC_DYNAMIC_VALUE:",
  process.env.NEXT_PUBLIC_DYNAMIC_VALUE
);
export default nextConfig;
