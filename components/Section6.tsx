"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface GalleryImage {
  src: string;
  aspect: string;
}

const Section6 = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images with varied aspect ratios to create the masonry effect
  const galleryImages: GalleryImage[] = [
    { src: "/heroimage.jpg", aspect: "aspect-[3/4]" },
    { src: "/heroimage.jpg", aspect: "aspect-[4/5]" },
    { src: "/heroimage.jpg", aspect: "aspect-[3/2]" },
    { src: "/heroimage.jpg", aspect: "aspect-[2/3]" },
    { src: "/heroimage.jpg", aspect: "aspect-square" },
    { src: "/heroimage.jpg", aspect: "aspect-[3/4]" },
    { src: "/heroimage.jpg", aspect: "aspect-[4/5]" },
    { src: "/heroimage.jpg", aspect: "aspect-[2/3]" },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-black">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white"
          >
            Explore Our Photo{" "}
            <span className="font-serif italic text-zinc-500">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg md:text-xl font-medium"
          >
            Every photo we take captures beauty, culture, adventure and
            experience.
          </motion.p>
        </div>

        {/* Gallery Grid - Masonry style using columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(img.src)}
              className={`relative group break-inside-avoid rounded-[2rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500`}
            >
              <div className={img.aspect}>
                <Image
                  src={img.src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Maximize2 className="w-6 h-6 text-black" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300 z-[110]"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-10 h-10" />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 20 }}
                className="relative w-full h-full max-w-6xl max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Full view"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Section6;
