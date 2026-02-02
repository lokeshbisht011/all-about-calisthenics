import Link from "next/link";
import { blogs } from "@/lib/blogs";

export default function RelatedPosts({ currentSlug }) {
  const related = blogs.filter((b) => b.slug !== currentSlug).slice(0, 4);

  return (
    <div>
      <p className="font-semibold mb-3">Related Articles</p>
      <ul className="space-y-2 text-sm">
        {related.map((post) => (
          <li key={post.slug}>
            <Link href={`/blogs/${post.slug}`} className="hover:underline">
              {(post.title)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
