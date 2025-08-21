/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/ai-development-workflow' : '',
  assetPrefix: isProd ? '/ai-development-workflow/' : '',
  eslint: {
    // Disable ESLint during builds since we run it separately
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
