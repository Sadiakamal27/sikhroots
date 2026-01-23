"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const Section5 = () => {
  const reviews = [
    {
      text: "Our pilgrimage to Nankana Sahib was deeply moving and organized. Every detail, from visa support to travel, was handled with care. The spiritual atmosphere was truly unforgettable.",
      author: "Gurpreet Singh",
      location: "India",
    },
    {
      text: "This yatra was ideal for our family. The itinerary covered all the major gurdwaras with knowledgeable guides. We felt safe and supported throughout, making it a truly peaceful pilgrimage.",
      author: "Jasleen Kaur",
      location: "Canada",
    },
    {
      text: "Arranging my visa and travel as an international Sikh pilgrim was daunting, but the team made it seamless. Their support allowed me to focus fully on my spiritual journey without any worries.",
      author: "Amarjeet Singh",
      location: "UK",
    },
    {
      text: "The Nankana Sahib yatra package was inspiring. Accommodations, transport, and daily rituals were perfectly arranged, ensuring a meaningful and memorable pilgrimage experience.",
      author: "Harpreet Kaur",
      location: "Australia",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white dark:bg-black">
      <div className="max-w-8xl mx-auto space-y-0">
        {/* PARALLAX CTA PART */}
        <div className="relative h-[500px] md:h-[600px] rounded-t-[3rem] overflow-hidden flex items-center justify-center text-center px-6 shadow-xl bg-zinc-800">
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/heroimage.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Content */}
          <div className="relative z-20 max-w-4xl space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
            >
              Take A Spiritual Journey To Our Featured <br />
              <span className="font-serif italic text-white/90">
                Destinations,
              </span>{" "}
              Contact Us Today!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              We're committed to offering you an unforgettable yatra experience.
              Reach out now to discover special promotions and personalized
              packages crafted just for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="!bg-white !text-black !rounded-full !shadow-2xl hover:!bg-zinc-100 mx-auto"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* REVIEWS PART */}
        <div className="bg-zinc-900 rounded-b-[3rem] py-20 px-6 md:px-12 border-t border-zinc-800">
          <div className="text-center mb-16 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              Amazing Reviews From Our{" "}
              <span className="font-serif italic text-zinc-400">Yatris</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto"
            >
              Read heartfelt experiences and stories from Sikh pilgrims who
              traveled with us on their sacred journeys.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  hover={false}
                  className="!bg-zinc-800/50 !border-zinc-700 !rounded-3xl h-full hover:!bg-zinc-800 transition-colors"
                >
                  <CardContent className="!p-6 space-y-6 flex flex-col justify-between h-full">
                    <p className="text-zinc-300 text-sm leading-relaxed italic">
                      "{review.text}"
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-white text-white"
                          />
                        ))}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {review.author}
                        </h4>
                        <p className="text-zinc-500 text-sm">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
