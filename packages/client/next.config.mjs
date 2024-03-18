/** @type {import('next').NextConfig} */

const API_URL = process.env.API_URL || "http://localhost:8080";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/api/:path",
        destination: `${API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
