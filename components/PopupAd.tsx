"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PopupAdProps {
  adData: {
    title: string;
    imageUrl: string | null;
    link: string | null;
  } | null;
}

const PopupAd = ({ adData }: PopupAdProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup && adData && adData.imageUrl) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [adData]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  if (!adData || !adData.imageUrl) {
    return null;
  }

  const imageContent = (
    <div className="relative w-full aspect-[4/5] md:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-800">
      <Image
        src={adData.imageUrl}
        alt={adData.title}
        fill
        className="object-cover"
        priority
      />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
          />

          {/* Popup */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg md:max-w-xl mx-auto"
            >
              {/* Close Button - Now outside the link */}
              <button
                onClick={handleClose}
                className="absolute -top-3 -right-3 md:-top-5 md:-right-5 z-[70] w-10 h-10 bg-white dark:bg-zinc-900 rounded-full shadow-xl flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-110"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-zinc-900 dark:text-white" />
              </button>

              {adData.link ? (
                <Link
                  href={adData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="block cursor-pointer transition-transform hover:scale-[1.01]"
                >
                  {imageContent}
                </Link>
              ) : (
                imageContent
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupAd;
