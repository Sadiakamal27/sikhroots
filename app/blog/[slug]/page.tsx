import { client } from "@/lib/contentful";
import { BlogPostEntry } from "@/lib/contentful-types";
import { RichText } from "@/components/RichText";
import { notFound } from "next/navigation";
import Link from "next/link";

import BlogHero from "@/components/BlogHero";

import CommentForm from "@/components/CommentForm";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (!client) {
    console.error("Contentful client not initialized");
    notFound();
  }

  const response = await client.getEntries<BlogPostEntry>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  } as any);

  const post = response.items[0];

  if (!post) {
    notFound();
  }

  const { title, content, coverImage, category, date } = post.fields;
  const imageUrl = (coverImage as any)?.fields?.file?.url
    ? `https:${(coverImage as any).fields.file.url}`
    : "/heroimage.jpg";

  return (
    <article className="min-h-screen bg-white dark:bg-black">
      <BlogHero
        title={title}
        imageUrl={imageUrl}
        category={category}
        date={date}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-zinc dark:prose-invert mb-16">
          <RichText content={content} />
        </div>

        {/* Tags and Share Section */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-sm uppercase tracking-widest font-bold">
              Tags :
            </span>
            <span className="px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium">
              {category}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-sm uppercase tracking-widest font-bold">
              Share This :
            </span>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, color: "bg-zinc-900 text-white" },
                {
                  Icon: Twitter,
                  color:
                    "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-400",
                },
                {
                  Icon: Instagram,
                  color:
                    "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-400",
                },
                {
                  Icon: Youtube,
                  color:
                    "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-400",
                },
              ].map(({ Icon, color }, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <div className="max-w-3xl mx-auto">
          <CommentForm />
        </div>
      </div>
    </article>
  );
}
