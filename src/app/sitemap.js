import { competitions } from '@/lib/competitionData';
import { gyms } from '@/lib/gymsData';
import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const baseUrl = 'https://www.allaboutcalisthenics.com';
  
  const blogPages = allBlogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.date,
  }));

  const gymUrls = gyms.map((gym) => ({
    url: `${baseUrl}/gyms/${gym.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const competitionUrls = competitions.map((comp) => ({
    url: `${baseUrl}/competitions/${comp.slug}`,
    lastModified: comp.date
      ? new Date(comp.date).toISOString()
      : new Date().toISOString(),
  }));

  const countryCompetitionUrls = Array.from(
    new Set(competitions.map((c) => c.country.toLowerCase()))
  ).map((country) => ({
    url: `${baseUrl}/competitions/country/${country}`,
    lastModified: new Date().toISOString(),
  }));
  

  const staticPages = [
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/glossary`, lastModified: new Date() },
    { url: `${baseUrl}/one-rep-max-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/gyms`, lastModified: new Date() },
    { url: `${baseUrl}/competitions`, lastModified: new Date() },
  ];
  
  return [...blogPages, ...staticPages, ...gymUrls, ...competitionUrls, ...countryCompetitionUrls];
}
