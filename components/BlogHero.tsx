"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tag, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogHeroProps {
  title: string;
  imageUrl: string;
  category: string;
  date?: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({
  title,
  imageUrl,
  category,
  date,
}) => {
  return (
    <section className="relative px-4 py-4 md:px-6 md:py-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-[1800px] mx-auto h-[60vh] md:h-[70vh] min-h-[500px] relative">
        <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>

          

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
                <Tag className="w-3 h-3" />
                {category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 max-w-4xl font-serif leading-tight"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 text-white/80 text-sm font-medium"
            >
              <Calendar className="w-4 h-4" />
              {date
                ? new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Recently Published"}
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
