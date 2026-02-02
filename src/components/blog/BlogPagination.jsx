"use client";

import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { usePathname } from "next/navigation";

export default function BlogPagination() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const index = blogs.findIndex((b) => b.slug === slug);
  if (index === -1) return null;

  const truncate = (text, maxLength = 50) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="flex justify-between">
      {blogs[index - 1] && (
        <Link href={`/blogs/${blogs[index - 1].slug}`}>
          ← {truncate(blogs[index - 1].title)}
        </Link>
      )}

      {blogs[index + 1] && (
        <Link href={`/blogs/${blogs[index + 1].slug}`}>
          {truncate(blogs[index + 1].title)} →
        </Link>
      )}
    </div>
  );
}
