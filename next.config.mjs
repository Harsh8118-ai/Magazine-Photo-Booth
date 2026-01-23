/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  async rewrites() {
    return [
      {
        source: "/photo-booth-rental-in-:city",
        destination: "/:city",
      },
    ]
  },

  async redirects() {
    return [
      {
        source: "/:city(delhi|ghaziabad|noida|gurugram|gurgaon|faridabad|jaipur|udaipur|mumbai|pune)",
        destination: "/photo-booth-rental-in-:city",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
