/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Runtime optimization is disabled deliberately. Sharp's per-transform
    // memory use exceeded the container's limit, so /_next/image returned 502s
    // and crash-looped the server. Source images are pre-sized to 1920px on the
    // longest edge, so next/image serves them directly with no transform.
    unoptimized: true,
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
