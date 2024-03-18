/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            pathname: '**'
        },
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '**'
        },
        {
            protocol: 'https',
            hostname: 'images.pexels.com',
            pathname: '**'
        },
        {
            protocol: 'https',
            hostname: 'lh5.googleusercontent.com',
            pathname: '**'
        },
        {
            protocol: 'https',
            hostname: 'static.wixstatic.com',
            pathname: '**'
        },
        {
            protocol: 'https',
            hostname: 't3.ftcdn.net',
            pathname: '**'
        },
        {
            protocol: 'https',
            hostname: 'media.istockphoto.com',
            pathname: '**'
        }]
    }
};

export default nextConfig;
