"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Users } from "lucide-react";

const Section2 = () => {
  const [totalPersons, setTotalPersons] = useState("2");
  const [totalDays, setTotalDays] = useState("1");
  const [isHovered, setIsHovered] = useState(false);

  // Calculate total based on persons and days
  const calculateTotal = () => {
    const persons = parseInt(totalPersons) || 0;
    const days = parseInt(totalDays) || 1;
    const pricePerPerson =
      persons === 1 ? 250 : persons === 2 ? 200 : persons === 3 ? 300 : 400;
    return `$${pricePerPerson * days}`;
  };

  const pricingOptions = [
    { persons: 1, price: "250$", icon: User },
    { persons: 2, price: "200$", icon: Users },
    { persons: 3, price: "300$", icon: Users },
    { persons: 4, price: "400$", icon: Users },
  ];

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-zinc-900 dark:text-white">Plan Your </span>
            <span className="font-serif italic text-zinc-600 dark:text-zinc-400">
              Yatra
            </span>
            <span className="text-zinc-900 dark:text-white"> With Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 rounded-3xl border-2 border-zinc-200 dark:border-zinc-800 p-8 shadow-lg"
          >
            <div className="space-y-6">
              {pricingOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between py-4 border-b border-zinc-200 dark:border-zinc-800 last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                      </div>
                      <span className="text-lg font-medium text-zinc-900 dark:text-white">
                        {option.persons} Person{option.persons > 1 ? "s" : ""}:
                      </span>
                    </div>
                    <span className="text-xl font-bold text-zinc-900 dark:text-white">
                      {option.price} x 1 Day
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 rounded-3xl border-2 border-zinc-200 dark:border-zinc-800 p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
              Reservation Form
            </h3>

            <form className="space-y-6">
              {/* Total Persons Input */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Total Persons
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={totalPersons}
                  onChange={(e) => setTotalPersons(e.target.value)}
                  placeholder="--2"
                  className="flex h-12 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-base text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Total Days Dropdown */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Total Days
                </label>
                <select
                  value={totalDays}
                  onChange={(e) => setTotalDays(e.target.value)}
                  className="flex h-12 w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-base text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              {/* Total Display */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {calculateTotal()}
                  </span>
                </div>

                {/* Submit Button with special hover effect */}
                <motion.button
                  type="submit"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 font-semibold text-lg text-white transition-all duration-300 ${
                    isHovered
                      ? "bg-zinc-400 dark:bg-zinc-600 rounded-2xl"
                      : "bg-black dark:bg-white dark:text-black rounded-none"
                  }`}
                >
                  Make Reservation
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
