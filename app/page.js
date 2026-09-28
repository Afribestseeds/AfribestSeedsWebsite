import Link from 'next/link';
import Image from 'next/image';

import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sprout,
  Truck,
  Award,
  Sun,
  Leaf,
} from 'lucide-react';

import FeaturedArticles from '@/components/home/FeaturedArticles';
import NewsletterSignup from '@/components/forms/NewsletterSignup';
import RecentArticles from '@/components/home/RecentArticles';
import HeroCarousel from '@/components/home/HeroCarousel';

export const metadata = {
  title: 'AfriBEST SEEDS | Quality Vegetable Seeds for Better Harvests',
  description:
    'AfriBEST SEEDS supplies quality vegetable seeds including tomato, cabbage, onion, kale, cucumber, eggplant, pepper, amaranthus, lettuce and many more varieties for farmers across Tanzania.',
  openGraph: {
    type: 'website',
    locale: 'en_TZ',
    url: 'https://growwisefarm.com',
    title: 'AfriBEST SEEDS | Quality Vegetable Seeds for Better Harvests',
    description:
      'Quality vegetable seeds for farmers who want stronger crops, better production and successful harvests.',
    siteName: 'AfriBEST SEEDS',
  },
};

/* -------------------------------------------------------------------------- */
/*                           SEED CATEGORIES                                  */
/* -------------------------------------------------------------------------- */

const seedCategories = [
  {
    title: 'Tomato Seeds',
    description: 'Reliable varieties for productive tomato farming.',
    image:
      'images/tomato 1.jpeg',
  },
  {
    title: 'Cabbage Seeds',
    description: 'Quality varieties for healthy and vigorous crops.',
    image:
      'images/cabbage.jpg',
  },
  {
    title: 'Kale & Leafy Greens',
    description: 'Popular leafy vegetables for everyday farming.',
    image:
      'images/kale.jpg',
  },
  {
    title: 'Onion Seeds',
    description: 'Selected varieties for successful onion production.',
    image:
      'images/onion1.jpg',
  },
  {
    title: 'Pepper Seeds',
    description: 'Green and hot pepper varieties for diverse markets.',
    image:
      'images/paper.jpg',
  },
  {
    title: 'Cucumber Seeds',
    description: 'Varieties suited for productive cucumber growing.',
    image:
      'images/cucumber.jpg',
  },
];

/* -------------------------------------------------------------------------- */
/*                         FEATURED SEED VARIETIES                            */
/* -------------------------------------------------------------------------- */

const featuredSeeds = [
  {
    name: 'Tomato Mavuno Hybrid F1',
    category: 'Tomato',
    image:
      'images/tomato 1.jpeg',
  },
  {
    name: 'Cabbage Copenhagen Market',
    category: 'Cabbage',
    image:
      'images/cabbage.jpg',
  },
  {
    name: 'Kale 1000H',
    category: 'Leafy Vegetable',
    image:
      'images/kale.jpg',
  },
  {
    name: 'Cucumber Marketmore 76',
    category: 'Cucumber',
    image:
      'images/cucumber.jpg',
  },
  {
    name: 'Pepper Green Holland F1',
    category: 'Pepper',
    image:
      'images/paper.jpg',
  },
  {
    name: 'Beetroot Detroit Dark Red',
    category: 'Beetroot',
    image:
      'images/beetroot.jpg',
  },
];

/* -------------------------------------------------------------------------- */
/*                              WHY CHOOSE US                                 */
/* -------------------------------------------------------------------------- */

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Quality-Focused Seeds',
    description:
      'We focus on providing vegetable seed varieties selected with farmers and productive agriculture in mind.',
  },
  {
    icon: Sprout,
    title: 'Wide Variety Selection',
    description:
      'From tomatoes and cabbage to leafy vegetables, onions, peppers, cucumbers and more.',
  },
  {
    icon: Award,
    title: 'Built For Farmers',
    description:
      'Our goal is to support farmers with dependable seed choices for different farming needs and markets.',
  },
  {
    icon: Truck,
    title: 'Serving Farmers Across Tanzania',
    description:
      'With regional contacts and a growing distribution network, we make it easier to access the seeds you need.',
  },
];

/* -------------------------------------------------------------------------- */
/*                            COMPLETE SEED LIST                              */
/* -------------------------------------------------------------------------- */

