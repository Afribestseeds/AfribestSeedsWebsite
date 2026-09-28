import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Leaf,
  Sprout,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { formatDate, formatDateForSEO } from '@/lib/date-utils';

/* -------------------------------------------------------------------------- */
/*                         AFRIBEST SEEDS ARTICLES                            */
/* -------------------------------------------------------------------------- */

const articles = [
  {
    id: '1',
    title: 'Choosing the Right Vegetable Seed Variety for Your Farm',
    slug: 'choosing-the-right-vegetable-seed-variety',
    excerpt:
      'Learn the important factors to consider when selecting vegetable seeds, from your production goals and growing conditions to the needs of your target market.',
    coverImage:
      'images/field.jpeg',
    category: 'Seed Selection',
    categorySlug: 'seed-selection',
    publishedAt: '2026-09-15T09:00:00Z',
    readingTime: '6 min read',
    featured: true,
  },

  {
    id: '2',
    title: 'Growing Healthy Tomatoes From Seed to Harvest',
    slug: 'growing-healthy-tomatoes-from-seed-to-harvest',
    excerpt:
      'Explore practical tomato production tips, from establishing strong plants to crop care and preparing for a productive harvest.',
    coverImage:
      'images/tomato 1.jpeg',
    category: 'Tomato Production',
    categorySlug: 'tomato-production',
    publishedAt: '2026-09-12T10:30:00Z',
    readingTime: '8 min read',
    featured: true,
  },

  {
    id: '4',
    title: 'Growing Sukuma Wiki, Kale and Other Leafy Vegetables',
    slug: 'growing-sukuma-wiki-kale-leafy-vegetables',
    excerpt:
      'Learn practical ways to establish and care for leafy vegetables including kale, collards, rape and other popular greens.',
    coverImage:
      'images/wiki.jpg',
    category: 'Leafy Vegetables',
    categorySlug: 'leafy-vegetables',
    publishedAt: '2026-09-07T14:30:00Z',
    readingTime: '6 min read',
  },

  {
    id: '5',
    title: 'Getting Better Results From Your Onion Crop',
    slug: 'getting-better-results-from-onion-crop',
    excerpt:
      'Understand important crop management considerations that can help farmers establish healthy and productive onion crops.',
    coverImage:
      'images/onion2.jpg',
    category: 'Onion Production',
    categorySlug: 'onion-production',
    publishedAt: '2026-09-04T11:45:00Z',
    readingTime: '7 min read',
  },

  {
    id: '6',
    title: 'How to Establish Strong Vegetable Seedlings',
    slug: 'how-to-establish-strong-vegetable-seedlings',
    excerpt:
      'A strong crop begins with healthy seedlings. Discover important nursery and early-growth practices for vegetable farmers.',
    coverImage:
      'images/michihili.jpg',
    category: 'Crop Management',
    categorySlug: 'crop-management',
    publishedAt: '2026-09-01T09:15:00Z',
    readingTime: '6 min read',
  },

  {
    id: '7',
    title: 'Growing Cucumber for Healthy and Productive Plants',
    slug: 'growing-cucumber-healthy-productive-plants',
    excerpt:
      'Explore useful cucumber production practices that can help farmers establish vigorous plants and manage their crop throughout the season.',
    coverImage:
      'images/cucumber.jpg',
    category: 'Cucumber Production',
    categorySlug: 'cucumber-production',
    publishedAt: '2026-08-29T16:20:00Z',
    readingTime: '6 min read',
  },

  {
    id: '8',
    title: 'Understanding Pepper Varieties for Vegetable Production',
    slug: 'understanding-pepper-varieties',
    excerpt:
      'Explore considerations when choosing green, sweet and hot pepper varieties for different production goals and market preferences.',
    coverImage:
      'images/paper.jpg',
    category: 'Pepper Production',
    categorySlug: 'pepper-production',
    publishedAt: '2026-08-26T10:45:00Z',
    readingTime: '7 min read',
  },

  {
    id: '9',
    title: 'From Seed to Harvest: Building a Better Vegetable Crop',
    slug: 'from-seed-to-harvest-building-better-vegetable-crop',
    excerpt:
      'Good crop planning, quality seed and consistent management work together to help farmers move confidently from planting to harvest.',
    coverImage:
      'images/rape.jpeg',
    category: 'Crop Management',
    categorySlug: 'crop-management',
    publishedAt: '2026-08-23T13:30:00Z',
    readingTime: '8 min read',
  },
];

