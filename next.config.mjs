/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['gogocdn.net']
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gogocdn.net',
                port: '',
                pathname: '/cover/**'
            },
            {
                protocol: 'https',
                hostname: 'gogocdn.net',
                port: '',
                pathname: '/images/**'
            }
        ]
    }
};

export default nextConfig;
