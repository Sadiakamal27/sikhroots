"use client";

import React from "react";
import { Button } from "@/components/ui";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen px-4 py-4 md:px-6 md:py-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-[1800px] mx-auto h-[calc(100vh-3rem)] md:h-[calc(100vh-3rem)] min-h-[700px] relative">
        {/* Main Rounded Image Container */}
        <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-20">
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium shadow-lg">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Experience the Sacred Journey
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 max-w-5xl font-serif leading-tight"
            >
              Experiencing The Bliss on the Land of{" "}
              <span className="text-primary">Guru Nanak</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl"
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
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <Button
                variant="primary"
                size="lg"
                className="!bg-primary !border-2 !border-white !shadow-2xl hover:!shadow-primary/50 !rounded-full"
              >
                Book Your Yatra
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="primary"
                size="lg"
                className="!bg-black !border-2 !border-white !shadow-2xl hover:!shadow-black/50 !rounded-full"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 flex flex-wrap gap-8 items-center justify-center text-white/80"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-2xl">✓</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">500+</p>
                  <p className="text-sm">Happy Pilgrims</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-2xl">★</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">4.9/5</p>
                  <p className="text-sm">Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-2xl">🕉</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">15+</p>
                  <p className="text-sm">Sacred Sites</p>
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
