"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select, SelectItem } from "@/components/ui/Select";

// Package data type
interface Package {
  id: string;
  name: string;
  duration: string;
  description: string;
  image: string;
  price: string;
  highlights: string[];
}

const PackagesSection = () => {
  const [selectedPackageId, setSelectedPackageId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "2",
    departureDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Sample packages
  const packages: Package[] = [
    {
      id: "vaisakhi-tour",
      name: "Vaisakhi Special Tour",
      duration: "7 Days 6 Nights",
      description:
        "Experience the spiritual journey to sacred Sikh sites including Nankana Sahib, Kartarpur Sahib, and Panja Sahib.",
      image: "/p11.jpg",
      price: "$1,299",
      highlights: [
        "Visit to Nankana Sahib",
        "Kartarpur Sahib Darshan",
        "Panja Sahib Visit",
      ],
    },
    {
      id: "heritage-tour",
      name: "Heritage & Culture Tour",
      duration: "5 Days 4 Nights",
      description:
        "Discover the rich heritage and cultural significance of historic Sikh sites and monuments.",
      image: "/p22.jpg",
      price: "$899",
      highlights: [
        "Kartarpur Sahib",
        "Lahore Heritage Sites",
        "Cultural Immersion",
      ],
    },
    {
      id: "spiritual-retreat",
      name: "Spiritual Retreat Package",
      duration: "10 Days 9 Nights",
      description:
        "An extended spiritual journey covering all major Sikh pilgrimage sites with deep immersion.",
      image: "/p33.webp",
      price: "$1,799",
      highlights: [
        "All Major Gurdwaras",
        "Extended Spiritual Time",
        "Premium Accommodations",
      ],
    },
  ];

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
      const selectedPackage = packages.find((p) => p.id === selectedPackageId);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "package-booking",
          ...formData,
          packageId: selectedPackageId,
          packageName: selectedPackage?.name,
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
          travelers: "2",
          departureDate: "",
        });
        setSelectedPackageId("");
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

  return (
    <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-zinc-900 dark:text-white">Choose Your </span>
            <span className="font-serif italic text-zinc-600 dark:text-zinc-400">
              Pilgrimage
            </span>
            <span className="text-zinc-900 dark:text-white"> Package</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Select from our carefully curated spiritual journey packages and
            book your transformative experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 items-start">
          {/* Left Column - Package Cards */}
          <div className="space-y-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  hover={true}
                  className={`overflow-hidden cursor-pointer transition-all !rounded-3xl ${
                    selectedPackageId === pkg.id
                      ? "!border-2 !border-zinc-900 dark:!border-white"
                      : "!border-2 !border-zinc-200 dark:!border-zinc-800"
                  }`}
                  onClick={() => setSelectedPackageId(pkg.id)}
                >
                  <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    {/* Package Image */}
                    <div className="relative h-64 md:h-full min-h-[250px]">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                        <span className="text-zinc-900 font-bold">
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    {/* Package Content */}
                    <CardContent className="!p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-zinc-500" />
                          <span className="text-zinc-500 text-sm font-medium">
                            {pkg.duration}
                          </span>
                        </div>

                        <h3 className="text-2xl font-serif text-zinc-900 dark:text-white mb-3">
                          {pkg.name}
                        </h3>

                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                          {pkg.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-4">
                          {pkg.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <Link href="/packages">
                          <Button
                            variant="outline"
                            size="sm"
                            className="!rounded-full"
                          >
                            View Full Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>

                        {selectedPackageId === pkg.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center"
                          >
                            <svg
                              className="w-4 h-4 text-white dark:text-black"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* View All Packages Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center pt-6"
            >
              <Link href="/packages">
                <Button
                  variant="outline"
                  size="lg"
                  className="!rounded-full !border-2"
                >
                  View All Packages
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-[60px]"
          >
            <Card
              hover={false}
              className="!rounded-3xl !border-2 !border-zinc-200 dark:!border-zinc-800 shadow-xl"
            >
              <CardContent className="!p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      Book Your Package
                    </h3>
                    <p className="text-sm text-zinc-500">
                      Start your spiritual journey
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Package Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Select Package *
                    </label>
                    <Select
                      value={selectedPackageId}
                      onValueChange={(value) =>
                        setSelectedPackageId(value || "")
                      }
                      placeholder="Choose a package"
                    >
                      {packages.map((pkg) => (
                        <SelectItem key={pkg.id} value={pkg.id}>
                          {pkg.name} - {pkg.price}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 833 207 3324"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Number of Travelers */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Travelers *
                      </label>
                      <Input
                        type="number"
                        name="travelers"
                        min="1"
                        max="20"
                        value={formData.travelers}
                        onChange={handleChange}
                        placeholder="2"
                        required
                      />
                    </div>

                    {/* Departure Date */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Departure *
                      </label>
                      <Input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <div
                      className={`p-3 rounded-xl text-sm ${
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
                    disabled={isSubmitting || !selectedPackageId}
                    className="!w-full !bg-zinc-900 dark:!bg-white dark:!text-black !text-white hover:!bg-zinc-800 !rounded-full disabled:!opacity-50 disabled:!cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Book Now"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
