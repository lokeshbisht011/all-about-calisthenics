
import Hero from "@/components/Hero";
import RecentPostsMenu from "@/components/RecentPostsMenu";

export default function Home({ searchParams }) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="">
      <Hero />
      <div className="flex bg-gray-900 text-white">
        <RecentPostsMenu page={page}/>
      </div>
    </div>
  );
}
