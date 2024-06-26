/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "evondev.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
