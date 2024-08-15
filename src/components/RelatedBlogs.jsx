import React from "react";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import BlogList from "./BlogList";

const RelatedBlogs = ({ currentBlogTags, currentBlogId }) => {
  const getRelatedBlogs = (tags, currentBlogId) => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const relatedBlogs = shuffleArray(
      allBlogs.filter(
        (blog) =>
          blog._id !== currentBlogId &&
          blog.tags.some((tag) => tags.includes(tag))
      )
    ).slice(0, 9);

    return relatedBlogs;
  };

  const relatedBlogs = getRelatedBlogs(currentBlogTags, currentBlogId);

  return (
    <div className="container mx-auto p-4 mt-8 text-text border-t">
      <h2 className="text-center font-bold text-3xl">Related Blogs</h2>
      <div className="flex flex-wrap gap-5 mt-4 mb-4">
        <BlogList posts={relatedBlogs} />
      </div>
    </div>
  );
};

export default RelatedBlogs;
