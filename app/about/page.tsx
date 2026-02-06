"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
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

  // Our approach values
  const values = [
    {
      icon: Heart,
      title: "Spiritual Focus",
      description:
        "Every journey is designed to deepen your spiritual connection and understanding.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety and security are our top priorities with comprehensive protocols.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We foster a sense of community and shared experience among all travelers.",
    },
    {
      icon: Compass,
      title: "Expert Guidance",
      description:
        "Our knowledgeable guides provide deep insights into history and culture.",
    },
    {
      icon: Star,
      title: "Quality Service",
      description:
        "Premium accommodations, transportation, and services throughout your journey.",
    },
    {
      icon: Target,
      title: "Personalized Care",
      description:
        "Tailored experiences that meet your specific needs and preferences.",
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
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[500px] px-4 py-4 md:px-6 md:py-6">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/heroimage.jpg"
              alt="About Us"
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
              <ChevronRight className="w-4 h-4 -ml-2" />
              <span className="text-white">About Us</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-medium"
            >
              About Us
            </motion.h1>
          </div>
        </div>
      </section>

      {/* About Us Description Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6">
              Welcome to{" "}
              <span className="font-serif italic text-zinc-600">
                MT Tours & Travel
              </span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                For over two decades, we have been dedicated to creating
                meaningful spiritual journeys that connect pilgrims with the
                sacred heritage of Sikhism. Our passion lies in providing
                transformative experiences that honor tradition while ensuring
                comfort, safety, and authenticity.
              </p>
              <p>
                Based in Columbia, Maryland, we specialize in organizing
                pilgrimage tours to the most revered Sikh sites across Pakistan
                and India. Each journey is carefully crafted to provide not just
                a tour, but a profound spiritual experience that stays with you
                forever.
              </p>
              <p>
                Our team of experienced guides, coordinators, and support staff
                work tirelessly to ensure every aspect of your pilgrimage
                exceeds expectations. From the moment you inquire to the day you
                return home, we are committed to your spiritual journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover={false} className="h-full !rounded-3xl p-8">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-serif text-zinc-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  To provide authentic, spiritually enriching pilgrimage
                  experiences that honor Sikh heritage and traditions. We strive
                  to make sacred sites accessible to all seekers, ensuring every
                  journey is safe, comfortable, and transformative. Our mission
                  is to be the bridge between devotees and the divine legacy of
                  Guru Nanak Dev Ji and the Sikh Gurus.
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
              <Card hover={false} className="h-full !rounded-3xl p-8">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-6">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-serif text-zinc-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  To become the world's most trusted and respected provider of
                  Sikh pilgrimage tours, known for our unwavering commitment to
                  spiritual authenticity, exceptional service, and cultural
                  preservation. We envision a future where every Sikh and
                  spiritual seeker has the opportunity to walk in the footsteps
                  of the Gurus and experience the profound peace of sacred
                  sites.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4">
              Our Approach
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              The values and principles that guide every journey we create
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
                    className="h-full !rounded-3xl p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-zinc-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
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
                <Button
                  variant="outline"
                  size="lg"
                  className="!border-white !text-white hover:!bg-white/10 !rounded-full"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
