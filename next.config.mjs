/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/doify",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
