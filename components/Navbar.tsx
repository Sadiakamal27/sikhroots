"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Menu as MenuIcon,
  X,
  ChevronDown,
  ExternalLink,
  Search,
  User,
  Heart,
} from "lucide-react";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { Popover } from "@base-ui/react/popover";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 py-3"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white font-sans">
            Sikh<span className="text-primary font-serif italic">Roots</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu.Root className="hidden md:flex items-center gap-8">
          <NavigationMenu.List className="flex items-center gap-6">
            <NavigationMenu.Item>
              <Link
                href="/"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors"
              >
                Home
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 group">
                Destinations
                <ChevronDown className="w-4 h-4 group-data-[open]:rotate-180 transition-transform" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Portal>
                <NavigationMenu.Content className="absolute top-full left-0 mt-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 min-w-[400px] animate-in fade-in zoom-in-95 duration-200">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        Popular Sites
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <NavLink href="/destinations/kartarpur">
                            Kartarpur Sahib
                          </NavLink>
                        </li>
                        <li>
                          <NavLink href="/destinations/nankana">
                            Nankana Sahib
                          </NavLink>
                        </li>
                        <li>
                          <NavLink href="/destinations/panja">
                            Panja Sahib
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                        More Locations
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <NavLink href="/destinations/dehra">
                            Dehra Sahib
                          </NavLink>
                        </li>
                        <li>
                          <NavLink href="/destinations/rori">
                            Rori Sahib
                          </NavLink>
                        </li>
                        <li>
                          <NavLink href="/destinations/all">View All</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Portal>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                href="/visa-sourcing"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors"
              >
                Visa Sourcing
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                href="/packages"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors"
              >
                Packages
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                href="/contact"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>

          <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />

          <Link
            href="/book-now"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent/90 transition-all active:scale-95 shadow-lg shadow-accent/20"
          >
            <Heart className="w-4 h-4 fill-white" />
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-300"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Menu
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <MobileNavLink href="/">Home</MobileNavLink>
                  <MobileNavLink href="/destinations">
                    Destinations
                  </MobileNavLink>
                  <MobileNavLink href="/visa-sourcing">
                    Visa Sourcing
                  </MobileNavLink>
                  <MobileNavLink href="/packages">Packages</MobileNavLink>
                  <MobileNavLink href="/contact">Contact Us</MobileNavLink>
                  <MobileNavLink href="/about">About</MobileNavLink>
                </div>
              </div>

              <Link
                href="/book-now"
                className="w-full py-4 bg-primary text-white rounded-2xl text-center font-bold shadow-xl shadow-primary/20"
              >
                Book Your Yatra
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors py-1 group flex items-center justify-between"
  >
    {children}
    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
  </Link>
);

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-lg font-medium text-zinc-900 dark:text-white hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;
