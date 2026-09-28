import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sprout,
  Users,
  Wheat,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

import HeroCarousel from "@/components/home/HeroCarousel";

export const metadata = {
  title: "About Us | AfriBEST SEEDS",
  description:
    "Learn about AfriBEST SEEDS, our work with vegetable seeds, farmers and agriculture, and our commitment to Pure Seeds for Better Yield.",
};

const focusAreas = [
  {
    icon: Sprout,
    title: "Vegetable Seeds",
    description:
      "We provide a wide range of vegetable seed varieties covering tomatoes, cabbage, leafy vegetables, onions, cucumber, peppers, eggplant, carrots, okra, herbs and other crops.",
  },
  {
    icon: Users,
    title: "Supporting Farmers",
    description:
      "We aim to make quality seed varieties accessible to farmers and growers while providing useful information to help them make informed crop decisions.",
  },
  {
    icon: Wheat,
    title: "Better Crop Production",
    description:
      "Our work begins with the seed and extends to helping growers understand the importance of good crop establishment, proper management and informed variety selection.",
  },
  {
    icon: HeartHandshake,
    title: "Farmer Partnership",
    description:
      "We believe agriculture grows stronger when seed suppliers, farmers and agricultural communities work together toward productive and sustainable farming.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "We place importance on quality seed and responsible agricultural products that farmers can confidently consider for their production.",
  },
  {
    icon: Users,
    title: "Farmers First",
    description:
      "Farmers are at the heart of what we do. Our products and information are presented with practical farming needs in mind.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge",
    description:
      "We believe that quality seed works best when combined with good farming knowledge, planning and crop management.",
  },
  {
    icon: HeartHandshake,
    title: "Trust",
    description:
      "We seek to build long-term relationships with farmers, growers, distributors and agricultural partners.",
  },
];

