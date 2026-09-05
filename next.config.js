/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimized variants are cached for 31 days rather than the 60s default,
    // so each size is generated once per container instead of repeatedly.
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
