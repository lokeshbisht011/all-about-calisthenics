import fs from 'fs';
import path from 'path';
import React from "react";
import styles from "./relatedPosts.module.css";
import Card from "../postCard/PostCard";

const getData = async (categoryId, postSlug) => {
  const res = await fetch(
    `http://${process.env.BASE_URL}/api/related-posts?categoryId=${categoryId}&postSlug=${postSlug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getDataFromFile = (category, postSlug) => {
  const filePath = path.join(process.cwd(), 'public/posts.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(fileContents);
  
  const filteredPosts = posts.filter(post => post.categories.includes(category) && post.slug !== postSlug);
  return filteredPosts.slice(0, 6);
};

const RelatedPosts = async ({ categories, postSlug }) => {

  const index = Math.floor(Math.random() * categories.length);
  // const posts = await getData(categories[index], postSlug);

  const posts = getDataFromFile(categories[index], postSlug)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Related Posts</h1>
      <div className={styles.posts}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post._id} post={post} />
          ))
        ) : (
          <p>No blogs added</p>
        )}
      </div>
    </div>
  );
};

export default RelatedPosts;