const milestones = [
  {
    number: "01",
    title: "Quality Seeds",
    text: "Providing vegetable seed varieties for different farming needs.",
  },
  {
    number: "02",
    title: "Farmer Support",
    text: "Sharing practical information that helps growers make better crop decisions.",
  },
  {
    number: "03",
    title: "Product Diversity",
    text: "Offering varieties across many important vegetable crop categories.",
  },
  {
    number: "04",
    title: "Agricultural Growth",
    text: "Contributing to productive farming and a stronger agricultural future.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#063d29] md:min-h-[760px]">

        {/* Hero carousel is now handled by the separate Client Component */}
        <HeroCarousel />

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />

      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="images/mustard1.jpg"
                alt="Farmer working in an agricultural field"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063D27]/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A863]">
                    {/* <Sprout className="h-6 w-6" /> */}
                    <Image
                    src="/logo1.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
                  </div>

                  <div>
                    <p className="font-black">AfriBEST SEEDS</p>
                    <p className="text-sm text-white/80">
                      Pure Seeds for Better Yield
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-5 hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF8F1]">
                  <MapPin className="h-5 w-5 text-[#00A863]" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Head Office
                  </p>
                  <p className="text-sm font-black text-[#123B2A]">
                    Moshono, Arusha
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
              Who We Are
            </div>

            <h2 className="text-3xl font-black leading-tight text-[#123B2A] sm:text-4xl lg:text-5xl">
              We believe better farming starts with the right seed.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              AfriBEST SEEDS is dedicated to the agricultural sector, with a
              strong focus on vegetable seed varieties for farmers and
              growers. Our product range covers many crops, giving farmers
              different options for their production needs.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              From tomatoes, cabbage and onions to kale, cucumber, peppers,
              eggplant, carrots, okra, herbs and other vegetables, we provide
              seed choices for different types of growers and farming
              operations.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              We also believe that seeds are only one part of successful
              farming. Good variety selection, proper crop establishment,
              responsible crop management and useful agricultural knowledge
              all play an important role.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Vegetable seed varieties",
                "Farmer-focused solutions",
                "Agricultural knowledge",
                "Long-term partnerships",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#F3FBF7] px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00A863]" />
                  <span className="text-sm font-bold text-[#123B2A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MOTO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#075C3A] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#00A863]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#73E6AF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#73E6AF] ring-1 ring-white/20">
            {/* <Sprout className="h-8 w-8" /> */}
                    <Image
                    src="/logo1.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#73E6AF]">
            Our Motto
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pure Seeds
            <span className="text-[#73E6AF]"> for Better Yield</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            Our motto expresses our focus on quality seed as an important
            foundation for vegetable production. We want farmers to start
            their crops with seed choices that support their production goals,
            while combining good seed with good farming practices.
          </p>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}
      <section className="bg-[#F5FBF8] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
              What We Do
            </div>

            <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl lg:text-5xl">
              Supporting farmers from seed to production
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              AfriBEST SEEDS focuses on making vegetable seed varieties
              available while building a useful connection between quality
              seed, farming knowledge and agricultural production.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8F1] text-[#00A863] transition-colors duration-300 group-hover:bg-[#00A863] group-hover:text-white">
                    <Image
                    src="/logo1.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#123B2A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
              Our Approach
            </div>

            <h2 className="text-3xl font-black leading-tight text-[#123B2A] sm:text-4xl lg:text-5xl">
              Simple principles. Practical agriculture.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Agriculture is built on many decisions. The choice of seed is
              one of the first. We therefore aim to make our products easy to
              understand and help farmers identify varieties that fit their
              intended crops and production needs.
            </p>

            <div className="mt-8 space-y-5">
              {milestones.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#075C3A] text-sm font-black text-white">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="font-black text-[#123B2A]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="images/DB3.jpeg"
                alt="Farmer caring for vegetable seedlings"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063D27]/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-bold uppercase tracking-wider text-[#73E6AF]">
                  Our Philosophy
                </p>

                <p className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Better seeds. Better choices. Better farming possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-[#F5FBF8] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
              Our Values
            </div>

            <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl lg:text-5xl">
              What guides AfriBEST SEEDS
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Our work is guided by a simple commitment: provide useful
              agricultural products and build relationships that support
              farmers and the wider agricultural community.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#075C3A] text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-[#123B2A]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION / COMPANY
      ========================================================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="images/back1.png"
            alt="Agricultural landscape"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#063D27]/90" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#73E6AF]">
                <MapPin className="h-5 w-5" />
                Where We Are
              </div>

              <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                Based in Arusha.
                <span className="block text-[#73E6AF]">
                  Connected to farmers.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                AfriBEST SEEDS. is based in Moshono, Arusha,
                Tanzania, along Nelson Mandela Road. Our location provides a
                base for serving farmers, growers and agricultural partners.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A863] text-white">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#73E6AF]">
                    Head Office
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    AfriBEST SEEDS.
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Plot #432, Moshono, Arusha,
                    <br />
                    Along Nelson Mandela Road,
                    <br />
                    Tanzania.
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-5">
                    <p className="text-sm text-white/70">
                      Email:{" "}
                      <span className="font-semibold text-white">
                        sales@afribestseeds.com
                      </span>
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      Phone:{" "}
                      <span className="font-semibold text-white">
                        +255 682 510 710
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#EAF8F1]">
          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#00A863]/10" />
            <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-[#075C3A]/10" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A863] text-white shadow-lg">
                {/* <Sprout className="h-6 w-6" /> */}
                    <Image
                    src="/logo1.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#00A863]">
                Pure Seeds for Better Yield
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#123B2A] sm:text-4xl">
                Let&apos;s grow a better agricultural future together.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Explore our vegetable seed varieties, learn more about our
                products or get in touch with AfriBEST SEEDS for assistance.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                href="https://catalogue.afribestseeds.com"
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#00A863] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00A863]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#008F55]"
                >
                  Explore Our Seeds
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-[#075C3A]/20 bg-white px-6 py-3.5 text-sm font-bold text-[#075C3A] transition-all duration-300 hover:bg-[#F5FBF8]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}