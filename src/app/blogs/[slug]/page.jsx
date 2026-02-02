import React from "react";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import Image from "next/image";
import RelatedBlogs from "@/components/RelatedBlogs";

async function getDocFromParams(slug) {
  const doc = allBlogs.find((doc) => doc.slug === slug);

  if (!doc) {
    notFound();
  }

  return doc;
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const doc = await getDocFromParams(slug);
  return {
    title: doc.title,
    description: doc.summary,
  };
}

const page = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 py-12 text-black">
        <div className="md:h-72 md:w-full h-[180px] w-full relative mb-5">
          <Image src={doc.images.cover} fill className="object-cover" />
        </div>
        <Mdx code={doc.body.code} />
      </div>
      <RelatedBlogs currentBlogTags={doc.tags} currentBlogId={doc._id} />
    </div>
  );
};

export default page;
