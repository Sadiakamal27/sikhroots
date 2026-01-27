"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  MapPin,
  Star,
} from "lucide-react";
import {
  Button,
  Input,
  Textarea,
  Card,
  Form,
  Field,
  Select,
  SelectItem,
} from "@/components/ui";

const PackagesPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "",
    departureDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "package-booking",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your booking inquiry has been submitted successfully.",
        });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          travelers: "",
          departureDate: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to submit inquiry. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "/heroimage.jpg", // Replace with actual image paths
    "/heroimage.jpg",
    "/heroimage.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    );
  };

  const gurdwaras = [
    {
      name: "Gurdwara Janam Asthan (Nankana Sahib)",
      description: "the birthplace of Guru Nanak Dev Ji",
    },
    {
      name: "Gurdwara Kartarpur Sahib",
      description: "where Guru Nanak spent his final years",
    },
    {
      name: "Gurdwara Panja Sahib",
      description: "home to the divine handprint of Guru Nanak",
    },
  ];

  const otherSites = ["Rohri Sahib", "Sacha Sauda", "Dera Sahib Lahore"];

  const greatForTags = [
    "Spiritual Pilgrimage",
    "Cultural Tours",
    "Heritage Tours",
    "Historic Sikh Sites",
  ];

  const highlights = [
    "Visit to historical Gurdwaras including Nankana Sahib, Kartarpur Sahib, and Panja Sahib",
    "Daily spiritual experiences with Kirtan and Darshan",
    "Comfortable luxury coach travel and 4-star accommodations",
    "Vegetarian meals, bottled water, laundry, and medical assistance included",
    "Local Punjabi-speaking guides and high-level security",
  ];

  const packageIncludes = [
    "Airport pickup & drop-off (Pakistan)",
    "4-star hotel stays on twin-sharing basis",
    "Daily breakfast & dinner (vegetarian)",
    "Luxury full-service coach transportation",
    "Government security protocol",
    "Punjabi-speaking tour guide",
    "Two mineral water bottles per day",
    "Complimentary laundry (2 garments per head)",
    "Free medical emergency services upon request",
    "Emergency personal assistant upon request",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[500px] px-4 py-4 md:px-6 md:py-6">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/heroimage.jpg"
              alt="Tour Packages"
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
              <span className="text-white">Packages</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-medium"
            >
              Packages
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">
            {/* Left Side - Package Details */}
            <div>
              {/* Package Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[300px] md:h-[450px] w-full rounded-[2rem] overflow-hidden mb-10 shadow-xl"
              >
                <Image
                  src="/heroimage.jpg"
                  alt="Gurdwara Kartarpur Sahib"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Duration Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <span className="text-zinc-500 text-sm font-medium">
                  7 Days 6 Night
                </span>
              </motion.div>

              {/* Package Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif text-zinc-900 mb-6"
              >
                Tour Package Overview
              </motion.h2>

              {/* Package Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                  Embark on a spiritually transformative Yatra to the most
                  sacred Sikh sites across Pakistan — a journey rooted in
                  history, devotion, and community. This guided pilgrimage is
                  tailored for those seeking to reconnect with Guru Nanak Dev
                  Ji&apos;s legacy through{" "}
                  <span className="font-bold text-zinc-900">
                    daily kirtan, darshan, and historical exploration
                  </span>
                  .
                </p>

                <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                  You&apos;ll visit iconic Gurdwaras including:
                </p>

                <ul className="space-y-3 mb-6">
                  {gurdwaras.map((gurdwara, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-zinc-900 mt-2 flex-shrink-0" />
                      <span className="text-zinc-600">
                        <span className="font-bold text-zinc-900">
                          {gurdwara.name}
                        </span>{" "}
                        – {gurdwara.description}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-zinc-900 mt-2 flex-shrink-0" />
                    <span className="text-zinc-600">
                      Plus other revered sites such as{" "}
                      {otherSites.map((site, idx) => (
                        <span key={idx}>
                          <span className="font-bold text-zinc-900">
                            {site}
                          </span>
                          {idx < otherSites.length - 1 ? ", " : ""}
                          {idx === otherSites.length - 2 ? "and " : ""}
                        </span>
                      ))}
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Great For Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif text-zinc-900 mb-6">
                  Great For :
                </h3>
                <div className="flex flex-wrap gap-4">
                  {greatForTags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-6 py-3 border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors"
                    >
                      <span className="w-3 h-3 rounded-full bg-zinc-900" />
                      <span className="text-zinc-700 font-medium">{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif text-zinc-900 mb-6">
                  Highlights
                </h3>
                <ul className="space-y-4">
                  {highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2 className="w-6 h-6 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-600 leading-relaxed">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Package Included Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif text-zinc-900 mb-6">
                  Package Included
                </h3>
                <ul className="space-y-4">
                  {packageIncludes.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2 className="w-6 h-6 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-600 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tour Plan Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif text-zinc-900 mb-8">
                  Tour Plan
                </h3>

                <div className="space-y-8">
                  {/* Day 1 */}
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-4">
                      Day 1 :
                    </h4>
                    <ul className="space-y-3 ml-6">
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Arrival in Lahore (Allama Iqbal International Airport)
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Hotel check-in and breakfast
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Visit Mia Meer Darbar and Gurdwara Bebe Nanki
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Dinner and overnight in Lahore
                      </li>
                    </ul>
                  </div>

                  {/* Day 2 */}
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-4">
                      Day 2 :
                    </h4>
                    <ul className="space-y-3 ml-6">
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Breakfast and morning departure to Nankana Sahib
                        (approx. 1.5 hours)
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Tour Gurdwaras: Patti Sahib, Bal Lila Sahib, Panjvin &
                        Chhevin Patshahi, Maal Ji Sahib, Kiara Sahib, Tambu
                        Sahib, Janam Asthan, and Sacha Sauda
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Return to Lahore
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Dinner and overnight in Lahore
                      </li>
                    </ul>
                  </div>

                  {/* Day 3 */}
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-4">
                      Day 3 :
                    </h4>
                    <ul className="space-y-3 ml-6">
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Breakfast and departure to Kartarpur Sahib (approx. 3.5
                        hours)
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Visit Gurdwara Darbar Sahib Kartarpur and shopping
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Return to Lahore
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Dinner and overnight in Lahore
                      </li>
                    </ul>
                  </div>

                  {/* Day 4 */}
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-4">
                      Day 4 :
                    </h4>
                    <ul className="space-y-3 ml-6">
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Breakfast and check-out
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Travel from Lahore to Hassan Abdal (approx. 5 hours)
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Attend Nagar Kirtan at Panja Sahib
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Check-in to Legend Hotel, Islamabad
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Dinner and overnight in Islamabad
                      </li>
                    </ul>
                  </div>

                  {/* Day 5 */}
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-4">
                      Day 5 :
                    </h4>
                    <ul className="space-y-3 ml-6">
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Breakfast and check-out
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Visit Gurdwara Panja Sahib for Vaisakhi Paht Samapti
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Return to Lahore (approx. 5 hours)
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Dinner and overnight in Lahore
                      </li>
                    </ul>
                  </div>

                  {/* Day 6 */}
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-4">
                      Day 6 :
                    </h4>
                    <ul className="space-y-3 ml-6">
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Breakfast and morning departure to Eminabad (approx. 1.5
                        hours)
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Visit Gurdwara Rori Sahib, Bhai Lalo da Ghar, Chakki
                        Sahib, and Babe di Ber Sahib
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Return to Lahore
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Dinner and overnight in Lahore
                      </li>
                    </ul>
                  </div>

                  {/* Day 7 */}
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-4">
                      Day 7 :
                    </h4>
                    <ul className="space-y-3 ml-6">
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Breakfast and departure for tour of Lahore Gurdwaras
                        <ul className="ml-6 mt-2 space-y-2">
                          <li className="text-zinc-600 leading-relaxed list-circle">
                            Janam Asthan Guru Ram Das Ji, Gurdwara Shahid Ganj
                            Singh Singhania, Gurdwara Dera Sahib
                          </li>
                          <li className="text-zinc-600 leading-relaxed list-circle">
                            Maharaja Ranjit Singh Smadhi and Shahi Qila
                          </li>
                        </ul>
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Dinner and overnight in Lahore
                      </li>
                    </ul>
                  </div>

                  {/* Day 8 */}
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-4">
                      Day 8 :
                    </h4>
                    <ul className="space-y-3 ml-6">
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Breakfast and hotel check-out
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-disc">
                        Group departure to either Lahore Airport or Wagah Border
                        (based on preference)
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Terms and Conditions Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif text-zinc-900 mb-8">
                  Terms and Conditions
                </h3>

                <div className="space-y-6">
                  {/* Air Travel & Insurance */}
                  <div>
                    <p className="text-zinc-600 leading-relaxed">
                      <span className="font-bold text-zinc-900">
                        Air Travel & Insurance:
                      </span>{" "}
                      Yatries are responsible for arranging their own
                      international air travel and personal medical insurance.
                    </p>
                  </div>

                  {/* Code of Conduct */}
                  <div>
                    <p className="text-zinc-600 leading-relaxed mb-3">
                      <span className="font-bold text-zinc-900">
                        Code of Conduct:
                      </span>
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-zinc-600 leading-relaxed list-circle">
                        Strictly{" "}
                        <span className="font-bold text-zinc-900">
                          no alcohol
                        </span>{" "}
                        is permitted during the tour.
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-circle">
                        All participants must maintain{" "}
                        <span className="font-bold text-zinc-900">
                          respect, care
                        </span>
                        , and follow{" "}
                        <span className="font-bold text-zinc-900">
                          protocol at all Gurdwaras
                        </span>
                        .
                      </li>
                    </ul>
                  </div>

                  {/* Meals */}
                  <div>
                    <p className="text-zinc-600 leading-relaxed">
                      <span className="font-bold text-zinc-900">Meals:</span>{" "}
                      Only{" "}
                      <span className="font-bold text-zinc-900">
                        Pakistani vegetarian meals
                      </span>{" "}
                      will be served.
                    </p>
                  </div>

                  {/* Travel Adjustments */}
                  <div>
                    <p className="text-zinc-600 leading-relaxed mb-3">
                      <span className="font-bold text-zinc-900">
                        Travel Adjustments:
                      </span>
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-zinc-600 leading-relaxed list-circle">
                        The tour operator reserves the right to{" "}
                        <span className="font-bold text-zinc-900">
                          change the travel itinerary
                        </span>{" "}
                        in response to weather conditions or for the{" "}
                        <span className="font-bold text-zinc-900">
                          comfort, convenience, and safety
                        </span>{" "}
                        of the Sangat.
                      </li>
                      <li className="text-zinc-600 leading-relaxed list-circle">
                        Suggestions from Sangat are welcome and will be
                        considered by the tour guide.
                      </li>
                    </ul>
                  </div>

                  {/* Liability Disclaimer */}
                  <div>
                    <p className="text-zinc-600 leading-relaxed mb-3">
                      <span className="font-bold text-zinc-900">
                        Liability Disclaimer:
                      </span>
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-zinc-600 leading-relaxed list-circle">
                        While all efforts will be made to ensure safety and
                        comfort, the management will{" "}
                        <span className="font-bold text-zinc-900">
                          not be responsible for any loss, damage, injury,
                          illness, death, accident
                        </span>
                        , or{" "}
                        <span className="font-bold text-zinc-900">
                          unexpected delays or incidents
                        </span>
                        .
                      </li>
                    </ul>
                  </div>

                  {/* Medical Rest Option */}
                  <div>
                    <p className="text-zinc-600 leading-relaxed mb-3">
                      <span className="font-bold text-zinc-900">
                        Medical Rest Option:
                      </span>
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-zinc-600 leading-relaxed list-circle">
                        Private taxis to the hotel can be arranged for any Yatri
                        who is unwell or requires rest.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Places You'll See Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-serif text-zinc-900 mb-8">
                  Places You&apos;ll See
                </h3>

                <div className="relative">
                  {/* Carousel Container */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Display current image and next image */}
                    {[0, 1].map((offset) => {
                      const imageIndex =
                        (currentImageIndex + offset) % carouselImages.length;
                      return (
                        <motion.div
                          key={`${imageIndex}-${offset}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-xl group"
                        >
                          <Image
                            src={carouselImages[imageIndex]}
                            alt={`Place ${imageIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevImage}
                      className="!w-12 !h-12 !p-0 !rounded-full !border-2 !border-zinc-200 hover:!bg-zinc-900 hover:!border-zinc-900 hover:!text-white"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>

                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2">
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? "w-8 bg-zinc-900"
                              : "w-2 bg-zinc-300 hover:bg-zinc-400"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextImage}
                      className="!w-12 !h-12 !p-0 !rounded-full !border-2 !border-zinc-200 hover:!bg-zinc-900 hover:!border-zinc-900 hover:!text-white"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Sticky Booking Form */}
            <div className="lg:sticky lg:top-[100px] self-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  hover={false}
                  className="p-8 shadow-2xl border-0 bg-zinc-50 rounded-3xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900">
                        Start Your Trip Now
                      </h3>
                    </div>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <Field.Root name="fullName">
                      <Field.Control
                        name="fullName"
                        render={
                          <Input
                            placeholder="Full Name"
                            className="h-14 bg-white"
                          />
                        }
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                      <Field.Error />
                    </Field.Root>

                    {/* Phone */}
                    <Field.Root name="phone">
                      <Field.Control
                        name="phone"
                        type="tel"
                        render={
                          <Input
                            placeholder="Phone Number"
                            className="h-14 bg-white"
                          />
                        }
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <Field.Error />
                    </Field.Root>

                    {/* Email */}
                    <Field.Root name="email">
                      <Field.Control
                        name="email"
                        type="email"
                        render={
                          <Input
                            placeholder="Email Address"
                            className="h-14 bg-white"
                          />
                        }
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Field.Error />
                    </Field.Root>

                    {/* Number of Travelers */}
                    <Field.Root name="travelers">
                      <Field.Control
                        name="travelers"
                        type="number"
                        render={
                          <Input
                            placeholder="Number of Travelers"
                            className="h-14 bg-white"
                            min="1"
                          />
                        }
                        value={formData.travelers}
                        onChange={handleChange}
                        required
                      />
                      <Field.Error />
                    </Field.Root>

                    {/* Departure Date */}
                    <Field.Root name="departureDate">
                      <Field.Label className="text-zinc-600 font-medium text-sm mb-2 block">
                        Check-in
                      </Field.Label>
                      <Field.Control
                        name="departureDate"
                        type="date"
                        render={<Input className="h-14 bg-white" />}
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                      />
                      <Field.Error />
                    </Field.Root>

                    {/* Status Message */}
                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-xl ${
                          submitStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full !bg-zinc-900 !text-white hover:!bg-zinc-800 !rounded-full !px-8 disabled:!opacity-50 disabled:!cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Book Now"}
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                  </Form>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
