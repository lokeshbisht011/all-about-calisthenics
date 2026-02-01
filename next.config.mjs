/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx';

// Define the MDX configuration
const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
});

// Define the Next.js configuration
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'calisthenics-cup.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'wswcf.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh5.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },

      {
        protocol: 'https',
        hostname: 'jekmupbkimxtsqgdwamt.supabase.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.usercontent.google.com',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDXConfig(nextConfig);
