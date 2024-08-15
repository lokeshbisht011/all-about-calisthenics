import React from "react";
import BlogList from "@/components/BlogList";
import { allBlogs } from "contentlayer/generated";

const RecentPostsMenu = async ({ page }) => {
  const blogs = allBlogs;
  
  const shuffledBlogs = [...blogs];

  for (let i = shuffledBlogs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledBlogs[i], shuffledBlogs[j]] = [shuffledBlogs[j], shuffledBlogs[i]];
  }

  return (
    <div className="container mx-auto px-4 mt-5 mb-5">
      <h1 className="text-5xl font-bold mb-8 text-center">Blogs</h1>
      <section className="mt-8">
        <BlogList posts={shuffledBlogs} />
      </section>
    </div>
  )
};

export default RecentPostsMenu;