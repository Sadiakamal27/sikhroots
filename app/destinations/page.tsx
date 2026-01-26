"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Section3 from "@/components/Section3";

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching Contact Page Design */}
      <section className="relative h-[450px] md:h-[500px] px-4 py-4 md:px-6 md:py-6">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/heroimage.jpg"
              alt="Destinations"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center pt-10">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-white/80 text-sm mb-4"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-4" />
              <span className="text-white">Destinations</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-medium"
            >
              Destinations
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Destinations Content (Section 3) */}
      <div className="relative z-20">
        <Section3 />
      </div>
    </div>
  );
};

export default DestinationsPage;
