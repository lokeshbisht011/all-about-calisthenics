import React from "react";
import BlogList from "@/components/BlogList";
import { allBlogs } from "contentlayer/generated";

const RecentPostsMenu = async ({ page }) => {
  const blogs = allBlogs;
  const topPosts = blogs.slice(0, 3);
  const otherPosts = blogs.slice(3);

  return (
    <div className="container mx-auto px-4 mt-5 mb-5">
      <h1 className="text-5xl font-bold mb-8 text-center">Blogs</h1>
      <section className="mt-8">
        <BlogList posts={blogs} />
      </section>
    </div>
  )
};

export default RecentPostsMenu;