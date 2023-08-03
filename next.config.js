/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ghaiuvgnlzimzxowzzbq.supabase.co'
        },
      ],
},
}

module.exports = nextConfig
