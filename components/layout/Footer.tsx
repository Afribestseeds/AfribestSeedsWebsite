import Link from 'next/link';
import Image from 'next/image';

import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  MessageCircle,
  ExternalLink,
  Navigation,
} from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import FooterBrandCopyright from '../clientComponent/FooterBrandCopyright';

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Seed Category', href: '/category' },
  { name: 'Contact Us', href: '/contact' },
  {
    name: 'Product Catalogue',
    href: 'https://catalogue.afribestseeds.com/',
    external: true,
  },
  { name: 'AfriBEST Tools', href: '/tools' },
];

const branches = [
  {
    name: 'Headquarters',
    phone: '+255 714 199 128',
    phone2: '+255 682 510 710',
  },
  {
    name: 'Southern Zone',
    phone: '+255 677 242 791',
  },
  {
    name: 'Northern Zone',
    phone: '+255 756 321 662',
  },
  {
    name: 'Lake Zone',
    phone: '+255 712 216 292',
  },
  {
    name: 'Eastern Zone',
    phone: '+255 743 916 626',
  },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/afribestseeds',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/afribestseeds',
    icon: Instagram,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/255682510710',
    icon: MessageCircle,
  },
  {
    name: 'Email',
    href: 'mailto:sales@afribestseeds.com',
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#075C3A] text-white">

      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#00A863]/15 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#73E6AF]/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative">

        {/* =========================================================
            GOOGLE MAP — FULL WIDTH HORIZONTAL
        ========================================================== */}
        <div className="px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-2 shadow-2xl">

            {/* Map Header */}
            <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A863] shadow-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#73E6AF]">
                    Visit AfriBEST SEEDS
                  </p>

                  <h3 className="mt-0.5 text-sm font-bold text-white sm:text-base">
                    Moshono, Arusha — Tanzania
                  </h3>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=AfriBEST+SEEDS+COMPANY+LTD+Moshono+Arusha+Tanzania"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#00A863]"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

            </div>

            {/* Horizontal Map */}
            <div className="relative h-[230px] overflow-hidden rounded-[1.35rem] sm:h-[280px] lg:h-[320px]">

              <iframe
                title="AfriBEST SEEDS location"
                src="https://www.google.com/maps?q=AfriBEST%20SEEDS%20LTD%2C%20Moshono%2C%20Arusha%2C%20Tanzania&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Bottom Label */}
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <div className="flex items-center gap-3 rounded-xl bg-[#075C3A]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:w-fit">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00A863]">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-white">
                      AfriBEST SEEDS.
                    </p>

                    <p className="mt-0.5 text-[11px] text-white/65">
                      Plot #432, Moshono, Along Nelson Mandela Road
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>


        {/* =========================================================
            MAIN FOOTER CONTENT
        ========================================================== */}
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pt-16">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">

            {/* =====================================================
                BRAND / CONTACT
            ====================================================== */}
            <div className="lg:col-span-5">

              <Link
                href="/"
                className="inline-flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="AfriBEST Seeds"
                  width={190}
                  height={65}
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <div className="mt-5">

                <p className="text-lg font-black text-white">
                  Pure Seeds
                  <span className="text-[#73E6AF]"> for Better Yield</span>
                </p>

              </div>


              {/* Contact Details */}
              <div className="mt-7 space-y-4">


                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <MapPin className="h-4 w-4 text-[#73E6AF]" />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                      Head Office
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/75">
                      Plot #432, Moshono,
                      <br />
                      Along Nelson Mandela Road,
                      <br />
                      Arusha, Tanzania
                    </p>
                  </div>

                </div>

              </div>


              {/* Social Media */}
              <div className="mt-7">

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  Connect With Us
                </p>

                <div className="flex items-center gap-2.5">

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
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A863] hover:bg-[#00A863] hover:text-white"
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </a>
                    );
                  })}

                </div>
              </div>

            </div>


            {/* =====================================================
                COMPANY LINKS
            ====================================================== */}
            <div className="lg:col-span-3">

              <div className="mb-5">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#73E6AF]">
                  Explore
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  Company
                </h3>

              </div>

              <ul className="space-y-1">

                {company.map((item) => (
                  <li key={item.name}>

                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center rounded-lg py-2 text-sm text-white/60 transition-all hover:bg-white/[0.04] hover:pl-2 hover:text-white"
                      >
                        <ChevronRight className="mr-2 h-3.5 w-3.5 text-[#00A863] transition-transform group-hover:translate-x-1" />

                        {item.name}

                        <ExternalLink className="ml-2 h-3 w-3 opacity-40" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="group flex items-center rounded-lg py-2 text-sm text-white/60 transition-all hover:bg-white/[0.04] hover:pl-2 hover:text-white"
                      >
                        <ChevronRight className="mr-2 h-3.5 w-3.5 text-[#00A863] transition-transform group-hover:translate-x-1" />

                        {item.name}
                      </Link>
                    )}

                  </li>
                ))}

              </ul>

            </div>


            {/* =====================================================
                QUICK CONTACT / WHY AFRIBEST
            ====================================================== */}
            <div className="lg:col-span-4">

              <div className="mb-5">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#73E6AF]">
                  Our Network
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  Regional Support
                </h3>

              </div>

              <p className="mb-5 text-sm leading-6 text-white/55">
                Connect with our regional teams for sales enquiries,
                product information and agricultural support.
              </p>


              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

                {branches.map((branch) => (
                  <div
                    key={branch.name}
                    className="group rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition-all duration-300 hover:border-[#00A863]/40 hover:bg-white/[0.07]"
                  >

                    <div className="flex items-start gap-3">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00A863]/15">
                        <Phone className="h-3.5 w-3.5 text-[#73E6AF]" />
                      </div>

                      <div className="min-w-0">

                        <h4 className="text-xs font-bold text-white">
                          {branch.name}
                        </h4>

                        <a
                          href={`tel:${branch.phone.replace(/\s/g, '')}`}
                          className="mt-1 block text-xs text-white/55 transition-colors hover:text-[#73E6AF]"
                        >
                          {branch.phone}
                        </a>

                        {branch.phone2 && (
                          <a
                            href={`tel:${branch.phone2.replace(/\s/g, '')}`}
                            className="mt-0.5 block text-xs text-white/55 transition-colors hover:text-[#73E6AF]"
                          >
                            {branch.phone2}
                          </a>
                        )}

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* =========================================================
              BOTTOM
          ========================================================== */}
          <Separator className="my-9 bg-white/10" />

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="text-xs text-white/45 sm:text-sm">
              <FooterBrandCopyright />
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45 sm:text-sm">

              <Link
                href="/"
                className="transition-colors hover:text-[#73E6AF]"
              >
                Terms of Service
              </Link>

              <span className="hidden text-white/15 sm:inline">
                •
              </span>

              <Link
                href="/"
                className="transition-colors hover:text-[#73E6AF]"
              >
                Privacy Policy
              </Link>

              <span className="hidden text-white/15 sm:inline">
                •
              </span>

              <Link
                href="/"
                className="transition-colors hover:text-[#73E6AF]"
              >
                Cookie Policy
              </Link>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}