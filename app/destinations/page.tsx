"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  Info,
  ChevronLeft,
} from "lucide-react";
import { Button, Card } from "@/components/ui";

interface Destination {
  id: string;
  title: string;
  location: string;
  shortDesc: string;
  image: string;
  fullHistory: string;
  significance: string[];
  itinerary: Array<{
    activity: string;
    details: string;
  }>;
}

const destinationsData: Destination[] = [
  {
    id: "panja-sahib",
    title: "Panja Sahib",
    location: "Hassan Abdal",
    shortDesc:
      "Visit Gurdwara Panja Sahib, home to the divine handprint of Guru Nanak.",
    image: "/heroimage.jpg",
    fullHistory:
      "Named after the handprint (Panja) of Guru Nanak imprinted on a boulder in 1521 CE. Legend tells of the Guru stopping a rock hurled by Shah Wali Qandhari with his open palm. A clear, fresh spring still gushes from behind the rock today into a large sacred pool.",
    significance: [
      "The Divine Handprint (Panja)",
      "Built by Hari Singh Nalwa",
      "Mughal-style architecture",
      "Sacred spring water",
    ],
    itinerary: [
      {
        activity: "Panja Sahib Darshan",
        details: "View the miraculous handprint on the boulder",
      },
      {
        activity: "Auspicious Bathing",
        details: "Spiritual dipping in the sacred pool",
      },
      {
        activity: "Hillside Reflection",
        details: "Visit the site of Shah Wali Qandhari's shrine",
      },
    ],
  },
  {
    id: "kartarpur-sahib",
    title: "Kartarpur Sahib",
    location: "Narowal",
    shortDesc:
      "Experience the 'Symbol of Peace and Love on Earth' at Gurdwara Darbar Sahib Ji.",
    image: "/heroimage.jpg",
    fullHistory:
      "Founded in 1504 AD by Baba Guru Nanak, the first guru of Sikhism. It was the site of the first Sikh commune where Guru Nanak settled with his family and lived for 18 years until his death in 1539. The gurdwara honors the site where he did farming and established the community kitchen (Langar).",
    significance: [
      "Second holiest site in Sikhism",
      "Founder's final resting place",
      "First Sikh Commune location",
      "Symbol of Peace (Kartarpur Corridor)",
    ],
    itinerary: [
      {
        activity: "Corridor Visit",
        details: "Modern access for pilgrims via the dedicated corridor",
      },
      {
        activity: "Darbar Sahib",
        details: "Full-day visit to the main Gurdwara and surrounding fields",
      },
      {
        activity: "Langar Experience",
        details: "Participate in the community kitchen traditions",
      },
    ],
  },
  {
    id: "janam-asthan",
    title: "Janam Asthan",
    location: "Nankana Sahib",
    shortDesc:
      "Journey to the 'Divine Light' - the birthplace of Guru Nanak Dev Ji.",
    image: "/heroimage.jpg",
    fullHistory:
      "Formerly known as Rai-Bhoi-Di-Talwandi, renamed after Guru Nanak's birth. The historic Janam Asthan Gurdwara was originally constructed in the 1600s and later renovated by Maharaja Ranjit Singh in 1819. It stands as one of the most important religious sites for the Sikh community worldwide.",
    significance: [
      "Gurdwara Janam Asthan",
      "Birthplace of Baba Guru Nanak",
      "Nankana Massacre historical site",
      "Rich Mughal and Sikh architecture",
    ],
    itinerary: [
      {
        activity: "Sacred Pilgrimage",
        details: "Visit Janam Asthaan, Kiara Sahib, and Maal Jee",
      },
      {
        activity: "Seven Gurdwaras Tour",
        details:
          "Explore Bal Lila, Patti Sahib, Tambu Sahib, and the Patshahis",
      },
      {
        activity: "Historical Reflection",
        details: "Learn about the Akali movement and the site's restoration",
      },
    ],
  },
  {
    id: "babe-di-beri",
    title: "Babe di Beri",
    location: "Sialkot",
    shortDesc:
      "Sialkot's cherished site where Guru Nanak rested under a Ber tree.",
    image: "/heroimage.jpg",
    fullHistory:
      "In Sialkot, Gurdwara Bair Sahib (Babe di Beri) marks the spot where Guru Nanak Dev Ji rested under a Bair (Ber) tree after his travels. The tree still stands today as a testament to the Guru's visit, where he shared spiritual wisdom with local seekers.",
    significance: [
      "Historic Ber Tree",
      "Guru Nanak's resting spot",
      "Sialkot's primary Sikh shrine",
      "Land of spiritual hymns",
    ],
    itinerary: [
      {
        activity: "Bair Sahib Darshan",
        details: "Visit the historic tree and main sanctuary",
      },
      {
        activity: "Spiritual Discourse",
        details: "Engage with the local congregation",
      },
      {
        activity: "Site Excursion",
        details: "Explore the surrounding historical areas",
      },
    ],
  },
  {
    id: "dehra-sahib",
    title: "Dehra Sahib",
    location: "Lahore",
    shortDesc:
      "The sacred site in the heart of Lahore, honoring the memory of Guru Arjan Dev Ji.",
    image: "/heroimage.jpg",
    fullHistory:
      "Located in the walled city of Lahore, Gurdwara Dera Sahib commemorates the site of the martyrdom of Guru Arjan Dev Ji. It is part of the larger Lahore Fort complex and stands as a symbol of sacrifice and spiritual resilience.",
    significance: [
      "Martyrdom site of Guru Arjan Dev Ji",
      "Adjoins Maharaja Ranjit Singh's Samadhi",
      "Architectural masterpiece",
      "Lahore's most revered Gurdwara",
    ],
    itinerary: [
      {
        activity: "Dera Sahib Darshan",
        details: "Full visit to the Gurdwara and Samadhi complex",
      },
      {
        activity: "Lahore Fort Walk",
        details: "Explore the historic surroundings",
      },
      {
        activity: "River Ravi View",
        details: "Observe the site where the river once flowed near the shrine",
      },
    ],
  },
  {
    id: "rori-sahib",
    title: "Rori Sahib",
    location: "Emanabad",
    shortDesc:
      "The historic mound where Guru Nanak and Bhai Mardana found spiritual solace.",
    image: "/heroimage.jpg",
    fullHistory:
      "Gurdwara Rori Sahib marks the spot on a mound where Guru Nanak and Bhai Mardana sat and sung songs together during their travels. It marks one of the three times Guru Nanak visited the site and found pottery shards in the ruins.",
    significance: [
      "The Sacred Mound (Rori)",
      "Site of spiritual songs",
      "Emanabad's historical landmark",
      "Three historic visits",
    ],
    itinerary: [
      {
        activity: "Rori Sahib Darshan",
        details: "Visit the main dome and the sacred mound area",
      },
      {
        activity: "Mound Exploration",
        details: "See the relics and ruins associated with the Guru's visit",
      },
      {
        activity: "Spiritual Reflection",
        details: "Quiet time at the pond area mentioned in history",
      },
    ],
  },
];

