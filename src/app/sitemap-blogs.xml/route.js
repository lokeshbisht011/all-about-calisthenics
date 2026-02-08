import { newSlugs } from "@/lib/plancheSlugs";

export const runtime = "edge"; // optional: faster

const BASE_URL = "https://allaboutcalisthenics.com";

export async function GET() {
  const urls = newSlugs.map((slug) => `${BASE_URL}/blogs/${slug}`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
