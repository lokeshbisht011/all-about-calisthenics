import Image from "next/image";
import Link from "next/link";

const BlogList = ({ posts }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="flex flex-col p-4 border rounded-md shadow-md w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)]"
        >
          <Link
            href={`/blogs/${post.slug}`}
            className="h-full flex flex-col justify-between"
          >
            <h2 className="text-2xl font-semibold line-clamp-2">{post.title}</h2>
            <div className="md:h-72 md:w-full h-[200px] w-full relative my-4">
              <Image
                src={post.images.cover}
                fill
                alt={post.title}
                className="object-cover"
              />
            </div>
            <p className="text-xl line-clamp-2">{post.summary}</p>
          </Link>
          <div className="flex gap-1 flex-wrap mt-4">
            {post.tags?.map((tag) => {
              const formattedTag = tag.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link href={`/blogs?category=${formattedTag}`} key={tag}>
                  <span
                    className={`px-2 py-1 rounded-lg text-xs text-white uppercase ${formattedTag} default`}
                  >
                    {tag}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
