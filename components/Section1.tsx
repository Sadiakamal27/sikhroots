"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, inView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return count;
};

const Section1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Counter values
  const experienceCount = useCounter(10, 2000, isInView);
  const sitesCount = useCounter(30, 2000, isInView);
  const serviceCount = useCounter(8, 2000, isInView);

  return (
    <section ref={ref} className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-zinc-900 dark:text-white">
                  Welcome To
                </span>
                <br />
                <span className="font-serif italic text-zinc-600 dark:text-zinc-400">
                  JT International Tourism
                </span>
                <br />
                <span className="text-zinc-900 dark:text-white">
                  I'm Jatinder Singh
                </span>
              </h2>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/heroimage.jpg"
                alt="Jatinder Singh"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Two Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/heroimage.jpg"
                  alt="Sacred Site"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/heroimage.jpg"
                  alt="Pilgrimage Group"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed"
            >
              At Sikh Pakistani Yatra, our foundation is rooted in devotion,
              cultural heritage, and a deep respect for Sikh history. We are
              dedicated to offering seamless pilgrimage experiences for Sikh
              yatris visiting the sacred shrines of Pakistan. From expertly
              managed yatra packages to comprehensive visa support, we ensure
              every step of your spiritual journey is smooth and meaningful. Our
              team blends faith and professionalism to create unforgettable
              spiritual experiences for every yatri.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="!bg-black dark:!bg-white !text-white dark:!text-black !rounded-full !border-2 !border-black dark:!border-white hover:!bg-white hover:!text-black dark:hover:!bg-black dark:hover:!text-white"
              >
                Discover More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Counter Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {/* Experience Counter */}
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                  {experienceCount} K+
                </div>
                <div className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                  Years of Experience
                </div>
              </div>

              {/* Sites Counter */}
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                  {sitesCount} +
                </div>
                <div className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                  Sacred Sites Covered
                </div>
              </div>

              {/* Service Counter */}
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                  {serviceCount} +
                </div>
                <div className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2">
                  Years Of Service
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
