"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Input, Textarea, Card, Form, Field } from "@/components/ui";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ChevronRight,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Send,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
              alt="Contact Us"
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
              <span className="text-white">Contact</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-medium"
            >
              Contact
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Title & Form */}
            <div>
              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-zinc-900 leading-tight">
                  Start Your Travel Story With Us,
                  <br />
                  Don&apos;t Hesitate To{" "}
                  <span className="italic text-zinc-600">Contact Us</span>
                </h2>
              </motion.div>

              {/* Contact Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="p-8 shadow-xl border-0 bg-zinc-50 rounded-3xl">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-8">
                    Lets Get In Touch With Us!
                  </h3>

                  <Form onSubmit={handleSubmit}>
                    {/* Row 1 - Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Field.Root name="fullName">
                        <Field.Control
                          name="fullName"
                          render={
                            <Input placeholder="Full Name" className="h-14" />
                          }
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                        <Field.Error />
                      </Field.Root>

                      <Field.Root name="email">
                        <Field.Control
                          name="email"
                          type="email"
                          render={
                            <Input placeholder="Your Email" className="h-14" />
                          }
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <Field.Error />
                      </Field.Root>
                    </div>

                    {/* Row 2 - Phone & Subject */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Field.Root name="phone">
                        <Field.Control
                          name="phone"
                          type="tel"
                          render={
                            <Input placeholder="Your Phone" className="h-14" />
                          }
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        <Field.Error />
                      </Field.Root>

                      <Field.Root name="subject">
                        <Field.Control
                          name="subject"
                          render={
                            <Input placeholder="Subject" className="h-14" />
                          }
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <Field.Error />
                      </Field.Root>
                    </div>

                    {/* Message */}
                    <Field.Root name="message">
                      <Field.Control
                        name="message"
                        render={
                          <Textarea
                            placeholder="Your Message"
                            className="min-h-[150px]"
                          />
                        }
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <Field.Error />
                    </Field.Root>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="!bg-zinc-900 !text-white hover:!bg-zinc-800 !rounded-full !px-8"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Button>
                  </Form>
                </Card>
              </motion.div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="lg:pt-20">
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-zinc-600 mb-10 leading-relaxed"
              >
                Got questions about your next trip, need itinerary advice, or
                want help with bookings? Our travel experts are ready to assist.
                Whether you&apos;re planning a relaxing getaway or an
                adrenaline-filled adventure, we&apos;re just a message away!
              </motion.p>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Office Location */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Office Location
                    </h4>
                    <p className="text-zinc-600">Wah Cantt, Hassan Abdal</p>
                  </div>
                </motion.div>

                {/* Email Address */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Email Address
                    </h4>
                    <p className="text-zinc-600">info@sikhyatrapakistan.com</p>
                  </div>
                </motion.div>

                {/* Phone Number */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-lg">
                      Office Phone Number
                    </h4>
                    <p className="text-zinc-600">+92 310 9490040</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 pt-8 border-t border-zinc-200"
              >
                <h4 className="font-semibold text-zinc-900 text-lg mb-5">
                  Follow Us On :
                </h4>
                <div className="flex items-center gap-3">
                  <Link
                    href="#"
                    className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/923109490040"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      >
        <span className="hidden group-hover:block bg-white px-4 py-2 rounded-full shadow-lg text-sm font-medium text-zinc-700 transition-all">
          Contact us
        </span>
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default ContactPage;
