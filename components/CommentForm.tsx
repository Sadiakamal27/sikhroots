"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Textarea, Form, Field } from "@/components/ui";

const CommentForm = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl pt-10"
    >
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
        Leave a Reply
      </h2>
      <p className="text-zinc-500 mb-8">
        Your email address will not be published. Required fields are marked *
      </p>

      <Form onSubmit={handleSubmit} className="space-y-6">
        <Field.Root name="comment">
          <Field.Label className="text-zinc-600 dark:text-zinc-400 font-medium">
            Comment *
          </Field.Label>
          <Field.Control
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            render={
              <Textarea
                placeholder=""
                className="min-h-[200px] bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
              />
            }
            required
          />
          <Field.Error />
        </Field.Root>

        <div className="grid md:grid-cols-1 gap-6">
          <Field.Root name="name">
            <Field.Label className="text-zinc-600 dark:text-zinc-400 font-medium">
              Name *
            </Field.Label>
            <Field.Control
              name="name"
              value={formData.name}
              onChange={handleChange}
              render={
                <Input
                  placeholder=""
                  className="h-12 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                />
              }
              required
            />
            <Field.Error />
          </Field.Root>

          <Field.Root name="email">
            <Field.Label className="text-zinc-600 dark:text-zinc-400 font-medium">
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
                  className="h-12 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                />
              }
              required
            />
            <Field.Error />
          </Field.Root>

          <Field.Root name="website">
            <Field.Label className="text-zinc-600 dark:text-zinc-400 font-medium">
              Website
            </Field.Label>
            <Field.Control
              name="website"
              value={formData.website}
              onChange={handleChange}
              render={
                <Input
                  placeholder=""
                  className="h-12 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
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
            className="mt-1 w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-primary focus:ring-primary"
          />
          <label htmlFor="save-info" className="text-sm text-zinc-500">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

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
          className="!bg-zinc-900 dark:!bg-white !text-white dark:!text-black hover:!opacity-90 !rounded-full !px-10 !py-4 disabled:!opacity-50 disabled:!cursor-not-allowed"
        >
          {isSubmitting ? "Posting..." : "Post Comment"}
        </Button>
      </Form>
    </motion.div>
  );
};

export default CommentForm;
