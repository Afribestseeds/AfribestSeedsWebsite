import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Leaf,
  MessageCircle,
  Sprout,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import ToolsCarousel from "@/components/home/ToolsCarousel";

export const metadata = {
  title: "Farming Tools & Equipment | AfriBEST TOOLS",
  description:
    "Explore farming tools and crop production equipment from AfriBEST TOOLS, including knapsack sprayers, drip irrigation systems, seedling trays and cocopeat.",
};

const sprayerParts = [
  "Spray tank",
  "Pump system",
  "Spray lance",
  "Nozzle",
  "Trigger handle",
  "Hose",
  "Straps",
  "Pressure components",
];

const dripCategories = [
  {
    name: "Drip Lines",
    description:
      "Designed to deliver water close to the crop root zone for controlled irrigation.",
    size: "Different sizes available",
  },
  {
    name: "Drip Tape",
    description:
      "A practical irrigation option for crop rows where controlled water delivery is required.",
    size: "Different sizes available",
  },
  {
    name: "Connectors & Fittings",
    description:
      "Used to join, branch and connect different parts of a drip irrigation system.",
    size: "Multiple connection options",
  },
  {
    name: "Main & Distribution Pipes",
    description:
      "Used to move water from the water source towards crop irrigation lines.",
    size: "Different pipe sizes",
  },
  {
    name: "Filters",
    description:
      "Used as part of irrigation systems to help manage water entering the distribution network.",
    size: "System-dependent",
  },
  {
    name: "Valves",
    description:
      "Useful for controlling and managing water flow through different irrigation sections.",
    size: "Different options",
  },
];

const toolHighlights = [
  {
    icon: Sprout,
    title: "Crop Establishment",
    description:
      "Tools that support farmers from seedling preparation through field crop management.",
  },
  {
    icon: Droplets,
    title: "Efficient Watering",
    description:
      "Irrigation equipment designed to help farmers manage water delivery according to their crop setup.",
  },
  {
    icon: Leaf,
    title: "Crop Care",
    description:
      "Spraying equipment can support routine crop-care activities when used correctly and responsibly.",
  },
  {
    icon: Wrench,
    title: "Practical Farming Tools",
    description:
      "Useful equipment for farmers, nurseries, vegetable growers and other agricultural operations.",
  },
];

const seedlingTrayFeatures = [
  "Supports organized seedling production",
  "Individual cells help separate seedlings",
  "Useful for nursery management",
  "Makes handling young plants easier",
  "Suitable for different vegetable seedlings",
  "Useful for transplant preparation",
];

