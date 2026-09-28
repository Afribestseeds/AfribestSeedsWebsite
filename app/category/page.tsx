import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Sprout,
  Search,
  ShieldCheck,
  Tractor,
  Wheat,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import CategoryCarousel from "@/components/home/CategoryCarousel";

export const metadata = {
  title: "Vegetable Seeds | AfriBEST SEEDS",
  description:
    "Explore vegetable seed varieties from AfriBEST SEEDS, including tomato, cabbage, kale, onion, cucumber, pepper, eggplant, amaranthus and other vegetable crops.",
};

const productCategories = [
  {
    name: "Tomato Seeds",
    slug: "tomato-seeds",
    description:
      "A selection of tomato varieties suitable for farmers looking for dependable crop establishment, healthy plants and productive harvests.",
    varieties: [
      "Tanya",
      "Tengeru 97",
      "Tengeru Select",
      "Rio Grande",
      "Mavuno Hybrid F1",
      "Roma VF",
      "Hazina F1",
    ],
    image:
      "images/tomato.jpeg",
    accent: "Tomato Production",
  },
  {
    name: "Cabbage Seeds",
    slug: "cabbage-seeds",
    description:
      "Quality cabbage seed varieties for growers seeking strong crop establishment and healthy cabbage production.",
    varieties: ["Copenhagen M"],
    image:
      "images/cabbage.jpg",
    accent: "Cabbage Production",
  },
  {
    name: "Kale & Leafy Vegetable Seeds",
    slug: "leafy-vegetable-seeds",
    description:
      "Popular leafy vegetable varieties for farmers producing nutritious greens for household consumption and markets.",
    varieties: [
      "Kale 1000H",
      "Kale Curly",
      "Collards Sukumawiki / GERG",
      "Rape English Giant",
      "Mustard Florida Broadleaf",
    ],
    image:
      "images/kale.jpg",
    accent: "Leafy Vegetables",
  },
  {
    name: "Onion Seeds",
    slug: "onion-seeds",
    description:
      "Onion seed varieties designed for farmers looking to establish healthy onion crops and work towards quality bulb production.",
    varieties: ["Red Bombay"],
    image:
      "images/onion1.jpg",
    accent: "Onion Production",
  },
  {
    name: "Cucumber Seeds",
    slug: "cucumber-seeds",
    description:
      "Cucumber varieties for growers interested in establishing vigorous crops for fresh vegetable production.",
    varieties: ["Ashley", "Marketmore 76"],
    image:
      "images/cucumber.jpg",
    accent: "Cucumber Production",
  },
  {
    name: "Pepper Seeds",
    slug: "pepper-seeds",
    description:
      "Green and hot pepper varieties offering farmers options for different production and market requirements.",
    varieties: [
      "Green Holland F1",
      "Green California Wonder",
      "Hot Red Habanero",
    ],
    image:
      "images/paper.jpg",
    accent: "Pepper Production",
  },
  {
    name: "Eggplant Seeds",
    slug: "eggplant-seeds",
    description:
      "Eggplant varieties suitable for farmers growing African eggplant and common eggplant for fresh vegetable markets.",
    varieties: [
      "African Eggplant Tengeru White",
      "African Eggplant DB3",
      "Black Beauty",
    ],
    image:
      "images/Tengeruwhite.jpg",
    accent: "Eggplant Production",
  },
  {
    name: "Amaranthus Seeds",
    slug: "amaranthus-seeds",
    description:
      "Amaranthus varieties offering growers options for both leafy vegetable production and grain production.",
    varieties: [
      "Amaranthus Black / NGURUMA",
      "Amaranthus Grain / Poli",
    ],
    image:
      "images/nguruma.jpeg",
    accent: "Amaranthus",
  },
  {
    name: "African Cabbage Seeds",
    slug: "african-cabbage-seeds",
    description:
      "African cabbage varieties for farmers producing traditional leafy vegetables for local markets and household consumption.",
    varieties: ["African Cabbage Loshuu", "African Cabbage Saro"],
    image:
      "images/saro.jpeg",
    accent: "African Vegetables",
  },
  {
    name: "Carrot Seeds",
    slug: "carrot-seeds",
    description:
      "Carrot seed variety for growers seeking to establish healthy root vegetable crops.",
    varieties: ["Nantes"],
    image:
      "images/carrot.jpg",
    accent: "Root Vegetables",
  },
  {
    name: "Beetroot Seeds",
    slug: "beetroot-seeds",
    description:
      "Beetroot variety for farmers producing nutritious root vegetables for fresh markets and household use.",
    varieties: ["Detroit Dark Red"],
    image:
      "images/beetroot.jpg",
    accent: "Root Vegetables",
  },
  {
    name: "Black Nightshade Seeds",
    slug: "black-nightshade-seeds",
    description:
      "Black nightshade seed options for growers producing popular African leafy vegetables.",
    varieties: ["Local", "Villosium"],
    image:
      "images/villosium.jpeg",
    accent: "African Vegetables",
  },
  {
    name: "Okra Seeds",
    slug: "okra-seeds",
    description:
      "Okra varieties for farmers interested in producing a popular warm-season vegetable crop.",
    varieties: ["Clemson SP (Bamia)", "Pusa Sawani"],
    image:
      "images/okra.jpeg",
    accent: "Vegetable Production",
  },
  {
    name: "Swiss Chard Seeds",
    slug: "swiss-chard-seeds",
    description:
      "A leafy vegetable variety suitable for farmers producing fresh greens for household consumption and markets.",
    varieties: ["Fordhook Giant"],
    image:
      "images/swisscard.jpg",
    accent: "Leafy Vegetables",
  },
  {
    name: "Coriander Seeds",
    slug: "coriander-seeds",
    description:
      "Coriander seed for growers producing fresh dhania for culinary use and fresh vegetable markets.",
    varieties: ["Dhania"],
    image:
      "images/corriander.jpg",
    accent: "Herbs",
  },
  {
    name: "Lettuce Seeds",
    slug: "lettuce-seeds",
    description:
      "Lettuce variety for farmers and growers producing fresh leafy vegetables for markets and food service.",
    varieties: ["Great Lakes"],
    image:
      "images/lettuce.jpg",
    accent: "Leafy Vegetables",
  },
  {
    name: "Celery Seeds",
    slug: "celery-seeds",
    description:
      "Celery seed variety for growers interested in fresh vegetable production and culinary markets.",
    varieties: ["Aurora"],
    image:
      "images/celery.jpg",
    accent: "Vegetable Production",
  },

  {
    name: "Parsley Seeds",
    slug: "parsley-seeds",
    description:
      "Parsley seed for growers producing fresh culinary herbs and leafy crops.",
    varieties: ["Common"],
    image:
      "images/persley.jpg",
    accent: "Herbs",
  },
];

