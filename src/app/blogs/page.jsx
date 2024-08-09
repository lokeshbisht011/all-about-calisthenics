import BlogList from "@/components/BlogList";
import { allBlogs } from "contentlayer/generated";

const BlogPage = ({ searchParams }) => {
  const { category } = searchParams;
  const blogs = allBlogs;

  const filteredBlogs = category 
    ? blogs.filter(blog => blog.tags.map(tag => tag.toLowerCase().replace(/\s+/g, '-')).includes(category.toLowerCase()))
    : blogs;

  const shuffledBlogs = [...filteredBlogs];

  // Fisher-Yates shuffle algorithm to randomize the blogs
  for (let i = shuffledBlogs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledBlogs[i], shuffledBlogs[j]] = [shuffledBlogs[j], shuffledBlogs[i]];
  }

  return (
    <div className="mx-auto px-4 mt-5 mb-5 text-black">
      <h1 className="text-5xl font-bold mb-8 text-center">Blogs</h1>
      <section className="mt-8">
        <BlogList posts={shuffledBlogs} />
      </section>
    </div>
  );
};

export default BlogPage;
