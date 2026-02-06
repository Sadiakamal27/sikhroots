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

// Define package types
interface Package {
  id: string;
  name: string;
  duration: string;
  description: string;
  image: string;
  price: string;
  gurdwaras: Array<{ name: string; description: string }>;
  otherSites: string[];
  greatForTags: string[];
  highlights: string[];
  packageIncludes: string[];
  tourPlan: Array<{ day: number; title: string; activities: string[] }>;
  carouselImages: string[];
}

// Sample packages data
const packagesData: Package[] = [
  {
    id: "vaisakhi-tour",
    name: "Vaisakhi Special Tour",
    duration: "7 Days 6 Night",
    description:
      "Embark on a spiritually transformative Yatra to the most sacred Sikh sites across Pakistan — a journey rooted in history, devotion, and community. This guided pilgrimage is tailored for those seeking to reconnect with Guru Nanak Dev Ji's legacy through daily kirtan, darshan, and historical exploration.",
    image: "/heroimage.jpg",
    price: "$1,299",
    gurdwaras: [
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
    ],
    otherSites: ["Rohri Sahib", "Sacha Sauda", "Dera Sahib Lahore"],
    greatForTags: [
      "Spiritual Pilgrimage",
      "Cultural Tours",
      "Heritage Tours",
      "Historic Sikh Sites",
    ],
    highlights: [
      "Visit to historical Gurdwaras including Nankana Sahib, Kartarpur Sahib, and Panja Sahib",
      "Daily spiritual experiences with Kirtan and Darshan",
      "Comfortable luxury coach travel and 4-star accommodations",
      "Vegetarian meals, bottled water, laundry, and medical assistance included",
      "Local Punjabi-speaking guides and high-level security",
    ],
    packageIncludes: [
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
    ],
    tourPlan: [
      {
        day: 1,
        title: "Arrival in Lahore",
        activities: [
          "Arrival in Lahore (Allama Iqbal International Airport)",
          "Hotel check-in and breakfast",
          "Visit Mia Meer Darbar and Gurdwara Bebe Nanki",
          "Dinner and overnight in Lahore",
        ],
      },
      {
        day: 2,
        title: "Nankana Sahib Visit",
        activities: [
          "Breakfast and morning departure to Nankana Sahib (approx. 1.5 hours)",
          "Tour Gurdwaras: Patti Sahib, Bal Lila Sahib, Panjvin & Chhevin Patshahi, Maal Ji Sahib, Kiara Sahib, Tambu Sahib, Janam Asthan, and Sacha Sauda",
          "Return to Lahore",
          "Dinner and overnight in Lahore",
        ],
      },
      {
        day: 3,
        title: "Kartarpur Sahib",
        activities: [
          "Breakfast and departure to Kartarpur Sahib (approx. 3.5 hours)",
          "Visit Gurdwara Darbar Sahib Kartarpur and shopping",
          "Return to Lahore",
          "Dinner and overnight in Lahore",
        ],
      },
      {
        day: 4,
        title: "Journey to Hassan Abdal",
        activities: [
          "Breakfast and check-out",
          "Travel from Lahore to Hassan Abdal (approx. 5 hours)",
          "Attend Nagar Kirtan at Panja Sahib",
          "Check-in to Legend Hotel, Islamabad",
          "Dinner and overnight in Islamabad",
        ],
      },
      {
        day: 5,
        title: "Panja Sahib Vaisakhi",
        activities: [
          "Breakfast and check-out",
          "Visit Gurdwara Panja Sahib for Vaisakhi Paht Samapti",
          "Return to Lahore (approx. 5 hours)",
          "Dinner and overnight in Lahore",
        ],
      },
      {
        day: 6,
        title: "Eminabad Tour",
        activities: [
          "Breakfast and morning departure to Eminabad (approx. 1.5 hours)",
          "Visit Gurdwara Rori Sahib, Bhai Lalo da Ghar, Chakki Sahib, and Babe di Ber Sahib",
          "Return to Lahore",
          "Dinner and overnight in Lahore",
        ],
      },
      {
        day: 7,
        title: "Lahore Gurdwaras & Departure",
        activities: [
          "Breakfast and departure for tour of Lahore Gurdwaras",
          "Visit Janam Asthan Guru Ram Das Ji, Gurdwara Shahid Ganj Singh Singhania, Gurdwara Dera Sahib",
          "Visit Maharaja Ranjit Singh Smadhi and Shahi Qila",
          "Dinner and overnight in Lahore",
        ],
      },
    ],
    carouselImages: ["/heroimage.jpg", "/heroimage.jpg", "/heroimage.jpg"],
  },
  {
    id: "heritage-tour",
    name: "Heritage & Culture Tour",
    duration: "5 Days 4 Night",
    description:
      "Discover the rich heritage and cultural significance of historic Sikh sites. This tour focuses on the architectural beauty and historical importance of key Gurdwaras and monuments.",
    image: "/heroimage.jpg",
    price: "$899",
    gurdwaras: [
      {
        name: "Gurdwara Kartarpur Sahib",
        description: "where Guru Nanak spent his final years",
      },
      {
        name: "Gurdwara Dera Sahib",
        description: "martyrdom site of Guru Arjan Dev Ji",
      },
    ],
    otherSites: ["Shahi Qila", "Badshahi Mosque", "Lahore Fort"],
    greatForTags: [
      "Heritage Tours",
      "Cultural Exploration",
      "Photography Tours",
      "Historic Sites",
    ],
    highlights: [
      "Explore architectural marvels and historic monuments",
      "Professional photography opportunities",
      "Cultural immersion with local communities",
      "Comfortable 4-star accommodations",
      "Expert local guides",
    ],
    packageIncludes: [
      "Airport transfers",
      "4-star hotel accommodation",
      "Daily meals (vegetarian)",
      "Transportation in luxury coach",
      "Professional tour guide",
      "Entry fees to all sites",
    ],
    tourPlan: [
      {
        day: 1,
        title: "Arrival & Lahore Exploration",
        activities: [
          "Arrival in Lahore",
          "Hotel check-in",
          "Visit Badshahi Mosque and Lahore Fort",
          "Dinner at hotel",
        ],
      },
      {
        day: 2,
        title: "Kartarpur Sahib",
        activities: [
          "Breakfast",
          "Full day visit to Kartarpur Sahib",
          "Return to Lahore",
          "Dinner and overnight",
        ],
      },
      {
        day: 3,
        title: "Lahore Heritage Sites",
        activities: [
          "Visit Gurdwara Dera Sahib",
          "Explore Shahi Qila",
          "Visit local markets",
          "Dinner and overnight",
        ],
      },
      {
        day: 4,
        title: "Cultural Immersion",
        activities: [
          "Visit local communities",
          "Cultural performances",
          "Traditional meal experience",
          "Dinner and overnight",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Breakfast",
          "Last-minute shopping",
          "Transfer to airport",
        ],
      },
    ],
    carouselImages: ["/heroimage.jpg", "/heroimage.jpg", "/heroimage.jpg"],
  },
  {
    id: "spiritual-retreat",
    name: "Spiritual Retreat Package",
    duration: "10 Days 9 Night",
    description:
      "An extended spiritual journey covering all major Sikh pilgrimage sites. Perfect for those seeking deep spiritual connection and comprehensive exploration of Sikh heritage.",
    image: "/heroimage.jpg",
    price: "$1,799",
    gurdwaras: [
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
      {
        name: "Gurdwara Dera Sahib",
        description: "martyrdom site of Guru Arjan Dev Ji",
      },
    ],
    otherSites: [
      "Rohri Sahib",
      "Sacha Sauda",
      "All Lahore Gurdwaras",
      "Eminabad sites",
    ],
    greatForTags: [
      "Spiritual Pilgrimage",
      "Extended Tours",
      "Deep Immersion",
      "Complete Heritage",
    ],
    highlights: [
      "Comprehensive coverage of all major Sikh sites",
      "Extended time for spiritual practices",
      "Multiple Kirtan and Darshan sessions",
      "Luxury accommodations throughout",
      "Personal spiritual guide",
      "Small group sizes for intimate experience",
    ],
    packageIncludes: [
      "All airport transfers",
      "5-star hotel accommodations",
      "All meals (vegetarian)",
      "Premium luxury coach",
      "Personal spiritual guide",
      "Government security",
      "Medical support 24/7",
      "Laundry services",
      "Mineral water",
      "Travel insurance",
    ],
    tourPlan: [
      {
        day: 1,
        title: "Arrival",
        activities: [
          "Arrival in Lahore",
          "5-star hotel check-in",
          "Welcome dinner",
          "Orientation session",
        ],
      },
      // Add more days as needed
    ],
    carouselImages: ["/heroimage.jpg", "/heroimage.jpg", "/heroimage.jpg"],
  },
];

const PackagesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "",
    departureDate: "",
    packageId: "",
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
          packageName: packagesData.find((p) => p.id === formData.packageId)
            ?.name,
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
          packageId: "",
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

  const nextImage = () => {
    if (selectedPackage) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedPackage.carouselImages.length,
      );
    }
  };

  const prevImage = () => {
    if (selectedPackage) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedPackage.carouselImages.length - 1 : prev - 1,
      );
    }
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
          {!selectedPackage ? (
            // Package List View
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-4">
                  Choose Your Journey
                </h2>
                <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                  Select from our carefully curated pilgrimage packages, each
                  designed to provide a unique spiritual experience
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packagesData.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      hover={true}
                      className="overflow-hidden h-full flex flex-col cursor-pointer group"
                      onClick={() => {
                        setSelectedPackage(pkg);
                        setFormData({ ...formData, packageId: pkg.id });
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {/* Package Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                          <span className="text-zinc-900 font-bold">
                            {pkg.price}
                          </span>
                        </div>
                      </div>

                      {/* Package Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-3">
                          <span className="text-zinc-500 text-sm font-medium">
                            {pkg.duration}
                          </span>
                        </div>

                        <h3 className="text-2xl font-serif text-zinc-900 mb-3">
                          {pkg.name}
                        </h3>

                        <p className="text-zinc-600 leading-relaxed mb-4 line-clamp-3">
                          {pkg.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {pkg.greatForTags.slice(0, 2).map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* View Details Button */}
                        <div className="mt-auto">
                          <Button
                            variant="outline"
                            className="w-full group-hover:!bg-zinc-900 group-hover:!text-white transition-all"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            // Package Details View
            <>
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedPackage(null);
                    setCurrentImageIndex(0);
                  }}
                  className="!rounded-full"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Packages
                </Button>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">
                {/* Left Side - Package Details */}
                <div>
                  {/* Package Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative h-[300px] md:h-[450px] w-full rounded-[2rem] overflow-hidden mb-10 shadow-xl"
                  >
                    <Image
                      src={selectedPackage.image}
                      alt={selectedPackage.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Duration Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4"
                  >
                    <span className="text-zinc-500 text-sm font-medium">
                      {selectedPackage.duration}
                    </span>
                  </motion.div>

                  {/* Package Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-serif text-zinc-900 mb-6"
                  >
                    {selectedPackage.name}
                  </motion.h2>

                  {/* Package Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                  >
                    <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                      {selectedPackage.description}
                    </p>

                    <p className="text-zinc-600 leading-relaxed text-lg mb-6">
                      You&apos;ll visit iconic Gurdwaras including:
                    </p>

                    <ul className="space-y-3 mb-6">
                      {selectedPackage.gurdwaras.map((gurdwara, idx) => (
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
                      {selectedPackage.otherSites.length > 0 && (
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-zinc-900 mt-2 flex-shrink-0" />
                          <span className="text-zinc-600">
                            Plus other revered sites such as{" "}
                            {selectedPackage.otherSites.map((site, idx) => (
                              <span key={idx}>
                                <span className="font-bold text-zinc-900">
                                  {site}
                                </span>
                                {idx < selectedPackage.otherSites.length - 1
                                  ? ", "
                                  : ""}
                                {idx === selectedPackage.otherSites.length - 2
                                  ? "and "
                                  : ""}
                              </span>
                            ))}
                          </span>
                        </li>
                      )}
                    </ul>
                  </motion.div>

                  {/* Great For Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                  >
                    <h3 className="text-2xl font-serif text-zinc-900 mb-6">
                      Great For :
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {selectedPackage.greatForTags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 px-6 py-3 border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors"
                        >
                          <span className="w-3 h-3 rounded-full bg-zinc-900" />
                          <span className="text-zinc-700 font-medium">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Highlights Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                  >
                    <h3 className="text-2xl font-serif text-zinc-900 mb-6">
                      Highlights
                    </h3>
                    <ul className="space-y-4">
                      {selectedPackage.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
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
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                  >
                    <h3 className="text-2xl font-serif text-zinc-900 mb-6">
                      Package Included
                    </h3>
                    <ul className="space-y-4">
                      {selectedPackage.packageIncludes.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
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
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                  >
                    <h3 className="text-2xl font-serif text-zinc-900 mb-8">
                      Tour Plan
                    </h3>

                    <div className="space-y-8">
                      {selectedPackage.tourPlan.map((day, idx) => (
                        <div key={idx}>
                          <h4 className="text-lg font-bold text-zinc-900 mb-4">
                            Day {day.day} : {day.title}
                          </h4>
                          <ul className="space-y-3 ml-6">
                            {day.activities.map((activity, actIdx) => (
                              <li
                                key={actIdx}
                                className="text-zinc-600 leading-relaxed list-disc"
                              >
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Terms and Conditions Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                          international air travel and personal medical
                          insurance.
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
                          <span className="font-bold text-zinc-900">
                            Meals:
                          </span>{" "}
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
                            Private taxis to the hotel can be arranged for any
                            Yatri who is unwell or requires rest.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Places You'll See Carousel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                            (currentImageIndex + offset) %
                            selectedPackage.carouselImages.length;
                          return (
                            <motion.div
                              key={`${imageIndex}-${offset}`}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                              className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-xl group"
                            >
                              <Image
                                src={selectedPackage.carouselImages[imageIndex]}
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
                          {selectedPackage.carouselImages.map((_, index) => (
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
                <div className="lg:sticky lg:top-[10px] self-start">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
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
                            Book This Package
                          </h3>
                        </div>
                      </div>

                      <Form onSubmit={handleSubmit}>
                        {/* Package Selection (Read-only, showing selected package) */}
                        <Field.Root name="packageId">
                          <Field.Label className="text-zinc-600 font-medium text-sm mb-2 block">
                            Selected Package
                          </Field.Label>
                          <div className="h-14 bg-white rounded-lg border border-zinc-200 px-4 flex items-center mb-6">
                            <span className="text-zinc-900 font-medium">
                              {selectedPackage.name}
                            </span>
                          </div>
                        </Field.Root>

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
                            Departure Date
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
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