const productStats = [
  {
    number: "5+",
    label: "Seed Categories",
  },
  {
    number: "35+",
    label: "Vegetable Varieties",
  },
  {
    number: "1",
    label: "Growing Partner",
  },
  {
    number: "TZ",
    label: "Serving Farmers",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#063d29] md:min-h-[760px]">

        {/* Hero carousel is now handled by the separate Client Component */}
        <CategoryCarousel />

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />

      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative z-10 -mt-8 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl sm:grid-cols-4">
          {productStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-7 text-center sm:px-6 ${
                index !== productStats.length - 1
                  ? "border-b border-slate-100 sm:border-b-0 sm:border-r"
                  : ""
              } ${
                index === 1
                  ? "border-r border-slate-100"
                  : index === 2
                    ? "sm:border-r"
                    : ""
              }`}
            >
              <div className="text-3xl font-black text-[#075C3A] sm:text-4xl">
                {stat.number}
              </div>

              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
              Our Seed Range
            </div>

            <h2 className="text-3xl font-black leading-tight text-[#123B2A] sm:text-4xl lg:text-5xl">
              Seeds for a wide range of vegetable crops
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              AfriBEST SEEDS offers a broad range of vegetable seed varieties
              covering fruit vegetables, leafy vegetables, root crops,
              herbs and other important crops grown by farmers.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Whether you are producing tomatoes, cabbage, onions, kale,
              peppers, cucumber, eggplant, carrots or other vegetables, our
              product range gives growers different varieties to consider for
              their farming needs.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Vegetable seed varieties",
                "Different crop categories",
                "Options for different growers",
                "Farming knowledge & guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#F3FBF7] px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00A863]" />
                  <span className="text-sm font-semibold text-[#123B2A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"
                alt="Fresh vegetables growing in a farm"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063D27]/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A863]">
                    
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
                    <p className="text-sm font-bold">Grow With AfriBEST</p>
                    <p className="text-xs text-white/80">
                      Choose the variety that fits your crop and market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT CATEGORIES
      ========================================================= */}
      <section
        id="our-products"
        className="bg-[#F5FBF8] px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
              Our Products
            </div>

            <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl lg:text-5xl">
              Explore Our Vegetable Seed Categories
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Discover the crops and varieties available from AfriBEST SEEDS,
              organized to make it easier for farmers to find the seeds they
              are looking for.
            </p>
          </div>

          {/* Product Grid */}
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <article
                key={category.slug}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#075C3A] shadow-lg backdrop-blur">
                      {category.accent}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-2xl font-black text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm leading-7 text-slate-600">
                    {category.description}
                  </p>

                  <div className="mt-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#00A863]">
                      Available Varieties
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {category.varieties.map((variety) => (
                        <span
                          key={variety}
                          className="rounded-lg bg-[#EFFAF5] px-3 py-2 text-xs font-semibold text-[#075C3A]"
                        >
                          {variety}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <a
                      href="https://catalogue.afribestseeds.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-[#00A863] transition-colors hover:text-[#075C3A]"
                    >
                      View Seed Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY AFRIBEST
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#075C3A] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#00A863]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#73E6AF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#73E6AF]">
                <ShieldCheck className="h-5 w-5" />
                Why AfriBEST SEEDS
              </div>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Helping farmers make better seed choices
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                Choosing the right seed is an important first step in vegetable
                production. AfriBEST SEEDS brings together a diverse range of
                vegetable crops so growers can explore options that match
                their farming goals.
              </p>

              <Link
                href="/blog"
                className="mt-8 inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#075C3A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F3FBF7]"
              >
                Explore Farming Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Sprout,
                  title: "Wide Seed Range",
                  text: "Explore vegetable varieties across many important crop categories.",
                },
                {
                  icon: Tractor,
                  title: "For Farmers",
                  text: "Products presented with practical farming needs in mind.",
                },
                {
                  icon: Leaf,
                  title: "Crop Knowledge",
                  text: "Access useful information to support better crop decisions.",
                },
                {
                  icon: Wheat,
                  title: "Better Production",
                  text: "Start your crop with a thoughtful seed and production plan.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A863] text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#EAF8F1]">
          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#00A863]/10" />
            <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-[#075C3A]/10" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A863] text-white shadow-lg">
                <Search className="h-6 w-6" />
              </div>

              <h2 className="mt-6 text-3xl font-black text-[#123B2A] sm:text-4xl">
                Looking for a particular seed variety?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Explore our seed range or contact AfriBEST SEEDS for more
                information about the vegetable varieties available.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#00A863] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00A863]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#008F55]"
                >
                  Contact AfriBEST SEEDS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <a
                  href="tel:+255682510710"
                  className="inline-flex items-center justify-center rounded-xl border border-[#075C3A]/20 bg-white px-6 py-3.5 text-sm font-bold text-[#075C3A] transition-all duration-300 hover:bg-[#F5FBF8]"
                >
                  Call +255 682 510 710
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}