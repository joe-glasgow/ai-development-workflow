/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // basePath: '/ai-development-workflow', // Commented out for local development
  // assetPrefix: '/ai-development-workflow/', // Commented out for local development
}

module.exports = nextConfig
