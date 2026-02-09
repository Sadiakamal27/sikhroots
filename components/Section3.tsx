"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface DestinationCard {
  id: number;
  title: string;
  location: string;
  image: string;
}

const Section3 = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isHovering = hoveredId !== null;

  // Destination data — 4 on top row, 2 on bottom row (6 total)
  const destinations: DestinationCard[] = [
    {
      id: 1,
      title: "Panja Sahib",
      location: "Hassan Abdal",
      image: "/1.jpeg",
    },
    {
      id: 2,
      title: "Kartarpur Sahib",
      location: "Narowal",
      image: "/2.jpeg",
    },
    {
      id: 3,
      title: "Babe di Beri",
      location: "Sialkot",
      image: "/3.jpeg",
    },
    {
      id: 4,
      title: "Janam Asthan",
      location: "Nankana Sahib",
      image: "/4.jpeg",
    },
    {
      id: 5,
      title: "Dehra Sahib",
      location: "Lahore",
      image: "/5.jpeg",
    },
    {
      id: 6,
      title: "Rori Sahib",
      location: "Emanabad",
      image: "/6.jpeg",
    },
  ];

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

        {/* Grid: 4 on top, 2 below — responsive: 1 col → 2 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {destinations.map((destination, index) => {
            const isExpanded = hoveredId === destination.id;
            const isBottomRow = index >= 4; // 5th and 6th card: second row
            return (
              <motion.div
                key={destination.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5, delay: index * 0.05 },
                }}
                className={`group relative h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl cursor-pointer
                  ${isExpanded ? "z-20" : ""}
                  ${isExpanded ? "col-span-1 sm:col-span-2 lg:col-span-4" : ""}
                  ${!isExpanded && isBottomRow ? "lg:col-span-2" : ""}
                `}
                onMouseEnter={() => setHoveredId(destination.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image - when any card hovered, same image on all */}
                <div className="absolute inset-0">
                  <Image
                    src={isHovering ? destinations.find((d) => d.id === hoveredId)!.image : destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Content Panel */}
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

                    <div className="!w-12 !h-12 sm:!w-14 sm:!h-14 flex items-center justify-center !bg-white/10 !backdrop-blur-md !border !border-white/20 !rounded-full !shadow-2xl group-hover:!bg-white group-hover:scale-110 transition-all duration-500 shrink-0">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section3;
