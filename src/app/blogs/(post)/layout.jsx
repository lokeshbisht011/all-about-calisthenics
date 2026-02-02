import AutoHeadingIds from "@/components/blog/AutoHeadingIds";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogTOC from "@/components/blog/BlogTOC";
import RelatedPosts from "@/components/blog/RelatedPosts";

export default function BlogLayout({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">
      {/* Main Content */}
      <main>
        <AutoHeadingIds />
        {children}
        <BlogPagination />
      </main>

      {/* Sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-8">
          <BlogTOC />
          <RelatedPosts />
        </div>
      </aside>
    </div>
  );
}
