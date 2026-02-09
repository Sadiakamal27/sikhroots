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
    id: "basic-package",
    name: "Basic Package",
    duration: "8 Nights and 7 Days",
    description:
      "Embark on a spiritual and cultural journey designed for the Sikh community! Experience the rich history, sacred sites, and the vibrant culture that connect us to our roots in Pakistan.",
    image: "/heroimage.jpg",
    price: "$1,699",
    gurdwaras: [
      { name: "Gurdwara Bebe Nanaki", description: "Sacred site in Lahore" },
      {
        name: "Gurdwara Dera Sahib",
        description: "Historical shrine in Lahore",
      },
      {
        name: "Gurdwara Darbar Sahib Ji",
        description: "The Symbol of Peace and Love in Kartarpur",
      },
      {
        name: "Nankana Sahib Ji",
        description: "Birthplace of Guru Nanak Dev Ji",
      },
      {
        name: "Panja Sahib",
        description: "Historical handprint of Guru Nanak",
      },
    ],
    otherSites: [
      "Dayal Singh Library",
      "Anarkali Bazaar",
      "Lakshmi Chowk",
      "Hazrat Mian Mir",
      "Faisal Mosque",
      "Centaurus Mall",
    ],
    greatForTags: ["Spiritual", "Heritage", "Community"],
    highlights: [
      "Lahore: City of Gurus and Pirs",
      "Kartarpur: Symbol of Peace and Love",
      "Nankana Sahib: Divine Light of Sharing",
      "Eminabad & Sialkot: Witness to Miracles",
      "Islamabad: Modern Capital Exploration",
    ],
    packageIncludes: [
      "8-nights' stay in quality hotels",
      "Private AC transport (Arrival to Departure)",
      "Daily vegetarian Breakfast and Dinner",
      "Daily bottled mineral water",
      "Punjabi-speaking hospitality staff",
      "Entry tickets, road taxes & local charges",
      "Complete Visa documentation support",
    ],
    tourPlan: [
      {
        day: 1,
        title: "Lahore Arrival & Exploration",
        activities: [
          "Arrival in Lahore",
          "Visit Dayal Singh College & Trust Library",
          "Explore Anarkali",
          "Dinner at Lakshmi Chowk",
        ],
      },
      {
        day: 2,
        title: "Lahore Local Shrines",
        activities: [
          "Gurdwara Bebe Nanaki",
          "Darbar Hazrat Mian Mir",
          "Gurdwara Dera Sahib",
          "Samadhi Maharaja Ranjit Singh",
          "Dinner at Lakshmi Chowk",
        ],
      },
      {
        day: 3,
        title: "Kartarpur Yatra",
        activities: [
          "Full-day darshan at Gurdwara Darbar Sahib Ji",
          "Return to hotel for dinner and rest",
        ],
      },
      {
        day: 4,
        title: "Nankana Sahib Ji",
        activities: [
          "Visit Janam Asthaan, Bal Lila, Kiara Sahib and 7 sacred Gurdwaras",
          "Dinner and overnight stay",
        ],
      },
      {
        day: 5,
        title: "Eminabad & Sialkot",
        activities: [
          "Visit Gurdwara Rohri Sahib, Chakki Sahib, Bhai Lalu di Khoi",
          "Gurdwara Bair Sahib in Sialkot",
          "Travel to Islamabad for check-in",
        ],
      },
      {
        day: 6,
        title: "Panja Sahib Darshan",
        activities: [
          "Full day yatra to Panja Sahib in Hassan Abdal",
          "Dinner at Basti Restaurant, Islamabad",
        ],
      },
      {
        day: 7,
        title: "Capital City Tour & Departure",
        activities: [
          "Visit Purana Qila, Raja Bazar, Faisal Mosque",
          "Daman-e-Koh, Rawal Lake, Centaurus Mall",
          "Farewell dinner at Dera Dari",
          "Airport transfer",
        ],
      },
    ],
    carouselImages: ["/heroimage.jpg", "/heroimage.jpg"],
  },
  {
    id: "heritage-package",
    name: "Heritage Package",
    duration: "8 Nights and 7 Days",
    description:
      "Embark on a spiritual and cultural journey designed for the Sikh community! Experience the rich history, sacred sites, and the vibrant culture that connect us to our roots in Pakistan.",
    image: "/heroimage.jpg",
    price: "$1,999",
    gurdwaras: [
      { name: "Gurdwara Bebe Nanaki", description: "Sacred site in Lahore" },
      {
        name: "Gurdwara Dera Sahib",
        description: "Historical shrine in Lahore",
      },
      {
        name: "Gurdwara Darbar Sahib Ji",
        description: "Symbol of Peace (Kartarpur)",
      },
      {
        name: "Nankana Sahib Ji",
        description: "Divine Foundation of Wand Chakko",
      },
      { name: "Gurdwara Rohri Sahib", description: "Eminabad miracles" },
    ],
    otherSites: [
      "Haveli Restaurant",
      "3-4 Star Luxury Hotels",
      "Museums",
      "Handicraft Markets",
    ],
    greatForTags: ["Heritage", "Luxury", "Culture"],
    highlights: [
      "Upgraded 3-4 Star Luxury Accommodations",
      "Historical and spiritual essence of Lahore",
      "Peace and Love journey to Kartarpur",
      "Divine Light of Nankana Sahib",
      "Sialkot & Eminabad site excursions",
    ],
    packageIncludes: [
      "8-nights' stay in 3-4 star luxury hotels",
      "Private air-conditioned transportation",
      "Daily vegetarian Breakfast and Dinner",
      "Daily bottled mineral water",
      "Expert Punjabi-speaking guides",
      "All entry tickets and local taxes",
      "Visa documentation and support",
    ],
    tourPlan: [
      {
        day: 1,
        title: "Lahore Welcome & Heritage Intro",
        activities: [
          "Warm welcome at Lahore Airport",
          "Dayal Singh Library & College visit",
          "Anarkali cultural walk",
          "Lakshmi Chowk dinner",
        ],
      },
      {
        day: 2,
        title: "Lahore Heritage Sites",
        activities: [
          "Gurdwara Bebe Nanaki",
          "Shrine of Hazrat Mian Mir",
          "Gurdwara Dera Sahib",
          "Samadhi of Maharaja Ranjit Singh",
          "Grand dinner at Haveli",
        ],
      },
      {
        day: 3,
        title: "Kartarpur Legacy",
        activities: [
          "Sacred Darshan at Kartarpur Darbar Sahib",
          "Corridor experience",
          "Return to Lahore",
        ],
      },
      {
        day: 4,
        title: "Spiritual Nankana Sahib",
        activities: [
          "Janam Asthaan and surrounding Gurdwaras",
          "Spiritual discourse and yatra",
          "Evening meditation",
        ],
      },
      {
        day: 5,
        title: "Miracles of Eminabad",
        activities: [
          "Rohri Sahib & Chakki Sahib",
          "Gurdwara Bair Sahib Sialkot",
          "Late evening arrival in Islamabad",
        ],
      },
      {
        day: 6,
        title: "Hassan Abdal Legacy",
        activities: [
          "Full day at Panja Sahib",
          "Islamabad sightseeing",
          "Dinner at Basti Restaurant",
        ],
      },
      {
        day: 7,
        title: "Capital Exploration & Farewell",
        activities: [
          "Faisal Mosque & Daman-e-Koh",
          "Raja Bazar shopping",
          "Centaurus Mall visit",
          "Dera Dari farewell dinner",
          "Departure",
        ],
      },
    ],
    carouselImages: ["/heroimage.jpg", "/heroimage.jpg"],
  },
  {
    id: "executive-package",
    name: "Executive Package",
    duration: "8 Nights and 8 Days",
    description:
      "This exclusive VIP Package offers a luxurious and spiritual retreat. Enjoy premium amenities, Murree Hills leisure, and a cultural gala night alongside sacred site visits.",
    image: "/heroimage.jpg",
    price: "$2,499",
    gurdwaras: [
      {
        name: "Gurdwara Babay Nanak",
        description: "Spiritual landmark of Lahore",
      },
      { name: "Gurdwara Dera Sahib", description: "Lahore heritage" },
      { name: "Kartarpur Darbar Sahib", description: "VIP Corridor Darshan" },
      { name: "Nankana Sahib (7 Sites)", description: "Complete Pilgrimage" },
      { name: "Gurdwara Panja Sahib", description: "Hassan Abdal Highlights" },
    ],
    otherSites: [
      "PC Bhurban",
      "Murree Hills",
      "Luxus Hotel",
      "Ghazal Night",
      "BBQ Gala Dinner",
      "Golf Sessions",
    ],
    greatForTags: ["VIP", "Luxury", "Premium Retreat"],
    highlights: [
      "Stay at PC Bhurban & Luxus Lahore",
      "BBQ Gala Dinner and Ghazal Night",
      "Leisure time in Murree Hills & Golfing",
      "Exclusive 7-Gurdwara tour at Nankana Sahib",
      "VIP Transportation and Security Protocol",
    ],
    packageIncludes: [
      "7-nights' stay in Top-tier 4-star & PC Hotels",
      "Premium Private AC transportation",
      "Gourmet vegetarian Breakfast and Dinner",
      "Unlimited bottled water",
      "Professional Punjabi hospitality team",
      "All inclusive site tags & priority access",
      "Premium Visa documentation support",
    ],
    tourPlan: [
      {
        day: 1,
        title: "VIP Lahore Arrival",
        activities: [
          "Airport meet & greet",
          "Diyal Singh University & Library",
          "Anarkali Bazaar walk",
          "Lakshmi Chowk dinner",
        ],
      },
      {
        day: 2,
        title: "Spiritual Lahore",
        activities: [
          "Gurdwara Babay Nanak & Dera Sahib",
          "Samadhi Maharaja Ranjit Singh",
          "Hazrat Mian Mir Shrine",
          "Grand dinner at Haveli Restaurant",
        ],
      },
      {
        day: 3,
        title: "Kartarpur VIP Yatra",
        activities: [
          "Full-day Darshan at Kartarpur Sahib",
          "Priority access",
          "Dinner and luxury stay in Lahore",
        ],
      },
      {
        day: 4,
        title: "Complete Nankana Yatra",
        activities: [
          "7 Sacred Gurdwaras tour",
          "Maal Jee, Bal Lila, Patti Sahib visits",
          "Quiet reflection time",
        ],
      },
      {
        day: 5,
        title: "Legacy Path to North",
        activities: [
          "Gurdwara Rohri Sahib & Bher Sahib",
          "Eminabad miracles tour",
          "Arrival at Legend/3-Tree Islamabad",
        ],
      },
      {
        day: 6,
        title: "Divine Panja Sahib",
        activities: [
          "Full day at Hassan Abdal",
          "Spiritual session at Panja Sahib",
          "Basti Restaurant dinner",
        ],
      },
      {
        day: 7,
        title: "Hill Retreat: Bhurban",
        activities: [
          "Check-in at PC Bhurban",
          "Leisure/Golfing",
          "BBQ Gala Dinner & Ghazal Night",
        ],
      },
      {
        day: 8,
        title: "Capital Finale",
        activities: [
          "Raja Bazar & Faisal Mosque",
          "Centaurus Mall shopping",
          "Farewell dinner at Dera Dari",
          "Airport Departure",
        ],
      },
    ],
    carouselImages: ["/heroimage.jpg", "/heroimage.jpg"],
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
                <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-6 max-w-4xl mx-auto leading-tight">
                  Explore the Sacred Sikh Heritage of Pakistan – Two Exclusive
                  Packages
                </h2>
                <p className="text-zinc-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                  Join us on a spiritual journey through Pakistan&apos;s most
                  revered Sikh and cultural landmarks with our thoughtfully
                  curated travel packages. Choose from our Standard Package,
                  designed for those seeking a meaningful and well-guided
                  pilgrimage across Lahore, Kartarpur, Nankana Sahib, and more.
                  Or indulge in our VIP Package, which blends sacred exploration
                  with luxury, adding scenic retreats like Murree and exclusive
                  experiences such as a golf session and gala dinner. Both
                  packages offer professional Punjabi-speaking guides, private
                  transportation, and 4-star accommodations — tailored to
                  provide an enriching and unforgettable darshan yatra
                  experience.
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

              {/* Quote Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-24 relative rounded-[3rem] overflow-hidden group shadow-2xl"
              >
                <div className="absolute inset-0">
                  <Image
                    src="/heroimage.jpg"
                    alt="Quote Background"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 py-20 px-8 text-center flex flex-col items-center max-w-4xl mx-auto">
                  <div className="w-12 h-1px bg-white/30 mb-8" />

                  <blockquote className="text-2xl md:text-4xl font-serif text-white leading-snug mb-10 italic">
                    &ldquo;Burn worldly love, <br />
                    rub the ashes and make ink of it, <br />
                    make the heart the pen, <br />
                    the intellect the writer, <br />
                    write that which has no end or limit.&rdquo;
                  </blockquote>

                  <div className="flex flex-col items-center">
                    <div className="text-lg md:text-xl text-white font-medium mb-1">
                      — Guru Nanak
                    </div>
                    <div className="text-white/60 text-sm uppercase tracking-[0.2em]">
                      Sri Guru Granth Sahib
                    </div>
                  </div>

                  <div className="w-12 h-1px bg-white/30 mt-8" />
                </div>
              </motion.div>
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
