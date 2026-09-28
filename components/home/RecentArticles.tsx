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

/* -------------------------------------------------------------------------- */
/*                         AFRIBEST RECENT ARTICLES                           */
/* -------------------------------------------------------------------------- */

const articles = [
  {
    id: '4',

    title: 'How to Choose the Right Vegetable Seed Variety',

    slug: 'how-to-choose-the-right-vegetable-seed-variety',

    excerpt:
      'Before planting, consider your crop, growing conditions, production goals and market needs when selecting a vegetable seed variety.',

    coverImage:
      'images/Tengeruwhite.jpg',

    category: 'Seed Selection',

    categorySlug: 'seed-selection',

    publishedAt: '2026-09-12T14:30:00Z',

    readingTime: '6 min read',
  },

  {
    id: '5',

    title: 'Growing Strong Tomato Plants From the Start',

    slug: 'growing-strong-tomato-plants',

    excerpt:
      'Learn important practices for establishing healthy tomato plants, from early preparation and planting to crop care during the growing season.',

    coverImage:
      'images/tomato2.jpeg',

    category: 'Tomato Production',

    categorySlug: 'tomato-production',

    publishedAt: '2026-09-09T11:45:00Z',

    readingTime: '7 min read',
  },

  {
    id: '6',

    title: 'Practical Tips for Growing Healthy Cabbage',

    slug: 'practical-tips-for-growing-healthy-cabbage',

    excerpt:
      'Discover practical considerations for establishing a healthy cabbage crop and managing your plants throughout the growing season.',

    coverImage:
      'images/cabbage.jpg',

    category: 'Cabbage Production',

    categorySlug: 'cabbage-production',

    publishedAt: '2026-09-06T09:15:00Z',

    readingTime: '6 min read',
  },

  {
    id: '7',

    title: 'Growing Sukuma Wiki, Kale and Other Leafy Vegetables',

    slug: 'growing-kale-and-leafy-vegetables',

    excerpt:
      'Explore practical ideas for establishing and caring for leafy vegetable crops such as kale, collards and other popular greens.',

    coverImage:
      'images/wiki.jpg',

    category: 'Leafy Vegetables',

    categorySlug: 'leafy-vegetables',

    publishedAt: '2026-09-03T16:20:00Z',

    readingTime: '5 min read',
  },

  {
    id: '8',

    title: 'Getting Better Results From Your Onion Crop',

    slug: 'getting-better-results-from-onion-crop',

    excerpt:
      'Good crop establishment and careful management can help farmers work towards healthy and productive onion production.',

    coverImage:
      'images/onion2.jpg',

    category: 'Onion Production',

    categorySlug: 'onion-production',

    publishedAt: '2026-08-30T10:45:00Z',

    readingTime: '7 min read',
  },

  {
    id: '9',

    title: 'From Nursery to Field: Giving Your Seedlings a Strong Start',

    slug: 'from-nursery-to-field',

    excerpt:
      'Learn why careful nursery preparation, healthy seedlings and proper field establishment are important steps towards a productive crop.',

    coverImage:
      'images/rape.jpeg',

    category: 'Crop Management',

    categorySlug: 'crop-management',

    publishedAt: '2026-08-27T13:30:00Z',

    readingTime: '6 min read',
  },
];

/* -------------------------------------------------------------------------- */
/*                              COMPONENT                                     */
/* -------------------------------------------------------------------------- */

export default function RecentArticles() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {articles.map((article) => (

        <article
          key={article.id}
          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
        >

          {/* ================================================================ */}
          {/* IMAGE                                                            */}
          {/* ================================================================ */}

          <Link
            href={`/blog/${article.slug}`}
            className="relative block h-[220px] overflow-hidden"
          >

            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Category */}
            <div className="absolute left-4 top-4">

              <Badge
                className="
                  border-0
                  bg-white/95
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-[#075C3A]
                  shadow-md
                  backdrop-blur
                  hover:bg-white
                "
              >
                {article.category}
              </Badge>

            </div>

          </Link>


          {/* ================================================================ */}
          {/* CONTENT                                                          */}
          {/* ================================================================ */}

          <div className="flex flex-1 flex-col p-5 sm:p-6">

            {/* Small brand indicator */}
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A863]">

              <Leaf className="h-4 w-4" />

              AfriBEST Farming Guide

            </div>


            {/* Title */}
            <Link href={`/blog/${article.slug}`}>

              <h3 className="text-xl font-black leading-tight text-[#123B2A] transition-colors duration-300 group-hover:text-[#00A863]">

                {article.title}

              </h3>

            </Link>


            {/* Description */}
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">

              {article.excerpt}

            </p>


            {/* ============================================================ */}
            {/* META                                                           */}
            {/* ============================================================ */}

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">

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


            {/* ============================================================ */}
            {/* READ MORE                                                      */}
            {/* ============================================================ */}

            <Link
              href={`/blog/${article.slug}`}
              className="mt-5 inline-flex w-fit items-center text-sm font-bold text-[#00A863] transition-colors hover:text-[#075C3A]"
            >

              Read Farming Guide

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

          </div>

        </article>

      ))}

    </div>
  );
}