/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Elegir solo una opción:
  experimental: {
    appDir: true,
  }
  // Quitar output: 'export' y distDir: 'out' si quieres usar App Router
}

export default nextConfig;
