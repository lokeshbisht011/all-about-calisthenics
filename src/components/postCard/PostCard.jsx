import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const Card = ({ uniqueId, post }) => {

  const categoryTitles = post.categories;

  return (
    <div className={styles.container} key={uniqueId}>
      {post.coverImage && (
        <div className={styles.imageContainer}>
          <Link href={`/posts/${post.slug}`}>
            <Image src={post.coverImage} alt="Cover Image" fill className={styles.image} />
          </Link>
        </div>
      )}
      <Link href={`/posts/${post.slug}`}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post?.description}</p>
      </Link>
      <div className={styles.categoryContainer}>
        {categoryTitles?.map((title) => (
          <Link href={`/blog?category=${title.toLowerCase()}`}>
            <span className={`${styles.category} ${title.toLowerCase()}`}>{title}</span>
          </Link>
        ))}
      </div>
    </div >
  );
};

export default Card;