const DestinationsPage = () => {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[500px] px-4 py-4 md:px-6 md:py-6">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/heroimage.jpg"
              alt="Destinations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-white/80 text-sm mb-4"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                href="/destinations"
                onClick={() => setSelectedDest(null)}
                className="hover:text-white transition-colors"
              >
                Destinations
              </Link>
              {selectedDest && (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">{selectedDest.title}</span>
                </>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-medium"
            >
              {selectedDest ? selectedDest.title : "Destinations"}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <AnimatePresence mode="wait">
          {!selectedDest ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {destinationsData.map((dest, idx) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card
                    hover={true}
                    onClick={() => {
                      setSelectedDest(dest);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="group h-[450px] relative overflow-hidden rounded-[2.5rem] cursor-pointer"
                  >
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {dest.title}
                      </h3>
                      <p className="text-white/70 text-sm font-medium mb-4 flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {dest.location}
                      </p>
                      <p className="text-white/80 line-clamp-2 text-sm mb-6">
                        {dest.shortDesc}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full !rounded-full !bg-white/10 !backdrop-blur-md !border-white/20 !text-white group-hover:!bg-white group-hover:!text-black transition-all"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12"
            >
              <div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedDest(null)}
                  className="mb-8 !rounded-full"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" /> Back to List
                </Button>

                <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-10 shadow-2xl">
                  <Image
                    src={selectedDest.image}
                    alt={selectedDest.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-10">
                  <section>
                    <h2 className="text-3xl font-serif text-zinc-900 mb-6 flex items-center gap-3">
                      <Info className="w-8 h-8 text-zinc-400" /> Historical
                      Context
                    </h2>
                    <p className="text-zinc-600 text-lg leading-relaxed">
                      {selectedDest.fullHistory}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-serif text-zinc-900 mb-6 flex items-center gap-3">
                      <Calendar className="w-8 h-8 text-zinc-400" /> Key
                      Significance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedDest.significance.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-zinc-900" />
                          <span className="text-zinc-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              <aside className="lg:sticky lg:top-8 self-start">
                <Card className="p-8 bg-zinc-900 text-white rounded-[2.5rem] shadow-2xl border-0">
                  <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-white/50" /> Tour Highlights
                  </h3>
                  <div className="space-y-8">
                    {selectedDest.itinerary.map((item, idx) => (
                      <div
                        key={idx}
                        className="relative pl-6 border-l border-white/20"
                      >
                        <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-white shadow-lg shadow-white/50" />
                        <h4 className="font-bold text-lg mb-1">
                          {item.activity}
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link href="/packages" className="block w-full mt-10">
                    <Button className="w-full !bg-white !text-black !rounded-full hover:!bg-zinc-200 transition-colors">
                      Plan This Tour
                    </Button>
                  </Link>
                </Card>
              </aside>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DestinationsPage;
