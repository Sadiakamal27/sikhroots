"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Users } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select, SelectItem } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const Section2 = () => {
  const [totalPersons, setTotalPersons] = useState("2");
  const [totalDays, setTotalDays] = useState("1");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Calculate total based on persons and days
  const calculateTotal = () => {
    const persons = parseInt(totalPersons) || 0;
    const days = parseInt(totalDays) || 1;
    const pricePerPerson =
      persons === 1 ? 250 : persons === 2 ? 200 : persons === 3 ? 300 : 400;
    return `$${pricePerPerson * days}`;
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
          formType: "reservation",
          name,
          phone,
          totalPersons,
          totalDays,
          totalPrice: calculateTotal(),
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Reservation inquiry sent successfully!",
        });
        setName("");
        setPhone("");
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send inquiry. Please try again.",
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
          >
            <Card
              hover={false}
              className="!rounded-3xl !border-2 !border-zinc-200 dark:!border-zinc-800"
            >
              <CardContent className="!p-8 space-y-6">
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
                          {option.persons} Person{option.persons > 1 ? "s" : ""}
                          :
                        </span>
                      </div>
                      <span className="text-xl font-bold text-zinc-900 dark:text-white">
                        {option.price} x 1 Day
                      </span>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card
              hover={false}
              className="!rounded-3xl !border-2 !border-zinc-200 dark:!border-zinc-800"
            >
              <CardHeader className="!pb-0">
                <CardTitle className="!text-center">Reservation Form</CardTitle>
              </CardHeader>
              <CardContent className="!p-8 !pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Total Persons Input */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Total Persons
                      </label>
                      <Input
                        type="number"
                        min={1}
                        max={10}
                        value={totalPersons}
                        onChange={(e) => setTotalPersons(e.target.value)}
                        placeholder="2"
                      />
                    </div>

                    {/* Total Days Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Total Days
                      </label>
                      <Select
                        value={totalDays}
                        onValueChange={(value) => setTotalDays(value || "1")}
                        placeholder="Select days"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
                          <SelectItem key={day} value={String(day)}>
                            {day} {day === 1 ? "Day" : "Days"}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
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

                    {/* Status Message */}
                    {submitStatus.type && (
                      <div
                        className={`p-3 rounded-xl mb-4 text-sm ${
                          submitStatus.type === "success"
                            ? "bg-green-50 text-green-800 border border-green-200"
                            : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    {/* Submit Button with special hover effect */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className={`!w-full transition-all duration-300 disabled:!opacity-50 ${
                        isHovered
                          ? "!bg-zinc-400 dark:!bg-zinc-600 !rounded-2xl"
                          : "!bg-black dark:!bg-white dark:!text-black !rounded-none"
                      }`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {isSubmitting ? "Processing..." : "Make Reservation"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
