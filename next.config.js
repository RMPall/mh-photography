/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimized variants are cached for 31 days instead of the 60s default,
    // so each size is generated once per container rather than repeatedly.
    minimumCacheTTL: 2678400,
  },
}

module.exports = nextConfig
