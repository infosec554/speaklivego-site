/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deployable to any static host (Vercel, Caddy on our VPS, ...).
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