const cocopeatFeatures = [
  "Useful growing medium for seedling production",
  "Helps provide a suitable environment around young roots",
  "Can be used in nursery and propagation systems",
  "Lightweight and practical to handle",
  "Useful when preparing planting media",
  "Can be combined with other suitable growing materials",
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white">

    {/* ================================================================== */}
    {/* HERO                                                               */}
    {/* ================================================================== */}
      
    <section className="relative min-h-[680px] overflow-hidden bg-[#063d29] md:min-h-[760px]">
      
      {/* Hero carousel is now handled by the separate Client Component */}
      <ToolsCarousel />
      
      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />
      
    </section>

      {/* =========================================================
          INTRO / TOOL HIGHLIGHTS
      ========================================================= */}
      <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
              Farming Support
            </div>

            <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl lg:text-5xl">
              Practical tools for everyday crop production
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Good farming requires more than quality seed. Farmers also need
              practical tools for establishing seedlings, supplying water,
              caring for crops and managing their production activities.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {toolHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF8F1] text-[#00A863] transition-all duration-300 group-hover:bg-[#00A863] group-hover:text-white">
                    <Image
                    src="/logo2.png"
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
          TOOLS SECTION
      ========================================================= */}
      <section
        id="farming-tools"
        className="bg-[#F5FBF8] px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
              Our Farming Tools
            </div>

            <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl lg:text-5xl">
              Tools designed around real farming needs
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Explore our range of practical agricultural equipment and
              materials for spraying, irrigation, nursery production and
              seedling establishment.
            </p>
          </div>

          {/* =====================================================
              KNAPSACK SPRAYER
          ===================================================== */}
          <div className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[400px] overflow-hidden">
                <Image
                  src="images/clear4.jpg"
                  alt="Farmer working with agricultural crops"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#043D27]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-[#00A863] px-4 py-2 text-xs font-bold text-white shadow-lg">
                    CROP CARE EQUIPMENT
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF8F1] text-[#00A863]">
                    <Image
                    src="/logo2.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                      Spraying Equipment
                    </p>

                    <h3 className="text-3xl font-black text-[#123B2A]">
                      Knapsack Sprayer
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  A knapsack sprayer is a practical crop-care tool carried on
                  the farmer&apos;s back and used to apply agricultural liquids
                  to crops. It can be useful for crop-care activities where
                  controlled spraying is required.
                </p>

                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                    Available Sizes
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-[#00A863]/10 bg-[#F5FBF8] p-5">
                      <p className="text-3xl font-black text-[#075C3A]">
                        2L
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        2 Litre Sprayer
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#00A863]/10 bg-[#F5FBF8] p-5">
                      <p className="text-3xl font-black text-[#075C3A]">
                        5L
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        5 Litre Sprayer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                    Key Strengths
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      "Practical crop-care equipment",
                      "Portable design",
                      "Suitable for targeted spraying",
                      "Useful for different crop-care tasks",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm font-semibold text-[#123B2A]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00A863]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/255682510710?text=Hello%20AfriBEST%20SEEDS,%20I%20would%20like%20information%20about%20the%20knapsack%20sprayers."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-xl bg-[#075C3A] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A863]"
                >
                  Ask About Sprayers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* =====================================================
              SPRAYER PARTS
          ===================================================== */}
          <div className="mt-8 grid gap-8 lg:grid-cols-5">
            <div className="relative overflow-hidden rounded-[2rem] lg:col-span-2">
              <Image
                src="images/clear1.jpg"
                alt="Agricultural equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#043D27]/80" />

              <div className="relative flex min-h-[360px] flex-col justify-end p-7 sm:p-10">
                <Badge className="w-fit border-0 bg-[#00A863] text-white hover:bg-[#00A863]">
                  Replacement Components
                </Badge>

                <h3 className="mt-4 text-3xl font-black text-white">
                  Knapsack Sprayer Parts
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  Properly maintained sprayer components are important for
                  keeping spraying equipment functional and ready for use.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-7 shadow-xl sm:p-10 lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A863]">
                Sprayer Components
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#123B2A]">
                Parts available for your spraying equipment
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Depending on the sprayer model and availability, commonly
                required components can include:
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {sprayerParts.map((part) => (
                  <div
                    key={part}
                    className="flex items-center gap-3 rounded-xl bg-[#F3FBF7] px-4 py-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#00A863] shadow-sm">
                      <Wrench className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-bold text-[#123B2A]">
                      {part}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              DRIP IRRIGATION
          ===================================================== */}
          <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#075C3A] shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="order-2 p-7 sm:p-10 lg:order-1 lg:p-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#73E6AF] ring-1 ring-white/10">
                    <Image
                    src="/logo2.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#73E6AF]">
                      Irrigation Solutions
                    </p>

                    <h3 className="text-3xl font-black text-white">
                      Drip Irrigation System
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-white/75">
                  Drip irrigation is a method of delivering water through an
                  irrigation network towards the crop root zone. It can be
                  useful for vegetable farms, nurseries and other crops where
                  controlled water delivery is important.
                </p>

                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#73E6AF]">
                    Why Farmers Use Drip Irrigation
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Controlled water delivery",
                      "Useful for row-based vegetable production",
                      "Can support organized irrigation layouts",
                      "Suitable for different farm sizes",
                      "Can be divided into irrigation zones",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm font-semibold text-white/90"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#73E6AF]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/255682510710?text=Hello%20AfriBEST%20SEEDS,%20I%20would%20like%20information%20about%20your%20drip%20irrigation%20systems."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-xl bg-[#00A863] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#008F55]"
                >
                  Ask About Drip Irrigation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="relative order-1 min-h-[400px] overflow-hidden lg:order-2">
                <Image
                  src="images/irigation.jpg"
                  alt="Agricultural field"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-l from-[#075C3A]/20 to-[#075C3A]/70" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                    <Image
                    src="/logo2.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />

                      <div>
                        <p className="font-black text-white">
                          Controlled Water Delivery
                        </p>

                        <p className="text-xs text-white/70">
                          Irrigation components for organized crop watering.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DRIP CATEGORIES */}
          <div className="mt-8">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#00A863]">
                Drip Irrigation Categories
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#123B2A]">
                Build an irrigation system around your farm
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {dripCategories.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF8F1] text-[#00A863]">
                    <Image
                    src="/logo2.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
                    </div>

                    <span className="rounded-full bg-[#F3FBF7] px-3 py-1 text-[11px] font-bold text-[#075C3A]">
                      {item.size}
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg font-black text-[#123B2A]">
                    {item.name}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              SEEDLING TRAYS
          ===================================================== */}
          <div className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[420px]">
                <Image
                  src="images/seedtray.jpg"
                  alt="Vegetable seedlings in nursery production"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#043D27]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#075C3A] shadow-lg">
                    NURSERY EQUIPMENT
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF8F1] text-[#00A863]">
                    <Image
                    src="/logo2.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                      Nursery Production
                    </p>

                    <h3 className="text-3xl font-black text-[#123B2A]">
                      Seedling Trays
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  Seedling trays provide an organized way of raising young
                  plants before they are transplanted to their growing
                  location. They are particularly useful for vegetable
                  nurseries where many seedlings need to be managed together.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {seedlingTrayFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm font-semibold text-[#123B2A]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00A863]" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-[#F3FBF7] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                    Ideal For
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Vegetable nurseries, seedling production, transplant
                    preparation and organized propagation.
                  </p>
                </div>

                <a
                  href="https://wa.me/255682510710?text=Hello%20AfriBEST%20SEEDS,%20I%20would%20like%20information%20about%20seedling%20trays."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center rounded-xl bg-[#075C3A] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A863]"
                >
                  Ask About Seedling Trays
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* =====================================================
              COCOPEAT
          ===================================================== */}
          <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#123B2A] shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="order-2 p-7 sm:p-10 lg:order-1 lg:p-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A863] text-white">
                    <Image
                    src="/logo2.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#73E6AF]">
                      Growing Medium
                    </p>

                    <h3 className="text-3xl font-black text-white">
                      Cocopeat
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-white/75">
                  Cocopeat is a growing medium commonly used in nursery and
                  seedling production. It can provide a practical environment
                  for young plants when preparing seedlings and propagation
                  systems.
                </p>

                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#73E6AF]">
                    Key Strengths
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {cocopeatFeatures.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm font-semibold text-white/90"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#73E6AF]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">
                    A useful companion for seedling production
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Cocopeat can be used as part of a nursery growing-media
                    setup alongside appropriate materials and good nursery
                    management practices.
                  </p>
                </div>

                <a
                  href="https://wa.me/255682510710?text=Hello%20AfriBEST%20SEEDS,%20I%20would%20like%20information%20about%20cocopeat."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-xl bg-[#00A863] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#008F55]"
                >
                  Ask About Cocopeat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="relative order-1 min-h-[420px] overflow-hidden lg:order-2">
                <Image
                  src="images/soil.jpg"
                  alt="Plant growing in agricultural soil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-l from-[#123B2A]/20 to-[#123B2A]/75" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-md">
                    <p className="text-sm font-bold text-[#73E6AF]">
                      Nursery Growing Medium
                    </p>

                    <p className="mt-2 text-lg font-black text-white">
                      Supporting healthy seedling establishment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FARMING JOURNEY
      ========================================================= */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
                From Nursery to Field
              </div>

              <h2 className="text-3xl font-black leading-tight text-[#123B2A] sm:text-4xl lg:text-5xl">
                Tools that support different stages of crop production
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                AfriBEST TOOLS brings together products that can support
                different stages of vegetable production — from preparing
                seedlings to supplying water and caring for established crops.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    number: "01",
                    title: "Prepare",
                    text: "Use seedling trays and suitable growing media for organized nursery production.",
                  },
                  {
                    number: "02",
                    title: "Establish",
                    text: "Move healthy seedlings into their growing environment with appropriate crop management.",
                  },
                  {
                    number: "03",
                    title: "Irrigate",
                    text: "Use suitable irrigation equipment to manage water delivery according to the crop setup.",
                  },
                  {
                    number: "04",
                    title: "Care",
                    text: "Use appropriate crop-care tools such as sprayers as part of responsible crop management.",
                  },
                ].map((item) => (
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="images/4.jpeg"
                  alt="Vegetable farming field"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#043D27]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                    <Image
                    src="/logo2.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
                      <div>
                        <p className="font-black text-white">
                          Better Farming Starts With Good Preparation
                        </p>

                        <p className="mt-1 text-xs text-white/70">
                          Seeds, tools, water and crop knowledge working
                          together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="images/spray.png"
            alt="Green vegetable farm"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-[#043D27]/90" />

        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A863] text-white shadow-lg">
                    <Image
                    src="/logo2.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#73E6AF]">
            AfriBEST TOOLS
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Need the right tool for your farm?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Contact AfriBEST TOOLS for information about available sprayers,
            irrigation equipment, seedling trays, cocopeat and other farming
            tools.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/255682510710"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#00A863] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#008F55]"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              Contact AfriBEST
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-bold text-white/70">
            Genuine Tools for Agri-Solutions
          </div>
        </div>
      </section>
    </main>
  );
}