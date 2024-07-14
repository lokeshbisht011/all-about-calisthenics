import BlogList from "@/components/BlogList";
import { allBlogs } from "contentlayer/generated";

const BlogPage = ({ searchParams }) => {
  const { category } = searchParams;
  const blogs = allBlogs;

  const filteredBlogs = category 
    ? blogs.filter(blog => blog.tags.map(tag => tag.toLowerCase().replace(/\s+/g, '-')).includes(category.toLowerCase()))
    : blogs;

  return (
    <div className="mx-auto px-4 mt-5 mb-5 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8 text-center">Blogs</h1>
      <section className="mt-8">
        <BlogList posts={filteredBlogs} />
      </section>
    </div>
  );
};

export default BlogPage;
