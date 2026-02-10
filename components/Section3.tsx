"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface DestinationCard {
  id: number;
  slug: string;
  title: string;
  location: string;
  image: string;
}

const Section3 = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const destinations: DestinationCard[] = [
    {
      id: 1,
      slug: "panja-sahib",
      title: "Panja Sahib",
      location: "Hassan Abdal",
      image: "/1.jpeg",
    },
    {
      id: 2,
      slug: "kartarpur-sahib",
      title: "Kartarpur Sahib",
      location: "Narowal",
      image: "/2.jpeg",
    },
    {
      id: 3,
      slug: "babe-di-beri",
      title: "Babe di Beri",
      location: "Sialkot",
      image: "/3.jpeg",
    },
    {
      id: 4,
      slug: "janam-asthan",
      title: "Janam Asthan",
      location: "Nankana Sahib",
      image: "/4.jpeg",
    },
    {
      id: 5,
      slug: "dehra-sahib",
      title: "Dehra Sahib",
      location: "Lahore",
      image: "/5.jpeg",
    },
    {
      id: 6,
      slug: "rori-sahib",
      title: "Rori Sahib",
      location: "Emanabad",
      image: "/6.jpeg",
    },
  ];

  const hoveredCard = destinations.find((d) => d.id === hoveredId) || null;
  const hoveredIndex = hoveredId
    ? destinations.findIndex((d) => d.id === hoveredId)
    : -1;
  const expandFromLeft =
    hoveredIndex >= 0 && hoveredIndex < 4; // top row: animate left → right, bottom row: right → left

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden transition-colors duration-700">
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-zinc-900">Discover Your Next Dream </span>
            <span className="font-serif italic text-zinc-600">Destination</span>
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-zinc-600 text-lg mb-12 lg:mb-16"
        >
          Here are some of the most visited destinations by tourists in 2024.
        </motion.p>

        <div
          className="relative"
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Base grid: stays fixed; cards never move rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {destinations.map((destination, index) => {
              const isHovered = hoveredId === destination.id;
              const isDimmed = hoveredId !== null && !isHovered;
              const isBottomRow = index >= 4;

              return (
                <Link
                  key={destination.id}
                  href={`/destinations?dest=${destination.slug}`}
                  className={`block ${
                    isBottomRow ? "lg:col-span-2 sm:col-span-2 col-span-1" : "col-span-1"
                  }`}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      opacity: isDimmed ? 0.25 : 1,
                    }}
                    transition={{
                      layout: { duration: 0.4, ease: "easeInOut" },
                      opacity: { duration: 0.25 },
                    }}
                    className="group relative h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                    onMouseEnter={() => {
                      if (hoveredId === null) {
                        setHoveredId(destination.id);
                      }
                    }}
                  >
                    {/* Card image */}
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

                    {/* Card content */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                      <div className="flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="text-white">
                          <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
                            {destination.title}
                          </h3>
                          <p className="text-white/70 text-sm sm:text-base font-medium flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {destination.location}
                          </p>
                        </div>

                        <div className="!w-12 !h-12 sm:!w-14 sm:!h-14 flex items-center justify-center !bg-white/10 !backdrop-blur-md !border !border-white/20 !rounded-full !shadow-2xl transition-all duration-500 shrink-0">
                          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Full-width hover overlay */}
          <AnimatePresence>
            {hoveredCard && (
              <motion.div
                key={hoveredCard.id}
                initial={{ opacity: 0, scaleX: 0, scaleY: 0.98 }}
                animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleX: 0.9, scaleY: 0.98 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  transformOrigin: expandFromLeft
                    ? "left center"
                    : "right center",
                }}
                className="pointer-events-none absolute inset-0 z-20"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  {/* Continuously zooming background image while hovered */}
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    exit={{ scale: 1 }}
                    transition={{
                      duration: 8,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={hoveredCard.image}
                      alt={hoveredCard.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </motion.div>

                  {/* Overlay content */}
                  <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                    <div className="flex items-end justify-between gap-4">
                      <div className="text-white">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
                          {hoveredCard.title}
                        </h3>
                        <p className="text-white/80 text-base sm:text-lg font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {hoveredCard.location}
                        </p>
                      </div>

                      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-2xl">
                        <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Section3;
