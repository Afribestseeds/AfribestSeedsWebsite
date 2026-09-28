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
import { formatDate } from '@/lib/date-utils';

// ======================================================
// AfriBEST SEEDS - Featured Farming Guides
// ======================================================

const featuredArticles = [
  
  {
    id: '1',
    title: 'Choosing the Right Vegetable Seed Variety for Your Farm',
    slug: 'choosing-the-right-vegetable-seed-variety',
    excerpt:
      'Learn the important factors to consider when selecting vegetable seeds, from your growing conditions and production goals to the needs of your target market.',
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
      'Explore practical tomato production considerations, from establishing strong plants to crop care and preparing for a productive harvest.',
    coverImage:
      'images/tomato.jpeg',
    category: 'Tomato Production',
    categorySlug: 'tomato-production',
    publishedAt: '2026-09-12T10:30:00Z',
    readingTime: '8 min read',
    featured: true,
  },

  {
    id: '3',
    title: 'Practical Guide to Growing Healthy Cabbage',
    slug: 'practical-guide-growing-healthy-cabbage',
    excerpt:
      'Discover practical considerations for establishing and managing a healthy cabbage crop throughout the growing season.',
    coverImage:
      'images/cabbage1.jpg',
    category: 'Cabbage Production',
    categorySlug: 'cabbage-production',
    publishedAt: '2026-09-10T08:15:00Z',
    readingTime: '7 min read',
    featured: true,
  },

];

export default function FeaturedArticles() {
  const mainFeature = featuredArticles[0];
  const secondaryFeatures = featuredArticles.slice(1);

  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-5">

      {/* ==================================================
          MAIN FEATURE
      ================================================== */}

      <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl lg:col-span-3">

        {/* Image */}

        <Link
          href={`/blog/${mainFeature.slug}`}
          className="relative block h-[300px] overflow-hidden sm:h-[380px] lg:h-[430px]"
        >
          <Image
            src={mainFeature.coverImage}
            alt={mainFeature.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Image overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Featured badge */}

          <div className="absolute left-5 top-5">
            <Badge
              className="
                border-0
                bg-[#00A863]
                px-4
                py-2
                font-bold
                text-white
                shadow-lg
                hover:bg-[#008F55]
              "
            >
              Featured Guide
            </Badge>
          </div>

          {/* Category */}

          <div className="absolute bottom-5 left-5">

            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#075C3A] shadow-lg backdrop-blur">

              <Leaf className="h-4 w-4 text-[#00A863]" />

              {mainFeature.category}

            </span>

          </div>
        </Link>

        {/* Content */}

        <div className="p-6 sm:p-8">

          {/* Label */}

          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#00A863]">

            <Sprout className="h-4 w-4" />

            AfriBEST Farming Guide

          </div>

          {/* Title */}

          <Link href={`/blog/${mainFeature.slug}`}>

            <h3 className="text-2xl font-black leading-tight text-[#123B2A] transition-colors duration-300 group-hover:text-[#00A863] sm:text-3xl">

              {mainFeature.title}

            </h3>

          </Link>

          {/* Excerpt */}

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">

            {mainFeature.excerpt}

          </p>

          {/* Meta */}

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-100 pt-5 text-xs font-medium text-slate-500">

            <div className="flex items-center gap-1.5">

              <CalendarDays className="h-4 w-4 text-[#00A863]" />

              <span>
                {formatDate(mainFeature.publishedAt)}
              </span>

            </div>

            <div className="flex items-center gap-1.5">

              <Clock3 className="h-4 w-4 text-[#00A863]" />

              <span>
                {mainFeature.readingTime}
              </span>

            </div>

          </div>

          {/* Read button */}

          <Link
            href={`/blog/${mainFeature.slug}`}
            className="mt-6 inline-flex items-center rounded-xl bg-[#00A863] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[#00A863]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#008F55]"
          >

            Read Farming Guide

            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

          </Link>

        </div>

      </article>

      {/* ==================================================
          SECONDARY FEATURES
      ================================================== */}

      <div className="grid gap-7 lg:col-span-2 lg:grid-rows-2">

        {secondaryFeatures.map((article) => (

          <article
            key={article.id}
            className="group flex overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          >

            {/* Image */}

            <Link
              href={`/blog/${article.slug}`}
              className="relative block w-[42%] min-w-[130px] overflow-hidden sm:w-2/5"
            >

              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/40" />

            </Link>

            {/* Content */}

            <div className="flex flex-1 flex-col p-5 sm:p-6">

              {/* Category */}

              <Link
                href={`/category/${article.categorySlug}`}
                className="mb-3 w-fit"
              >

                <Badge
                  className="
                    border-0
                    bg-[#EAF8F1]
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-[#075C3A]
                    hover:bg-[#DDF4E9]
                  "
                >
                  {article.category}
                </Badge>

              </Link>

              {/* Title */}

              <Link href={`/blog/${article.slug}`}>

                <h3 className="line-clamp-3 text-lg font-black leading-tight text-[#123B2A] transition-colors duration-300 group-hover:text-[#00A863] sm:text-xl">

                  {article.title}

                </h3>

              </Link>

              {/* Excerpt */}

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">

                {article.excerpt}

              </p>

              {/* Bottom */}

              <div className="mt-auto pt-4">

                <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">

                  <div className="flex items-center gap-1.5">

                    <CalendarDays className="h-4 w-4 text-[#00A863]" />

                    <span>
                      {formatDate(article.publishedAt)}
                    </span>

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
                  className="mt-4 inline-flex items-center text-sm font-bold text-[#00A863] transition-colors hover:text-[#075C3A]"
                >

                  Read Guide

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                </Link>

              </div>

            </div>

          </article>

        ))}

      </div>

    </div>
  );
}