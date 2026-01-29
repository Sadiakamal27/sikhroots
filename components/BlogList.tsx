"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";

interface Blog {
  id: string;
  category: string;
  title: string;
  image: string;
  slug: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card
            hover={false}
            className="group !rounded-3xl !p-0 !shadow-sm hover:!shadow-xl transition-all duration-500"
          >
            <CardContent className="!p-4 md:!p-6">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                {/* Blog Image */}
                <div className="relative w-full md:w-52 lg:w-64 h-52 md:h-44 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Blog Info */}
                <div className="flex flex-col flex-1">
                  <span className="text-zinc-400 text-sm font-medium mb-3">
                    {blog.category}
                  </span>
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-6 group-hover:text-primary transition-colors line-clamp-2 md:line-clamp-none">
                      {blog.title}
                    </h3>
                  </Link>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogList;
