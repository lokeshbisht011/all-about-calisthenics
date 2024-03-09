import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./popularPost.module.css"

const PopularPost = ({ post, uniqueId }) => {

  const categoryTitles = post.categories;

  return (
    <div key={uniqueId}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Link href={`/posts/${post.slug}`}>
            <Image src={post.coverImage} alt="" fill className={styles.image} />
          </Link>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.categoryContainer}>
            {categoryTitles?.map((title) => (
              <Link href={`/blog?category=${title.toLowerCase()}`}>
                <span className={`${styles.category} ${title.toLowerCase()}`}>{title}</span>
              </Link>
            ))}
          </div>
          <Link href={`/posts/${post.slug}`} className={styles.item}>
            <h3 className={styles.postTitle}>
              {post.title}
            </h3>
          </Link>
        </div>
      </div>
      <div className={styles.line}></div>
    </div >
  );
};

export default PopularPost;
