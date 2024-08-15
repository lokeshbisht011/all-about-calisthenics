import BlogList from "@/components/BlogList";
import { allBlogs } from "contentlayer/generated";

export async function generateMetadata() {
  return {
    title: "All About Calisthenics - Blogs",
    description: "All About Calisthenics : Blogs",
  };
}

const BlogPage = ({ searchParams }) => {
  const { category } = searchParams;
  const blogs = allBlogs;

  const filteredBlogs = category 
    ? blogs.filter(blog => blog.tags.map(tag => tag.toLowerCase().replace(/\s+/g, '-')).includes(category.toLowerCase()))
    : blogs;

  const shuffledBlogs = [...filteredBlogs];

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
