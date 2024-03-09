import fs from 'fs';
import path from 'path';
import React from "react";
import styles from "./popularPostMenu.module.css";
import PopularPost from "../popularPost/PopularPost";

const getData = async () => {
  const res = await fetch(
    `http://${process.env.BASE_URL}/api/popular`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getDataFromFile = () => {
  const filePath = path.join(process.cwd(), 'public/posts.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(fileContents);

  return posts.sort(() => Math.random() - 0.5).slice(0, 6);
};


const PopularPosts = async () => {

  // const posts = await getData();

  const posts = getDataFromFile()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        {posts?.map((post) => (
          <PopularPost post={post} uniqueId={post._id}/>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
