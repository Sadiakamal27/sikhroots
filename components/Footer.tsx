"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Youtube,
  Send,
  Instagram,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 md:pt-24 pb-10 px-4 md:px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-12 md:pb-16 border-b border-zinc-800/50">
          <div className="max-w-sm space-y-6">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/heroimage.jpg"
                alt="Sikh Yatra Logo"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Sikh Pakistan Yatra — Your perfect spiritual escape, with
              personalized services ensuring every detail of your sacred
              journey.
            </p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 py-12 md:py-16 text-left">
          {/* Discover */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-lg md:text-xl font-bold">Discover</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <FooterLink href="/destinations/kartarpur">
                  Kartarpur Sahib
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/destinations/nankana">
                  Nankana Sahib
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/destinations/panja">Panja Sahib</FooterLink>
              </li>
              <li>
                <FooterLink href="/destinations/dehra">Dehra Sahib</FooterLink>
              </li>
              <li>
                <FooterLink href="/destinations/rori">Rori Sahib</FooterLink>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-lg md:text-xl font-bold">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <FooterLink href="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="/destination">Destination</FooterLink>
              </li>
              <li>
                <FooterLink href="/packages">Packages</FooterLink>
              </li>
              <li>
                <FooterLink href="/faq">FAQ</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-lg md:text-xl font-bold">Support</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <FooterLink href="/help">Help Center</FooterLink>
              </li>
              <li>
                <FooterLink href="/booking">Booking</FooterLink>
              </li>
              <li>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
              </li>
              <li>
                <FooterLink href="/online-support">Online Supports</FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-lg md:text-xl font-bold">Contact Info</h4>
            <ul className="space-y-5 md:space-y-6">
              <li className="space-y-1 md:space-y-2">
                <span className="text-zinc-500 text-xs md:text-sm block">
                  Phone
                </span>
                <a
                  href="tel:+18332073324"
                  className="text-zinc-300 hover:text-white transition-colors font-medium text-sm md:text-base"
                >
                  +1 833 207 3324
                </a>
              </li>
              <li className="space-y-1 md:space-y-2">
                <span className="text-zinc-500 text-xs md:text-sm block">
                  Address
                </span>
                <span className="text-zinc-300 font-medium text-sm md:text-base">
                  9192 Red Branch Road - Suite 300
                  <br />
                  Columbia MD 21045
                </span>
              </li>
              <li className="space-y-1 md:space-y-2">
                <span className="text-zinc-500 text-xs md:text-sm block">
                  Email
                </span>
                <div className="flex flex-col gap-1 overflow-hidden">
                  <a
                    href="mailto:contact@mttours.travel"
                    className="text-zinc-300 hover:text-white transition-colors font-medium text-sm md:text-base break-all sm:break-normal"
                  >
                    contact@mttours.travel
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-zinc-800/50">
          <p className="text-zinc-500 text-xs md:text-sm text-center md:text-left">
            © Sikh Yatra Pakistan. All Right Reserved 2024. Developed by{" "}
            <a
              href="https://mrsinghdev.com"
              className="hover:text-white transition-colors"
            >
              mrsinghdev.com
            </a>
          </p>

          <div className="flex items-center gap-4">
            <SocialIcon icon={Facebook} href="#" />
            <SocialIcon icon={Twitter} href="#" />
            <SocialIcon icon={Youtube} href="#" />
            <SocialIcon icon={Send} href="#" />
            <SocialIcon icon={Instagram} href="#" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-zinc-400 hover:text-white transition-colors flex items-center group"
  >
    <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
    {children}
  </Link>
);

const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white hover:scale-110 transition-all duration-300"
  >
    <Icon className="w-4 h-4" />
  </a>
);

export default Footer;
