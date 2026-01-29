"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { Button } from "@/components/ui/Button";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if text should be dark (e.g., on blog index page or when scrolled)
  // For now, let's make it dark on /blog (index) and when scrolled if we add a bg later.
  // The user specifically mentioned the blog page.
  const isLightPage = pathname === "/blog";
  const navTextColor = isLightPage
    ? "text-zinc-900 dark:text-white"
    : "text-white dark:text-zinc-300";

  const iconColor = isLightPage ? "text-zinc-900" : "text-white";

  return (
    <nav className="absolute top-6 left-0 right-0 z-50 px-6 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight font-sans",
              isLightPage
                ? "text-zinc-900 dark:text-white"
                : "text-white dark:text-white",
            )}
          >
            Sikh<span className="text-primary font-serif italic">Roots</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu.Root className="hidden md:flex items-center gap-8">
          <NavigationMenu.List className="flex items-center gap-6">
            <NavigationMenu.Item>
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  navTextColor,
                )}
              >
                Home
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                href="/destinations"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  navTextColor,
                )}
              >
                Destinations
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                href="/visa-processing"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  navTextColor,
                )}
              >
                Visa Processing Service
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                href="/packages"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  navTextColor,
                )}
              >
                Packages
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                href="/blog"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  navTextColor,
                )}
              >
                Blog
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  navTextColor,
                )}
              >
                Contact Us
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Actions */}
        <div className="flex items-center gap-4 ">
          <Button variant="ghost" size="sm" className="!p-2 !rounded-full">
            <Search className={cn("w-5 h-5", iconColor)} />
          </Button>

          <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />

          <Link
            href="/book-now"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent/90 transition-all active:scale-95 shadow-lg shadow-accent/20"
          >
            <Heart className="w-4 h-4 fill-white" />
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:!hidden !p-2"
          >
            {mobileMenuOpen ? (
              <X
                className={cn(
                  "w-6 h-6",
                  isLightPage
                    ? "text-zinc-900"
                    : "text-zinc-900 dark:text-white",
                )}
              />
            ) : (
              <MenuIcon className={cn("w-6 h-6", iconColor)} />
            )}
          </Button>
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
                  <MobileNavLink href="/visa-processing">
                    Visa Processing Service
                  </MobileNavLink>
                  <MobileNavLink href="/packages">Packages</MobileNavLink>
                  <MobileNavLink href="/blog">Blog</MobileNavLink>
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
    className="block text-white dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors py-1 group flex items-center justify-between"
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