const seedList = [
  'African Cabbage Loshuu / Saro',
  'African Eggplant DB3',
  'Cucumber Marketmore 76',
  'Eggplant Black Beauty',
  'Kale 1000H',
  'Kale Curly',
  'Okra Clemson SP / Bamia',
  'Okra Pusa Sawani',
  'Onion Red Bombay',
  'Tomato Tanya',
  'Tomato Tengeru Select',
  'Lettuce Great Lakes',
];

/* -------------------------------------------------------------------------- */
/*                                  HOME                                      */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#063d29] md:min-h-[760px]">

        {/* Hero carousel is now handled by the separate Client Component */}
        <HeroCarousel />

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />

      </section>

      {/* ================================================================== */}
      {/* INTRODUCTION                                                       */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20">

        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#00A863]/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">

            <div>

              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">
                Welcome to AfriBEST SEEDS
              </div>

              <h2 className="max-w-3xl text-3xl font-black leading-tight text-[#123B2A] sm:text-4xl md:text-5xl">
                The right seed is where
                <span className="text-[#00A863]">
                  {' '}every great harvest begins.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                Farming starts with a choice. At AfriBEST SEEDS, we believe
                that choosing quality seed is one of the most important steps
                towards a healthy crop and a successful harvest.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Our collection includes a wide range of vegetable varieties
                for farmers looking for dependable options for their fields,
                gardens and commercial production.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center font-bold text-[#00A863] transition hover:text-[#075C3A]"
              >
                Discover AfriBEST SEEDS
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>

            </div>

            {/* Brand card */}

            <div className="relative">

              <div className="absolute -inset-3 rounded-[2rem] bg-[#00A863]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#00A863]/10 bg-[#EAF8F1] p-8 shadow-xl sm:p-10">

                <Link
                  href="/"
                  className="mb-6 inline-flex items-center"
                >
                  <Image
                    src="/logo.png"
                    alt="AfriBEST Seeds"
                    width={190}
                    height={65}
                    className="h-14 w-auto object-contain"
                  />
                </Link>

                <h3 className="text-2xl font-black text-[#075C3A]">
                  Growing Agriculture.
                  <br />
                  Growing Possibilities.
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  From the first planting to the final harvest, we aim to help
                  farmers make informed seed choices and grow with confidence.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-3xl font-black text-[#00A863]">
                      30+
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      Seed Varieties
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-3xl font-black text-[#00A863]">
                      7+
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      Vegetable Categories
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SEED CATEGORIES                                                    */}
      {/* ================================================================== */}

      <section className="bg-[#F5FBF8] py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <div className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">
                Explore Our Seeds
              </div>

              <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl">
                Seeds for every growing ambition
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600">
                Explore some of our popular vegetable seed categories and find
                varieties suited to your farming needs.
              </p>

            </div>

            <a
              href="https://catalogue.afribestseeds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-bold text-[#00A863] hover:text-[#075C3A]"
            >
              View All Seeds
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {seedCategories.map((category) => (
              <a
                key={category.title}
                href="https://catalogue.afribestseeds.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-xl font-black text-white">
                      {category.title}
                    </h3>
                  </div>

                </div>

                <div className="p-5">

                  <p className="text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>

                  <div className="mt-4 flex items-center text-sm font-bold text-[#00A863]">
                    Explore varieties
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>

                </div>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* FEATURED SEEDS                                                     */}
      {/* ================================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mb-10 text-center">

            <div className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">
              Featured Varieties
            </div>

            <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl">
              Popular choices for productive farming
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Discover selected varieties from our vegetable seed collection.
            </p>

          </div>

          <div className="-mx-5 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">

            <div className="flex snap-x snap-mandatory gap-5">

              {featuredSeeds.map((seed) => (
                <a
                  href="https://catalogue.afribestseeds.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={seed.name}
                  className="group min-w-[285px] snap-start overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[320px]"
                >

                  <div className="relative h-60 overflow-hidden">

                    <Image
                      src={seed.image}
                      alt={seed.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#075C3A] shadow">
                      {seed.category}
                    </div>

                  </div>

                  <div className="p-5">

                    <h3 className="text-lg font-black text-[#123B2A]">
                      {seed.name}
                    </h3>

                    <div className="mt-4 flex items-center font-bold text-[#00A863]">
                      View Seed
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </div>

                  </div>

                </a>
              ))}

            </div>

          </div>

          <div className="mt-4 text-center text-xs font-medium text-slate-400">
            ← Swipe to explore more varieties →
          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* WHY CHOOSE AFRIBEST                                                */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#075C3A] py-16 text-white sm:py-20">

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#00A863]/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#35D18A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <div className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#35D18A]">
              Why AfriBEST SEEDS?
            </div>

            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">
              More than seeds.
              <span className="block text-[#35D18A]">
                We support your growing journey.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-white/75">
              We are committed to helping farmers access a diverse selection
              of vegetable seeds and make confident choices for their farms.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                >

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A863]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-lg font-black">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {benefit.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* COMPLETE SEED COLLECTION                                           */}
      {/* ================================================================== */}

      <section className="bg-[#F7FCF9] py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">
                <Sprout className="h-4 w-4" />
                Our Seed Collection
              </div>

              <h2 className="text-3xl font-black leading-tight text-[#123B2A] sm:text-4xl">
                A growing collection for
                <span className="text-[#00A863]">
                  {' '}different farming needs.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our collection brings together a broad selection of vegetable
                seed varieties, giving farmers more options for their farms,
                gardens and commercial production.
              </p>

              <a
                href="https://catalogue.afribestseeds.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center rounded-xl bg-[#00A863] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#00A863]/20 transition hover:bg-[#008F55]"
              >
                Browse More Varieties
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {seedList.map((seed) => (
                <Link
                  key={seed}
                  href="/products"
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3.5 shadow-sm transition hover:border-[#00A863]/30 hover:shadow-md"
                >

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00A863]" />

                  <span className="text-sm font-semibold text-slate-700 group-hover:text-[#075C3A]">
                    {seed}
                  </span>

                </Link>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* FARMER MESSAGE / CTA                                               */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#00A863] px-7 py-12 text-center shadow-2xl sm:px-12 md:py-16">

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

            <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#075C3A]/20" />

            <div className="relative">

              <Sun className="mx-auto mb-5 h-10 w-10 text-white/90" />

              <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
                Your next harvest starts today.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
                Looking for a particular vegetable variety? Explore our
                collection or contact AfriBEST SEEDS for assistance in finding
                the right seeds for your farming needs.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href="https://catalogue.afribestseeds.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-[#075C3A] shadow-lg transition hover:-translate-y-1"
                >
                  Explore Seeds
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>

                <a
                  href="https://wa.me/255682510710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  WhatsApp Us
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================================================================== */}
      {/* JOURNAL / ARTICLES                                                 */}
      {/* ================================================================== */}

      <main>

        <section className="bg-white py-16 sm:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <div className="mb-10 flex items-end justify-between gap-5">

              <div>

                <div className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">
                  Farming Knowledge
                </div>

                <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl">
                  Featured Farming Insights
                </h2>

                <p className="mt-3 max-w-2xl text-slate-600">
                  Practical information and agricultural insights to help
                  farmers grow with greater confidence.
                </p>

              </div>

              <Link
                href="/blog"
                className="hidden items-center font-bold text-[#00A863] hover:text-[#075C3A] sm:flex"
              >
                View All
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>

            </div>

            <FeaturedArticles />

          </div>
        </section>

        <section className="bg-[#F7FCF9] py-16 sm:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <div className="mb-10">

              <div className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">
                Latest From AfriBEST
              </div>

              <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl">
                Recent Articles
              </h2>

            </div>

            <RecentArticles />

          </div>
        </section>

      </main>

      {/* ================================================================== */}
      {/* NEWSLETTER                                                         */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#063D29] py-16 text-white sm:py-20">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#00A863]/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#35D18A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">

          <div className="mb-6 flex justify-center">

            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="AfriBEST Seeds"
                width={190}
                height={65}
                className="h-14 w-auto object-contain"
              />
            </Link>

          </div>

          <h2 className="text-3xl font-black sm:text-4xl">
            Grow smarter with AfriBEST SEEDS.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Subscribe for farming tips, agricultural insights, seasonal
            information and updates from AfriBEST SEEDS.
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <NewsletterSignup />
          </div>

        </div>
      </section>

    </div>
  );
}