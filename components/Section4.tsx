"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserCheck, Banknote, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const Section4 = () => {
  const features = [
    {
      title: "Expert Guidance",
      description:
        "Our knowledgeable team specializes in Sikh yatra logistics, ensuring every detail from visa to travel arrangements is handled with care.",
      icon: UserCheck,
    },
    {
      title: "Best Price Guarantee",
      description:
        "We provide authentic, value-packed pilgrimage packages that respect your budget without compromising on comfort or services.",
      icon: Banknote,
    },
    {
      title: "Visa Processing",
      description:
        "We provide complete Visa Processing services to ensure a comfortable tour",
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/d22.jpg"
                alt="Gallery 1"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/d11.jpeg"
                alt="Gallery 2"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-80 col-span-2 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/d33.jpg"
                alt="Gallery 3"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Content and Cards */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Why Choose{" "}
                <span className="font-serif italic text-zinc-600 dark:text-zinc-400">
                  Us?
                </span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-xl">
                We pride ourselves on delivering heartfelt and hassle-free
                pilgrimage experiences that go beyond simple bookings. Here's
                why Sikh yatris trust us to guide their spiritual journeys:
              </p>
            </motion.div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card
                      hover={false}
                      className="!bg-zinc-50 dark:!bg-zinc-900/50 !p-0 !rounded-[2rem] !border-zinc-100 dark:!border-zinc-800 !shadow-lg hover:!shadow-none transition-all duration-300"
                    >
                      <CardContent className="!p-6 md:!p-8 flex items-start gap-6">
                        <div className="w-14 h-14 shrink-0 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-inner">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
