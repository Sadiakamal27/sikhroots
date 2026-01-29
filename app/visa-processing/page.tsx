"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck,
  DollarSign,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button, Input, Textarea, Form, Field } from "@/components/ui";

const VisaProcessingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
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
          formType: "comment",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your comment has been submitted.",
        });
        setFormData({
          name: "",
          email: "",
          website: "",
          comment: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to submit comment. Please try again.",
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

  const documents = [
    {
      title: "Passport Front Page",
      desc: "A clear scan of your passport's front page with your details.",
    },
    {
      title: "Passport-sized Photograph",
      desc: "A recent photograph with a white background (usually 2 inches x 2 inches).",
    },
    {
      title: "Proof of Residence",
      desc: "A utility bill, bank statement, or any government-issued ID showing your current address.",
    },
    {
      title: "PR Card (Permanent Residency Card)",
      desc: "If applicable, a scan of both sides of your PR card.",
    },
    {
      title: "Driving License",
      desc: "A scanned copy of your valid driving license (both front and back).",
    },
    {
      title: "Route Information",
      desc: "Details of the route you will take, including the exact locations of the religious sites you plan to visit.",
    },
    {
      title: "Marital Status",
      desc: "If you're married, include a copy of your marriage certificate.",
    },
    {
      title: "Employment Status",
      desc: "A letter from your employer or a business registration if you're self-employed. This confirms your work status.",
    },
  ];

  const steps = [
    {
      title: "Submit Your Documents",
      desc: "First, you'll need to fill out a form with your personal details and submit all the required documents.",
    },
    {
      title: "Visa Fee Payment",
      desc: "After submitting the necessary documents, you'll pay the applicable visa fee based on your nationality (as mentioned above).",
    },
    {
      title: "Application Processing",
      desc: "Once the documents are submitted and the payment is made, I will take care of the rest. I handle the communication with the Pakistani authorities to ensure your application is processed on time.",
    },
    {
      title: "Receive Your Visa",
      desc: "Once the visa is approved, I will send you the visa directly. This can take anywhere from 1 day to a few weeks, depending on the country of your residence.",
    },
  ];

  const reasons = [
    {
      title: "Complete Visa Support",
      desc: "I manage all aspects of your visa application, from gathering documents to submitting your application to the relevant authorities.",
    },
    {
      title: "Quick Processing",
      desc: "With my experience, I ensure your visa application is processed as quickly as possible, so you can focus on preparing for your pilgrimage.",
    },
    {
      title: "Clear Communication",
      desc: "You'll always know the status of your application, and I'm here to answer any questions you may have.",
    },
    {
      title: "Affordable Pricing",
      desc: "I offer competitive and transparent pricing with no hidden fees.",
    },
  ];

  const pricing = [
    { type: "Foreign Nationals", price: "$60 USD" },
    { type: "Indian Passport Holders", price: "$150 USD" },
    { type: "Afghanistan Passport Holders", price: "$200 USD" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[500px] px-4 py-4 md:px-6 md:py-6">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/heroimage.jpg"
              alt="Visa Processing"
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
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-white/80 text-sm mb-4"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-4" />
              <span className="text-white">Visa Processing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium text-center px-4"
            >
              Visa Processing Service
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-8 leading-tight">
              Introduction: Helping Sikh Pilgrims Get Their Pakistan Visa
            </h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
              <p>
                Every year, thousands of Sikh yatris (pilgrims) travel to
                Pakistan to visit some of the most sacred sites of the Sikh
                faith, like Nankana Sahib, the birthplace of Guru Nanak, and
                Kartarpur, where Guru Nanak spent his last years. For Sikh
                pilgrims, the journey to these sites is a sacred pilgrimage, but
                securing a visa can sometimes be a hassle.
              </p>
              <p>
                If you&apos;re planning to visit Pakistan for religious
                purposes, you&apos;re in the right place. I offer a personalized
                visa processing service for Sikh yatris, helping you navigate
                through the paperwork and ensuring that your visa is processed
                smoothly.
              </p>
              <p>
                In this guide, I&apos;ll walk you through the entire process of
                obtaining a Pakistan visa, including the requirements, documents
                needed, fees, and how I can personally assist you every step of
                the way.
              </p>
            </div>
          </motion.div>

          {/* Who Can Apply */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-8">
              Who Can Apply for a Pakistan Visa for Sikh Pilgrims?
            </h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
              <p>
                Pakistan offers a special visa program for Sikh yatris who wish
                to visit religious sites in Pakistan. The visa is available to
                Sikh nationals from various countries, including India,
                Afghanistan, and other foreign nationals.
              </p>
              <p>
                You can apply for a{" "}
                <span className="font-bold text-zinc-900">
                  Sikh Pilgrim Visa
                </span>{" "}
                if you are a Sikh and are planning to visit Pakistan to pay
                respects at religious sites. The visa process is
                straightforward, but there are some specific requirements for
                different nationalities.
              </p>
            </div>
          </motion.div>

          {/* Pilgrims Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden mb-20 shadow-xl"
          >
            <Image
              src="/heroimage.jpg" // Using heroimage as placeholder, update with actual yatri image if available
              alt="Sikh Yatri Group"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Documents Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-6">
              Documents You Need for the Visa Application
            </h2>
            <p className="text-zinc-600 mb-8 text-lg">
              To get your Pakistan visa for Sikh yatris, you will need to gather
              the following documents:
            </p>
            <div className="grid gap-6">
              {documents.map((doc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">
                      {doc.title}:
                    </h3>
                    <p className="text-zinc-600">{doc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Button
                size="lg"
                className="!bg-primary !text-white !rounded-full !px-8 shadow-xl shadow-primary/20"
              >
                Apply For Visa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                className="!bg-zinc-900 !text-white !rounded-full !px-8 shadow-xl shadow-zinc-900/20"
              >
                Send Us A Message
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div> */}
          </div>

          <hr className="border-zinc-100 mb-20" />

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-8">
              The Visa Application Process: What You Need to Know
            </h2>
            <p className="text-zinc-600 mb-12 text-lg">
              The visa application process is relatively straightforward, but
              I&apos;m here to help you every step of the way. Here&apos;s how
              it works:
            </p>
            <div className="grid gap-6 mb-16">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">
                      {step.title}:
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pricing Table */}
            <div className="max-w-2xl overflow-hidden rounded-3xl border border-zinc-100 shadow-sm">
              <div className="grid divide-y divide-zinc-100">
                {pricing.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-6 bg-white hover:bg-zinc-50 transition-colors"
                  >
                    <span className="text-zinc-700 font-medium">
                      {item.type}
                    </span>
                    <span className="text-zinc-900 font-bold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-zinc-100 mb-20" />

          {/* Why Choose Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-10 text-center">
              Why Choose My Personalized Visa Service?
            </h2>
            <p className="text-zinc-600 mb-12 text-lg text-center max-w-3xl mx-auto">
              I&apos;m not just another visa processing service; I provide a
              personalized, hands-on service for Sikh yatris. Here&apos;s what
              sets me apart:
            </p>
            <div className="grid gap-6">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1">
                      {reason.title}:
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" rounded-[3rem] p-10 md:p-16 text-zinc-900 text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8 ">
              Conclusion: Start Your Spiritual Journey with Confidence
            </h2>
            <div className="space-y-6 text-zinc-900/80 max-w-4xl mx-auto text-lg mb-10">
              <p>
                The journey to Pakistan&apos;s sacred Sikh sites is a profound
                and deeply meaningful experience. I am here to make sure your
                visa application is processed without hassle, so you can focus
                on your pilgrimage.
              </p>
              <p>
                To get started, simply fill out the form below with your
                required documents, and I will take care of the rest. I&apos;ll
                make sure your visa is approved smoothly and quickly so you can
                start your sacred journey to Pakistan with peace of mind.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 text-sm uppercase tracking-widest font-bold">
                  Tags :
                </span>
                <span className="px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-sm font-medium">
                  Uncategorized
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-zinc-500 text-sm uppercase tracking-widest font-bold">
                  Share This :
                </span>
                <div className="flex items-center gap-3">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leave a Reply Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl pt-10"
          >
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              Leave a Reply
            </h2>
            <p className="text-zinc-500 mb-8">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <Form onSubmit={handleSubmit} className="space-y-6">
              <Field.Root name="comment">
                <Field.Label className="text-zinc-600 font-medium">
                  Comment *
                </Field.Label>
                <Field.Control
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  render={
                    <Textarea
                      placeholder=""
                      className="min-h-[200px] bg-white border-zinc-200"
                    />
                  }
                  required
                />
                <Field.Error />
              </Field.Root>

              <div className="grid md:grid-cols-1 gap-6">
                <Field.Root name="name">
                  <Field.Label className="text-zinc-600 font-medium">
                    Name *
                  </Field.Label>
                  <Field.Control
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    render={
                      <Input
                        placeholder=""
                        className="h-12 bg-white border-zinc-200"
                      />
                    }
                    required
                  />
                  <Field.Error />
                </Field.Root>

                <Field.Root name="email">
                  <Field.Label className="text-zinc-600 font-medium">
                    Email *
                  </Field.Label>
                  <Field.Control
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    render={
                      <Input
                        placeholder=""
                        className="h-12 bg-white border-zinc-200"
                      />
                    }
                    required
                  />
                  <Field.Error />
                </Field.Root>

                <Field.Root name="website">
                  <Field.Label className="text-zinc-600 font-medium">
                    Website
                  </Field.Label>
                  <Field.Control
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    render={
                      <Input
                        placeholder=""
                        className="h-12 bg-white border-zinc-200"
                      />
                    }
                  />
                  <Field.Error />
                </Field.Root>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input
                  type="checkbox"
                  id="save-info"
                  className="mt-1 w-4 h-4 rounded border-zinc-300 text-primary focus:ring-primary"
                />
                <label htmlFor="save-info" className="text-sm text-zinc-500">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

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

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="!bg-zinc-900 !text-white hover:!bg-zinc-800 !rounded-full !px-10 !py-4 disabled:!opacity-50 disabled:!cursor-not-allowed"
              >
                {isSubmitting ? "Posting..." : "Post Comment"}
              </Button>
            </Form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VisaProcessingPage;
