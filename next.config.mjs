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
  output: 'export',  // Esto genera archivos HTML estáticos
  distDir: 'out',    // Los archivos se generarán en la carpeta 'out'
  experimental: {
    appDir: true,
  }
}

export default nextConfig;
