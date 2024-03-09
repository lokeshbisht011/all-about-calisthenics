import fs from 'fs';
import path from 'path';
import React from "react";
import styles from "./recentPostsMenu.module.css";
import Pagination from "../pagination/Pagination";
import PostCard from "../postCard/PostCard";

const getData = async (page, category) => {
  const res = await fetch(
    `http://${process.env.BASE_URL}/api/posts?page=${page}&category=${category || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getDataFromFile = (page, category) => {
  const filePath = path.join(process.cwd(), 'public/posts.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(fileContents);

  if (category) {
    return getPostsOfCategory(page, category, posts)
  } else {
    return getAllPosts(page, posts)
  }
};

const getPostsOfCategory = (page, category, posts) => {
  const filteredPosts = posts.filter(post => post.categories.includes(category));

  const startIndex = (page - 1) * 6;
  const endIndex = startIndex + 6;
  const pagedPosts = filteredPosts.slice(startIndex, endIndex);

  return { posts: pagedPosts, count: posts.length };
}

const getAllPosts = (page, posts) => {
  const startIndex = (page - 1) * 6;
  const endIndex = startIndex + 6;
  const pagedPosts = posts.slice(startIndex, endIndex);

  return { posts: pagedPosts, count: posts.length };
}

const RecentPosts = async ({ page, category }) => {

  // const { posts, count } = await getData(page, category);

  const { posts, count } = getDataFromFile(page, category);

  const POST_PER_PAGE = 6;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  // const pagePosts = posts.slice(POST_PER_PAGE * (page - 1), POST_PER_PAGE * (page - 1) + POST_PER_PAGE);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard uniqueId={post._id} post={post} />
          ))
        ) : (
          <p>No blogs added</p>
        )}
      </div>
    </div>
  );
};

export default RecentPosts;