/* -------------------------------------------------------------------------- */
/*                              METADATA                                      */
/* -------------------------------------------------------------------------- */

export const metadata = {
  title: 'Farming Knowledge & Vegetable Growing Tips | AfriBEST SEEDS',

  description:
    'Explore AfriBEST SEEDS farming guides, vegetable production tips, seed selection advice and practical crop management information for farmers.',

  openGraph: {
    title: 'Farming Knowledge & Vegetable Growing Tips | AfriBEST SEEDS',

    description:
      'Practical vegetable farming information, seed selection guidance and crop management tips from AfriBEST SEEDS.',

    url: 'https://growwisefarm.com/blog',

    type: 'website',

    siteName: 'AfriBEST SEEDS',
  },
};

/* -------------------------------------------------------------------------- */
/*                              BLOG PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function BlogPage() {
  const featuredArticles = articles.filter(
    (article) => article.featured
  );

  const regularArticles = articles.filter(
    (article) => !article.featured
  );

  return (
    <main className="min-h-screen bg-[#F7FCF9]">

      {/* ================================================================== */}
      {/* BLOG HERO                                                          */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#075C3A] py-16 sm:py-20">

        {/* Decorative shapes */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#00A863]/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#7CCB5E]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-4xl text-center">

            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur">


              AfriBEST Farming Journal

            </div>


            {/* Heading */}
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">

              Grow With Knowledge.

              <span className="block text-[#7CDBA8]">
                Grow With AfriBEST.
              </span>

            </h1>


            {/* Description */}
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">

              Practical vegetable farming guides, seed selection advice and
              crop management insights to help farmers make informed decisions
              from planting to harvest.

            </p>


            {/* CTA */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="https://catalogue.afribestseeds.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#00A863] px-6 py-3.5 font-bold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#008F55]"
              >

                Explore Our Seeds

                <ArrowRight className="ml-2 h-5 w-5" />

              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#075C3A]"
              >

                Back to Home

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================================== */}
      {/* CATEGORY NAVIGATION                                                */}
      {/* ================================================================== */}

      {/* <section className="border-b border-[#00A863]/10 bg-white py-5">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <CategoryNavigation />

        </div>

      </section> */}


      {/* ================================================================== */}
      {/* FEATURED ARTICLES                                                  */}
      {/* ================================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mb-10">

            <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">

              Featured Farming Guides

            </div>

            <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl">

              Start With The Right Knowledge

            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">

              Explore some of our featured guides covering seed selection,
              vegetable production and practical crop management.

            </p>

          </div>


          {/* Featured grid */}
          <div className="grid gap-6 lg:grid-cols-3">

            {featuredArticles.map((article, index) => (

              <article
                key={article.id}
                className={`group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  index === 0
                    ? 'lg:col-span-2'
                    : ''
                }`}
              >

                {/* Image */}
                <Link
                  href={`/blog/${article.slug}`}
                  className={`relative block overflow-hidden ${
                    index === 0
                      ? 'h-[320px] sm:h-[390px]'
                      : 'h-[260px]'
                  }`}
                >

                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    priority={index === 0}
                    sizes={
                      index === 0
                        ? '(max-width: 1024px) 100vw, 66vw'
                        : '(max-width: 1024px) 100vw, 33vw'
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5">

                    <Badge className="border-0 bg-white px-3 py-1.5 font-bold text-[#075C3A] shadow-lg hover:bg-white">

                      {article.category}

                    </Badge>

                  </div>

                </Link>


                {/* Content */}
                <div className="p-6">

                  <Link href={`/blog/${article.slug}`}>

                    <h2
                      className={`font-black leading-tight text-[#123B2A] transition-colors group-hover:text-[#00A863] ${
                        index === 0
                          ? 'text-2xl sm:text-3xl'
                          : 'text-xl'
                      }`}
                    >

                      {article.title}

                    </h2>

                  </Link>


                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">

                    {article.excerpt}

                  </p>


                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">

                    <div className="flex items-center gap-1.5">

                      <CalendarDays className="h-4 w-4 text-[#00A863]" />

                      <time dateTime={formatDateForSEO(article.publishedAt)}>
                        {formatDate(article.publishedAt)}
                      </time>

                    </div>

                    <div className="flex items-center gap-1.5">

                      <Clock3 className="h-4 w-4 text-[#00A863]" />

                      <span>
                        {article.readingTime}
                      </span>

                    </div>

                  </div>


                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-5 inline-flex items-center text-sm font-bold text-[#00A863] transition hover:text-[#075C3A]"
                  >

                    Read Farming Guide

                    <ArrowRight className="ml-2 h-4 w-4" />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================================================================== */}
      {/* ALL ARTICLES                                                       */}
      {/* ================================================================== */}

      <section className="bg-[#F7FCF9] py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">

                Farmer Resources

              </div>

              <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl">

                Latest Farming Guides

              </h2>

              <p className="mt-3 max-w-2xl text-slate-600">

                Practical information to help you make better decisions
                throughout your vegetable growing journey.

              </p>

            </div>

          </div>


          {/* Article grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {regularArticles.map((article) => (

              <article
                key={article.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="relative block h-[220px] overflow-hidden"
                >

                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4">

                    <Badge className="border-0 bg-white/95 font-bold text-[#075C3A] shadow-md hover:bg-white">

                      {article.category}

                    </Badge>

                  </div>

                </Link>


                {/* Content */}
                <div className="flex flex-1 flex-col p-6">

                  <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A863]">

                    AfriBEST Farming Guide

                  </div>


                  <Link href={`/blog/${article.slug}`}>

                    <h2 className="text-xl font-black leading-tight text-[#123B2A] transition-colors group-hover:text-[#00A863]">

                      {article.title}

                    </h2>

                  </Link>


                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">

                    {article.excerpt}

                  </p>


                  <div className="mt-auto">

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">

                      <div className="flex items-center gap-1.5">

                        <CalendarDays className="h-4 w-4 text-[#00A863]" />

                        <time dateTime={formatDateForSEO(article.publishedAt)}>
                          {formatDate(article.publishedAt)}
                        </time>

                      </div>

                      <div className="flex items-center gap-1.5">

                        <Clock3 className="h-4 w-4 text-[#00A863]" />

                        <span>
                          {article.readingTime}
                        </span>

                      </div>

                    </div>


                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-5 inline-flex items-center text-sm font-bold text-[#00A863] transition hover:text-[#075C3A]"
                    >

                      Read More

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================================================================== */}
      {/* FARMER CTA                                                         */}
      {/* ================================================================== */}

      <section className="bg-[#EAF8F1] py-16 sm:py-20">

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A863] text-white shadow-lg shadow-[#00A863]/20">

                  <Image
                    src="/logo1.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />

          </div>


          <div className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">

            Pure Seeds for Better Yield

          </div>


          <h2 className="text-3xl font-black leading-tight text-[#123B2A] sm:text-4xl">

            Looking for quality vegetable seeds?

          </h2>


          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">

            Explore the AfriBEST SEEDS range of vegetable varieties and find
            the right options for your next growing season.

          </p>


          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
                href="https://catalogue.afribestseeds.com"
                target="_blank"
                rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#00A863] px-7 py-4 font-bold text-white shadow-lg shadow-[#00A863]/20 transition hover:-translate-y-1 hover:bg-[#008F55]"
            >

              Explore Our Seeds

              <ArrowRight className="ml-2 h-5 w-5" />

            </a>


            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#00A863]/30 bg-white px-7 py-4 font-bold text-[#075C3A] transition hover:border-[#00A863] hover:bg-[#00A863] hover:text-white"
            >

              Talk to AfriBEST SEEDS

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}