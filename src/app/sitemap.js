import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const baseUrl = 'https://www.allaboutcalisthenics.com';
  
  const blogPages = allBlogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.date,
  }));

  const staticPages = [
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/glossary`, lastModified: new Date() },
    { url: `${baseUrl}/one-rep-max-calculator`, lastModified: new Date() },
  ];

  // Combine blog pages and static pages
  return [...blogPages, ...staticPages];
}
