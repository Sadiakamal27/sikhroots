"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Target,
  Users,
  Shield,
  Compass,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button, Card } from "@/components/ui";
import PageHero from "@/components/PageHero";

const AboutPage = () => {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  // Team members data
  const teamMembers = [
    {
      name: "Rajinder Singh",
      role: "Founder & CEO",
      image: "/team/Dawinder_Singh.jpg",
      bio: "With over 20 years of experience in spiritual tourism, Rajinder leads our mission to provide transformative pilgrimage experiences.",
    },
    {
      name: "Amrit Kaur",
      role: "Operations Director",
      image: "/team/mslide1-small.jpg",
      bio: "Amrit ensures every journey is seamless, coordinating logistics and guest services with dedication and care.",
    },
    {
      name: "Harpreet Singh",
      role: "Tour Guide & Historian",
      image: "/team/mslide2-small.jpg",
      bio: "A passionate storyteller and historian, Harpreet brings the rich heritage of Sikh sites to life for our guests.",
    },
    {
      name: "Simran Kaur",
      role: "Guest Relations Manager",
      image: "/team/mslide3-small.jpg",
      bio: "Simran's warm hospitality and attention to detail ensure every guest feels welcomed and cared for.",
    },
    {
      name: "Simran Kaur",
      role: "Guest Relations Manager",
      image: "/team/mslide4-small.jpg",
      bio: "Simran's warm hospitality and attention to detail ensure every guest feels welcomed and cared for.",
    },
    {
      name: "Simran Kaur",
      role: "Guest Relations Manager",
      image: "/team/mslide5-small.jpg",
      bio: "Simran's warm hospitality and attention to detail ensure every guest feels welcomed and cared for.",
    },
    {
      name: "Simran Kaur",
      role: "Guest Relations Manager",
      image: "/team/mslide6-small.jpg",
      bio: "Simran's warm hospitality and attention to detail ensure every guest feels welcomed and cared for.",
    },
    {
      name: "Simran Kaur",
      role: "Guest Relations Manager",
      image: "/team/mslide7-small.jpg",
      bio: "Simran's warm hospitality and attention to detail ensure every guest feels welcomed and cared for.",
    },
  ];

  // The Matha Tayk Approach values
  const values = [
    {
      icon: Heart,
      title: "Faith-Focused Travel",
      description:
        "Every tour is thoughtfully designed to honour sacred spaces and deepen spiritual understanding.",
    },
    {
      icon: Users,
      title: "Community & Connection",
      description:
        "We foster heartfelt bonds among yatrees and with the communities we visit.",
    },
    {
      icon: Compass,
      title: "Meaning Over Mileage",
      description:
        "We prioritize depth of experience over ticking off destinations.",
    },
    {
      icon: Shield,
      title: "Inclusive & Respectful",
      description:
        "While rooted in Sikh values, we welcome all faiths with openness and humility.",
    },
    {
      icon: Target,
      title: "Responsible & Ethical",
      description:
        "We support local communities and promote mindful, respectful tourism.",
    },
  ];

  const nextTeamMember = () => {
    setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeamMember = () => {
    setCurrentTeamMember((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1,
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="About Us"
        backgroundImage="/about1bg.jpg"
        backgroundAlt="About Us"
        breadcrumbLabel="About Us"
      />

      {/* About Us Description Section */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-8 leading-tight">
                Turning Travel Dreams into <br />
                <span className="italic text-zinc-500">
                  Seamless Experiences
                </span>
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Matha Tayk Tours was conceived in 2018 by two friends, a
                businessman with hotel & tourism background and a banker, who
                visualized an opportunity to facilitate tours for their Sikh
                friends in Pakistan to visit their holy sites. Sharing that
                vision with their Sikh friends and their community, the response
                was welcoming.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Navigating the modalities and nuances took some time and then
                COVID happened and the idea was shelved.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/aboutbg.avif"
                alt="Our Journey"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-50 p-10 md:p-16 rounded-[3rem] mb-24"
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 font-serif">
              Connecting the Dots
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              The idea was revitalized in 2025 with the addition of couple more
              like minded individuals from corporate sector with strategies,
              marketing & project management background. With prior learnings
              and strategic vision, the dots are connected and it is close to
              realization.
            </p>
            <p className="text-zinc-900 text-xl font-medium italic border-l-4 border-zinc-900 pl-6 py-2">
              Our goal is to bridge this gap, celebrate shared values and
              promote brotherhood through these journeys that would ingrain
              lasting memories and promote interfaith harmony.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 text-zinc-600 text-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-zinc-900 mb-4">
                Values & Commitment
              </h4>
              <p>
                We respect the sanctity of all religious sites and encourage
                travelers to approach every culture with mindfulness. In
                partnership with local communities, we support ethical tourism
                and charitable initiatives to ensure our presence is always
                positive and respectful.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold text-zinc-900 mb-4">
                Our Journey Together
              </h4>
              <p>
                With the commitment to advancing interfaith harmony and bridging
                shared values & harmony, we are embarking on this journey
                together in the last quarter of this year.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-24 px-6 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Upholding Unity
            </h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              At Matha Tayk Tours, we design meaningful pilgrimages that honor
              diverse faiths and foster deep human connection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                hover={false}
                className="h-full !rounded-[2.5rem] p-10 !bg-white/5 !border-white/10 !text-white shadow-none"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-serif mb-6 underline decoration-white/20 underline-offset-8">
                  Our Mission
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  We are committed to advancing interfaith harmony—especially
                  within the global Sikh community through transformative
                  pilgrimage experiences. Our goal is to bridge divides by
                  celebrating shared spiritual values and promoting peace and
                  understanding.
                </p>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                hover={false}
                className="h-full !rounded-[2.5rem] p-10 !bg-white/5 !border-white/10 !text-white shadow-none"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-serif mb-6 underline decoration-white/20 underline-offset-8">
                  Our Vision
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  To create journeys that transcend borders—cultural, spiritual,
                  and geographical—building lasting harmony and mutual respect
                  long after the trip ends. We envision a future where
                  respectful travel reveals shared dignity within all people.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6">
              The Matha Tayk Approach
            </h2>
            <p className="text-zinc-500 text-xl max-w-2xl leading-relaxed">
              Our pilgrimages are not just journeys—they are spiritual
              experiences rooted in reflection, respect, and connection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    hover={true}
                    className="h-full !rounded-[2.5rem] p-8 border-zinc-100 bg-zinc-50/50 hover:bg-white transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4 font-serif">
                      {value.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed text-base">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team Section - Slider */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Dedicated professionals committed to making your pilgrimage
              unforgettable
            </p>
          </motion.div>

          {/* Team Slider */}
          <div className="relative">
            <motion.div
              key={currentTeamMember}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card hover={false} className="!rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-[400px_1fr] gap-0">
                  {/* Team Member Image */}
                  <div className="relative h-[400px] md:h-[500px]">
                    <Image
                      src={teamMembers[currentTeamMember].image}
                      alt={teamMembers[currentTeamMember].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Team Member Info */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-2">
                        {teamMembers[currentTeamMember].name}
                      </h3>
                      <p className="text-xl text-zinc-600 font-medium">
                        {teamMembers[currentTeamMember].role}
                      </p>
                    </div>
                    <p className="text-zinc-600 leading-relaxed text-lg mb-8">
                      {teamMembers[currentTeamMember].bio}
                    </p>

                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevTeamMember}
                        className="!w-12 !h-12 !p-0 !rounded-full !border-2"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>

                      {/* Dots Indicator */}
                      <div className="flex items-center gap-2">
                        {teamMembers.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTeamMember(index)}
                            className={`h-2 rounded-full transition-all ${
                              index === currentTeamMember
                                ? "w-8 bg-zinc-900"
                                : "w-2 bg-zinc-300 hover:bg-zinc-400"
                            }`}
                            aria-label={`Go to team member ${index + 1}`}
                          />
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextTeamMember}
                        className="!w-12 !h-12 !p-0 !rounded-full !border-2"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card
              hover={false}
              className="!rounded-3xl p-8 md:p-12 bg-zinc-900 text-white"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-white/80 text-lg">
                  Contact us today to book your spiritual pilgrimage or schedule
                  a free consultation
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {/* Phone */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6" />
                  </div>
                  <p className="text-white/60 text-sm mb-1">Call Us</p>
                  <a
                    href="tel:+18332073324"
                    className="text-white font-medium hover:text-white/80 transition-colors"
                  >
                    +1 833 207 3324
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6" />
                  </div>
                  <p className="text-white/60 text-sm mb-1">Email Us</p>
                  <a
                    href="mailto:contact@mttours.travel"
                    className="text-white font-medium hover:text-white/80 transition-colors"
                  >
                    contact@mttours.travel
                  </a>
                </div>

                {/* Address */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-white/60 text-sm mb-1">Visit Us</p>
                  <p className="text-white font-medium">
                    9192 Red Branch Road
                    <br />
                    Suite 300, Columbia MD 21045
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="!bg-white !text-zinc-900 hover:!bg-white/90 !rounded-full"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/packages">
                <Button
                  variant="outline"
                  size="lg"
                  className="!border-white !text-white hover:!bg-white/10 !rounded-full"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
