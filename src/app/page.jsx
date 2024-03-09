import Hero from "@/components/hero/Hero";
import styles from "./homepage.module.css"
import RecentPosts from "@/components/recentPostsMenu/RecentPostsMenu";

export default function Home({ searchParams }) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.content}>
        <RecentPosts page={page}/>
      </div>
    </div>
  );
}
