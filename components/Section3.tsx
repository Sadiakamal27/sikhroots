"use client";

import React from "react";
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
  // Destination data - current 5 items as per your edit
  const destinations: DestinationCard[] = [
    {
      id: 1,
      title: "Panja Sahib",
      location: "Hassan Abdal",
      image: "/heroimage.jpg",
    },
    {
      id: 2,
      title: "Kartarpur Sahib",
      location: "Narowal",
      image: "/heroimage.jpg",
    },
    {
      id: 3,
      title: "Babe di Beri",
      location: "Sialkot",
      image: "/heroimage.jpg",
    },
    {
      id: 4,
      title: "Janam Asthan",
      location: "Nankana Sahib",
      image: "/heroimage.jpg",
    },
    {
      id: 5,
      title: "Dehra Sahib",
      location: "Lahore",
      image: "/heroimage.jpg",
    },
    {
      id: 7,
      title: "Rori Sahib",
      location: "Emanabad",
      image: "/heroimage.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-zinc-900 dark:text-white">
              Discover Your Next Dream{" "}
            </span>
            <span className="font-serif italic text-zinc-600 dark:text-zinc-400">
              Destination
            </span>
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-zinc-600 dark:text-zinc-400 text-lg mb-16"
        >
          Here are some of the most visited destinations by tourists in 2024.
        </motion.p>

        {/* Dynamic Collage Layout */}
        <div className="flex flex-wrap gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ flex: "1 1 300px" }} // Flex-grow: 1, Flex-shrink: 1, Basis: 300px
              className="group relative h-[400px] min-w-[300px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Content Panel */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2 tracking-tight">
                      {destination.title}
                    </h3>
                    <p className="text-white/70 text-base font-medium">
                      {destination.location}
                    </p>
                  </div>

                  {/* Round Button with Zoom Out Effect */}
                  <motion.button
                    whileHover={{ scale: 0.9, rotate: -45 }}
                    whileTap={{ scale: 0.85 }}
                    className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:bg-white"
                    aria-label={`View ${destination.title}`}
                  >
                    <ArrowRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
