/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/dentistry-portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/dentistry-portfolio/' : '',
};

export default nextConfig;