'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

import {
  Menu,
  X,
  Instagram,
  Facebook,
  Mail,
  Phone,
  ChevronDown,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/afribestseeds',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/afribestseeds',
    icon: Facebook,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/255682510710',
    icon: Phone,
  },
  {
    name: 'Email',
    href: 'mailto:sales@afribestseeds.com',
    icon: Mail,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileToolsOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current);
  };

  const toggleMobileTools = () => {
    setMobileToolsOpen((current) => !current);
  };

  return (
    <>
      {/* ================================================================ */}
      {/*                         MAIN HEADER                              */}
      {/* ================================================================ */}

      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-[#F7FAF2] to-[#EAF4DC] backdrop-blur-md border-b border-[#DCE8CC] shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[76px] items-center justify-between gap-4">

            {/* ========================================================== */}
            {/*                            LOGO                            */}
            {/* ========================================================== */}

            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              aria-label="AfriBEST Seeds Home"
            >
              <Image
                src="/logo.png"
                alt="AfriBEST Seeds"
                width={180}
                height={60}
                priority
                className="h-11 sm:h-12 w-auto object-contain"
              />

              <span className="hidden sm:block whitespace-nowrap font-serif font-bold text-xl lg:text-2xl tracking-tight">
                <span className="text-[#7CB518]">
                  AfriBEST
                </span>

                <span className="text-[#2A3D27]">
                  {' '}SEEDS
                </span>
              </span>
            </Link>

            {/* ========================================================== */}
            {/*                     DESKTOP NAVIGATION                     */}
            {/* ========================================================== */}

            <nav className="hidden lg:flex items-center gap-1">

              {/* Home */}
              <Link
                href="/"
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#2A3D27] hover:bg-[#7CB518]/10 hover:text-[#4B7F52] transition-colors"
              >
                Home
              </Link>

              {/* Categories */}
              <Link
                href="/category"
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#2A3D27] hover:bg-[#7CB518]/10 hover:text-[#4B7F52] transition-colors"
              >
                Categories
              </Link>

              {/* All Articles */}
              <Link
                href="/blog"
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#2A3D27] hover:bg-[#7CB518]/10 hover:text-[#4B7F52] transition-colors"
              >
                All Articles
              </Link>

              {/* Product Catalogue */}
              <a
                href="https://catalogue.afribestseeds.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#2A3D27] hover:bg-[#7CB518]/10 hover:text-[#4B7F52] transition-colors"
              >
                Product Catalogue
              </a>

              {/* AfriBEST Tools */}
              <Link
                href="/tools"
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#2A3D27] hover:bg-[#7CB518]/10 hover:text-[#4B7F52] transition-colors"
              >
                AfriBEST TOOLS
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#2A3D27] hover:bg-[#7CB518]/10 hover:text-[#4B7F52] transition-colors"
              >
                About Us
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#2A3D27] hover:bg-[#7CB518]/10 hover:text-[#4B7F52] transition-colors"
              >
                Contact Us
              </Link>

            </nav>

            {/* ========================================================== */}
            {/*                  SOCIAL ICONS + MOBILE BUTTON               */}
            {/* ========================================================== */}

            <div className="flex items-center gap-1 sm:gap-2">

              {/* Desktop Social Icons */}
              <div className="hidden md:flex items-center gap-1">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.name === 'Email'
                          ? undefined
                          : '_blank'
                      }
                      rel={
                        social.name === 'Email'
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-[#4B7F52] hover:bg-[#7CB518]/10 hover:text-[#7CB518] transition-all"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}

              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-10 w-10 text-[#2A3D27] hover:bg-[#7CB518]/10"
                onClick={toggleMobileMenu}
                aria-label={
                  mobileMenuOpen
                    ? 'Close menu'
                    : 'Open menu'
                }
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>

            </div>
          </div>
        </div>
      </header>

      {/* ================================================================ */}
      {/*                         MOBILE NAVIGATION                         */}
      {/* ================================================================ */}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white lg:hidden overflow-y-auto">

          {/* ============================================================ */}
          {/*                      MOBILE HEADER                           */}
          {/* ============================================================ */}

          <div className="sticky top-0 z-10 bg-white border-b border-[#E5EAD9] shadow-sm">

            <div className="container mx-auto px-4 sm:px-6">

              <div className="flex min-h-[76px] items-center justify-between">

                {/* Mobile Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={closeMobileMenu}
                  aria-label="AfriBEST Seeds Home"
                >
                  <Image
                    src="/logo.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />

                  <span className="hidden xs:block font-serif font-bold text-xl">
                    <span className="text-[#7CB518]">
                      AfriBEST
                    </span>

                    <span className="text-[#2A3D27]">
                      {' '}SEEDS
                    </span>
                  </span>
                </Link>

                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMobileMenu}
                  className="h-10 w-10 text-[#2A3D27] hover:bg-[#7CB518]/10"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>

              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/*                      MOBILE LINKS                            */}
          {/* ============================================================ */}

          <div className="container mx-auto px-4 sm:px-6 py-6">

            <nav className="flex flex-col">

              {/* ======================================================== */}
              {/* Home */}
              {/* ======================================================== */}

              <Link
                href="/"
                onClick={closeMobileMenu}
                className="py-4 border-b border-gray-100 text-base font-semibold text-[#2A3D27] hover:text-[#7CB518] transition-colors"
              >
                Home
              </Link>

              {/* ======================================================== */}
              {/* Categories */}
              {/* ======================================================== */}

              <Link
                href="/category"
                onClick={closeMobileMenu}
                className="py-4 border-b border-gray-100 text-base font-semibold text-[#2A3D27] hover:text-[#7CB518] transition-colors"
              >
                Categories
              </Link>

              {/* ======================================================== */}
              {/* All Articles */}
              {/* ======================================================== */}

              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="py-4 border-b border-gray-100 text-base font-semibold text-[#2A3D27] hover:text-[#7CB518] transition-colors"
              >
                All Articles
              </Link>

              {/* ======================================================== */}
              {/* Product Catalogue */}
              {/* ======================================================== */}

              <a
                href="https://catalogue.afribestseeds.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="py-4 border-b border-gray-100 text-base font-semibold text-[#2A3D27] hover:text-[#7CB518] transition-colors"
              >
                Product Catalogue
              </a>

              {/* ======================================================== */}
              {/* AfriBEST TOOLS */}
              {/* ======================================================== */}

              <div className="border-b border-gray-100">

                <button
                  type="button"
                  onClick={toggleMobileTools}
                  className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-[#2A3D27] hover:text-[#7CB518] transition-colors"
                  aria-expanded={mobileToolsOpen}
                >
                  <span>
                    AfriBEST TOOLS
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      mobileToolsOpen
                        ? 'rotate-180'
                        : ''
                    }`}
                  />
                </button>

                {mobileToolsOpen && (
                  <div className="flex flex-col gap-1 pb-4 pl-4">

                    {/* Farm Tools */}
                    <Link
                      href="/tools"
                      onClick={closeMobileMenu}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#4B7F52] hover:bg-[#F3F7ED] hover:text-[#7CB518] transition-colors"
                    >
                      Farm Tools
                    </Link>

                    {/* Farm Calculator */}
                    <Link
                      href="/tools/farm-calculator"
                      onClick={closeMobileMenu}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#4B7F52] hover:bg-[#F3F7ED] hover:text-[#7CB518] transition-colors"
                    >
                      Farm Calculator
                    </Link>

                    {/* Crop Planner */}
                    <Link
                      href="/tools/crop-planner"
                      onClick={closeMobileMenu}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#4B7F52] hover:bg-[#7CB518]/10 hover:text-[#7CB518] transition-colors"
                    >
                      Crop Planner
                    </Link>

                    {/* Farm Guide */}
                    <Link
                      href="/tools/farm-guide"
                      onClick={closeMobileMenu}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#4B7F52] hover:bg-[#F3F7ED] hover:text-[#7CB518] transition-colors"
                    >
                      Farm Guide
                    </Link>

                  </div>
                )}

              </div>

              {/* ======================================================== */}
              {/* About Us */}
              {/* ======================================================== */}

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="py-4 border-b border-gray-100 text-base font-semibold text-[#2A3D27] hover:text-[#7CB518] transition-colors"
              >
                About Us
              </Link>

              {/* ======================================================== */}
              {/* Contact Us */}
              {/* ======================================================== */}

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="py-4 border-b border-gray-100 text-base font-semibold text-[#2A3D27] hover:text-[#7CB518] transition-colors"
              >
                Contact Us
              </Link>

            </nav>

            {/* ========================================================== */}
            {/*                    MOBILE SOCIAL                            */}
            {/* ========================================================== */}

            <div className="mt-8">

              <p className="mb-4 text-sm font-semibold text-[#2A3D27]">
                Connect with AfriBEST Seeds
              </p>

              <div className="flex items-center gap-3">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.name === 'Email'
                          ? undefined
                          : '_blank'
                      }
                      rel={
                        social.name === 'Email'
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F7ED] text-[#4B7F52] hover:bg-[#7CB518] hover:text-white transition-all"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}

              </div>
            </div>

            {/* ========================================================== */}
            {/*                    WHATSAPP CTA                              */}
            {/* ========================================================== */}

            <a
              href="https://wa.me/255682510710"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4B7F52] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#3A6A3D] transition-colors"
            >
              <Phone className="h-5 w-5" />
              Chat with us on WhatsApp
            </a>

          </div>
        </div>
      )}
    </>
  );
}