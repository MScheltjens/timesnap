/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'ghaiuvgnlzimzxowzzbq.supabase.co',
                protocol: 'https',
            },
        ],
    },
};

module.exports = nextConfig;
