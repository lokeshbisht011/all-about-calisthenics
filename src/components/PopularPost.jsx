import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./popularPost.module.css"

const PopularPost = ({ post, uniqueId }) => {

  const categoryTitles = post.categories;

  return (
    <div key={uniqueId}>
      <div className="flex items-center gap-[20px] mr-[30px]">
        <div className="flex-[1] [aspect-ratio:1/1] relative">
          <Link href={`/posts/${post.slug}`}>
            <Image src={post.coverImage} alt="" fill className="rounded-[50%] border-[3px] border-[solid] border-[lightgray] object-cover" />
          </Link>
        </div>
        <div className="flex-[4] flex flex-col gap-[5px]">
          <div className="flex flex-wrap gap-[5px]">
            {categoryTitles?.map((title) => (
              <Link href={`/blog?category=${title.toLowerCase()}`}>
                <span className={`py-0.5 px-2 rounded-[10px] text-xs text-white uppercase ${title.toLowerCase()}`}>{title}</span>
              </Link>
            ))}
          </div>
          <Link href={`/posts/${post.slug}`}>
            <h3 className="mt-[10px] text-[18px] font-medium text-[white]">
              {post.title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="border-[0.1px] border-[solid] border-[rgba(255,255,255,0.2)] mt-[20px] mr-[20px]"></div>
    </div >
  );
};

export default PopularPost;
