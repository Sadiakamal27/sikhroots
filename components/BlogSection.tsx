import React from "react";
import { client } from "@/lib/contentful";
import { BlogPostEntry } from "@/lib/contentful-types";
import BlogList from "./BlogList";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BlogSection = async ({ limit }: { limit?: number }) => {
  let blogs: {
    id: string;
    category: string;
    title: string;
    image: string;
    slug: string;
  }[] = [];

  let totalPosts = 0;

  try {
    if (client) {
      const response = await client.getEntries<BlogPostEntry>({
        content_type: "blogPost",
        order: ["-sys.createdAt"],
        limit: limit,
      });

      totalPosts = response.total;

      blogs = response.items.map((item) => ({
        id: item.sys.id,
        category: item.fields.category || "Uncategorized",
        title: item.fields.title,
        image: (item.fields.coverImage as any)?.fields?.file?.url
          ? `https:${(item.fields.coverImage as any).fields.file.url}`
          : "/heroimage.jpg",
        slug: item.fields.slug,
      }));
    }
  } catch (error) {
    console.error("Error fetching blogs from Contentful:", error);
  }

  return (
    <section className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-8xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white">
            Read Our Latest Blog &{" "}
            <span className="font-serif italic text-zinc-500">Articles</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg">
            Following is a detailed blog article on our Tours and travel topics
          </p>
        </div>

        {blogs.length > 0 ? (
          <>
            <BlogList blogs={blogs} />

            {limit && totalPosts > limit && (
              <div className="mt-16 flex justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full text-lg font-bold hover:bg-primary hover:text-white transition-all shadow-xl shadow-zinc-200 dark:shadow-none"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl">
            <p className="text-zinc-500">
              {!client
                ? "Contentful is not configured. Please check your .env.local file."
                : "No blog posts found. Start by creating content in your Contentful dashboard."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
