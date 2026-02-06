"use client";

import React from "react";
import { Button } from "@/components/ui";
import { ArrowRight,  Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] px-2 py-2 md:px-6 md:py-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-[1800px] mx-auto min-h-[calc(100svh-1rem)] md:h-[calc(100vh-3rem)] md:min-h-[700px] relative">
        {/* Main Rounded Image Container */}
        <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/heroimage.jpg"
              alt="Sikh Pilgrimage"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col items-center justify-start md:justify-center px-4 md:px-6 text-center pt-32 pb-12 md:py-20">
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] sm:text-xs md:text-sm font-medium shadow-lg">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Experience the Sacred Journey
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 max-w-5xl font-serif leading-tight px-2"
            >
              Experiencing The Bliss on the Land of{" "}
              <span className="text-primary">Guru Nanak</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl px-4"
            >
              Embark on a spiritual pilgrimage to the sacred Gurdwaras of
              Pakistan. Let us guide you through history, heritage, and
              devotion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-center w-full px-8 sm:px-0 sm:w-auto"
            >
              <Link href="/packages">
                  
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto !bg-primary !border-2 !border-white !shadow-2xl hover:!shadow-primary/50 !rounded-full text-xs sm:text-sm md:text-base py-6 sm:py-3"
              >
                Book Your Yatra
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
 
  <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto !bg-black !border-2 !border-white !shadow-2xl hover:!shadow-black/50 !rounded-full text-xs sm:text-sm md:text-base py-6 sm:py-3"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Contact Us
              </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 md:mt-16 flex flex-wrap gap-6 md:gap-8 items-center justify-center text-white/80"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-xl md:text-2xl">✓</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-sm md:text-base">
                    500+
                  </p>
                  <p className="text-[10px] md:text-sm">Happy Pilgrims</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-xl md:text-2xl">★</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-sm md:text-base">
                    4.9/5
                  </p>
                  <p className="text-[10px] md:text-sm">Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-xl md:text-2xl">🕉</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white text-sm md:text-base">
                    15+
                  </p>
                  <p className="text-[10px] md:text-sm">Sacred Sites</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
