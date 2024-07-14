import fs from 'fs';
import path from 'path';
import React from "react";
import styles from "./popularPostMenu.module.css";
import PopularPost from "./PopularPost";


const PopularPosts = async () => {

  // const posts = await getData();

  // const posts = getDataFromFile()

  return (
    <div className="flex-[2] ml-5 mt-[30px]">
      <h1 className="text-[28px]">Most Popular</h1>
      <div className="mt-[35px] flex flex-col gap-[20px]">
        {posts?.map((post) => (
          <PopularPost post={post} uniqueId={post._id}/>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
