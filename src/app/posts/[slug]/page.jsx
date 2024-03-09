import fs from 'fs';
import path from 'path';
import styles from "./singlePost.module.css";
import Image from "next/image";
import RelatedPosts from "@/components/relatedPosts/RelatedPosts";
import PopularPosts from "@/components/popularPostMenu/PopularPostMenu";

const getData = async (slug) => {
  const res = await fetch(`http://${process.env.BASE_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getDataFromFile = (slug) => {
  const filePath = path.join(process.cwd(), 'public/posts.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(fileContents);

  return posts.find(post => post.slug === slug);
};

const SinglePage = async ({ params }) => {


  const { slug } = params;

  // const data = await getData(slug);

  const data = getDataFromFile(slug)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.blogContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          {data?.coverImage && (
            <div className={styles.coverImageContainer}>
              <Image src={data.coverImage} alt="" placeholder="blur" blurDataURL="/placeholder.jpeg" fill className={styles.coverImg} />
            </div>
          )}
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: data?.block1 }} />
          {data?.image1 && (
            <div className={styles.imageContainer}>
              <Image src={data.image1} alt="" fill className={styles.image} />
            </div>
          )}

          {data?.block2 && (
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: data?.block2 }} />
          )}
          {data?.image2 && (
            <div className={styles.imageContainer}>
              <Image src={data.image2} alt="" fill className={styles.image} />
            </div>
          )}

          {data?.block3 && (
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: data?.block3 }} />
          )}
          {data?.image3 && (
            <div className={styles.imageContainer}>
              <Image src={data.image3} alt="" fill className={styles.image} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bottomElements}>
        {/* <RelatedPosts categories={data.categories} postSlug={slug} /> */}
      </div>
    </div>
  );
};

export default SinglePage;
