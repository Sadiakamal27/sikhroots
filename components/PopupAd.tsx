"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="relative w-full h-[320px] min-h-[280px] max-h-[420px] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
      <Image
        src={adData.imageUrl}
        alt={adData.title}
        fill
        className="object-contain"
        priority
        sizes="(max-width: 512px) 100vw, 512px"
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg mx-auto bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-[70] w-10 h-10 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-zinc-900 dark:text-white transition-transform group-hover:rotate-90" />
              </button>

              <div className="flex flex-col">
                {adData.link ? (
                  <Link
                    href={adData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className="block cursor-pointer"
                  >
                    {imageContent}
                  </Link>
                ) : (
                  imageContent
                )}

                <div className="p-6 md:p-8 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white capitalize">
                      {adData.title !== "Advertisement"
                        ? adData.title
                        : "Special Offer"}
                    </h3>
                  </div>

                  <Link
                    href="/packages"
                    onClick={handleClose}
                    className={cn(
                      "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
                      "px-8 py-4 text-lg bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20",
                      "hover:scale-[1.02] active:scale-[0.98]"
                    )}
                  >
                    View Packages
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopupAd;
