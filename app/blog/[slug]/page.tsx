import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  BookOpen,
} from 'lucide-react';

import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate, formatDateForSEO } from '@/lib/date-utils';

// ======================================================
// AfriBEST SEEDS Article
// ======================================================

const article = {
  id: '1',

  title: 'Choosing the Right Vegetable Seed Variety for Your Farm',

  slug: 'choosing-the-right-vegetable-seed-variety',

  excerpt:
    'Learn the important factors to consider when selecting vegetable seeds, from your growing conditions and production goals to the needs of your target market.',

  coverImage:
    '/images/field.jpeg',

  category: 'Seed Selection',

  categorySlug: 'seed-selection',

  publishedAt: '2026-09-15T09:00:00Z',

  updatedAt: '2026-09-15T09:00:00Z',

  readingTime: '6 min read',

  tags: [
    'vegetable seeds',
    'seed selection',
    'vegetable farming',
    'crop production',
    'AfriBEST SEEDS',
  ],

  content: `
## Introduction

Choosing the right seed variety is one of the most important decisions a farmer makes before starting a vegetable crop.

A good production plan begins with understanding your farm, your growing conditions, your production goals and the needs of your target market.

At AfriBEST SEEDS, we provide a wide range of vegetable seed varieties for farmers looking for options across different vegetable crops and production needs.

Whether you are planning tomatoes, cabbage, onions, leafy vegetables, peppers, cucumbers or other vegetable crops, selecting an appropriate variety is an important first step.

## What to Consider When Choosing Vegetable Seeds

There is no single vegetable variety that is suitable for every farm. Before purchasing seed, consider the following factors.

### 1. Choose According to Your Crop

Start by identifying the vegetable you want to produce and the purpose of your production.

AfriBEST SEEDS offers varieties across a wide range of vegetable crops, including tomatoes, cabbage, kale, sukuma wiki, onions, carrots, cucumbers, peppers, eggplant, amaranthus, beetroot, coriander, lettuce and other vegetables.

Choosing the right crop and variety helps you plan your production around your available land, resources and target market.

### 2. Consider Your Growing Conditions

Different crops and varieties can perform differently depending on the growing environment.

Consider factors such as:

- Temperature
- Rainfall
- Water availability
- Soil conditions
- Planting season
- Available growing space
- Local production conditions

Understanding your farm environment can help you select varieties that fit your production plan.

### 3. Understand Your Production Goals

Think about what you want to achieve from the crop before selecting your seed.

Your production goal may include:

- Supplying local markets
- Producing vegetables for household consumption
- Supplying retailers or traders
- Producing for restaurants and institutions
- Planning regular harvests
- Producing crops with specific market characteristics

Having a clear production objective makes it easier to compare available varieties.

### 4. Consider the Crop's Production Period

Farmers should also consider how the crop fits into their production schedule.

Understanding the expected crop cycle can help with:

- Land preparation
- Nursery planning
- Transplanting
- Irrigation planning
- Labour requirements
- Harvest planning
- Market scheduling

Always follow the information provided on the seed package and seek appropriate agronomic guidance for your specific production conditions.

The right choice depends on your farming environment, production objectives, available resources and intended market.

## Start With Quality Seed and Good Planning

Good crop production involves more than selecting seed.

Farmers should also pay attention to:

- Land preparation
- Nursery management
- Plant spacing
- Water management
- Weed management
- Crop nutrition
- Pest and disease monitoring
- Harvest timing
- Post-harvest handling

Starting with a clear production plan can help farmers manage their resources more effectively and reduce avoidable production challenges.

## Read the Seed Information Carefully

Before planting, always check the information provided with your seed.

Important information may include:

- Crop variety
- Seed quantity
- Germination information
- Recommended planting guidance
- Lot or batch information
- Storage instructions
- Seed treatment information where applicable

Proper seed handling and storage are also important for maintaining seed quality before planting.

## Plan Your Crop Before You Plant

Good results begin before the seed goes into the soil.

Take time to understand your production environment, prepare your land or nursery properly, plan your water supply and understand where you intend to sell your produce.

Selecting a suitable seed variety and combining it with good crop management practices can give your production plan a stronger foundation.

## Conclusion

Selecting the right vegetable seed variety is an important first step in planning a successful crop.

Consider your growing conditions, production objectives, available resources and target market before making your selection.

AfriBEST SEEDS provides a broad range of vegetable seed varieties for farmers looking to plan and develop vegetable production across different crops.

Explore our vegetable seed range and choose varieties that fit your farming plans.
  `,

  related: [
    {
      id: '2',
      title: 'Growing Healthy Tomatoes From Seed to Harvest',
      slug: 'growing-healthy-tomatoes-from-seed-to-harvest',
      coverImage:
        '/images/tomato 1.jpeg',
      category: 'Tomato Production',
      categorySlug: 'tomato-production',
      publishedAt: '2026-09-12T10:30:00Z',
    },

    {
      id: '3',
      title: 'Practical Guide to Growing Healthy Cabbage',
      slug: 'practical-guide-growing-healthy-cabbage',
      coverImage:
        '/images/cabbage1.jpg',
      category: 'Cabbage Production',
      categorySlug: 'cabbage-production',
      publishedAt: '2026-09-10T08:15:00Z',
    },

    {
      id: '4',
      title: 'Growing Sukuma Wiki, Kale and Other Leafy Vegetables',
      slug: 'growing-sukuma-wiki-kale-leafy-vegetables',
      coverImage:
        '/images/wiki.jpg',
      category: 'Leafy Vegetables',
      categorySlug: 'leafy-vegetables',
      publishedAt: '2026-09-07T14:30:00Z',
    },
  ],
};

// ======================================================
// SEO Metadata
// ======================================================

export async function generateMetadata() {
  return {
    title: `${article.title} | AfriBEST SEEDS`,

    description: article.excerpt,

    keywords: article.tags,

    openGraph: {
      title: `${article.title} | AfriBEST SEEDS`,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      tags: article.tags,

      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | AfriBEST SEEDS`,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

// ======================================================
// Article JSON-LD
// ======================================================

function ArticleJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline: article.title,

    description: article.excerpt,

    image: [article.coverImage],

    author: {
      '@type': 'Organization',
      name: 'AfriBEST SEEDS',
    },

    publisher: {
      '@type': 'Organization',
      name: 'AfriBEST SEEDS',
      logo: {
        '@type': 'ImageObject',
        url: '/logo.png',
      },
    },

    datePublished: article.publishedAt,

    dateModified: article.updatedAt,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `/blog/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

// ======================================================
// Content Processor
// ======================================================

function processContent(content: string): string {
  let processedContent = content
    .replace(
      /^### (.*)$/gm,
      `
      <div class="article-subheading">
        <span class="article-subheading-number"></span>
        <h3>$1</h3>
      </div>
      `
    )
    .replace(
      /^## (.*)$/gm,
      `
      <div class="article-heading">
        <span class="article-heading-line"></span>
        <h2>$1</h2>
      </div>
      `
    )
    .replace(
      /^#### (.*)$/gm,
      '<h4 class="article-h4">$1</h4>'
    );

  processedContent = processedContent.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong>$1</strong>'
  );

  processedContent = processedContent.replace(
    /^\d+\. (.*)$/gm,
    '<li class="article-numbered-item">$1</li>'
  );

  processedContent = processedContent.replace(
    /^- (.*)$/gm,
    '<li class="article-bullet-item">$1</li>'
  );

  processedContent = processedContent.replace(
    /^(?!<h[234]|<li|<div)(.+)$/gm,
    '<p>$1</p>'
  );

  return processedContent;
}

// ======================================================
// Article Page
// ======================================================

export default function ArticlePage() {
  const breadcrumbsItems = [
    {
      label: 'Farming Guides',
      href: '/blog',
    },

    {
      label: article.category,
      href: `/category/${article.categorySlug}`,
    },

    {
      label: article.title,
      href: `/blog/${article.slug}`,
      isCurrent: true,
    },
  ];

  const publishDate = formatDate(article.publishedAt);

  const publishDateSEO = formatDateForSEO(article.publishedAt);

  return (
    <>
      <ArticleJsonLd />

      <main className="min-h-screen bg-[#F7FCF9]">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="relative overflow-hidden bg-[#063D29]">

          {/* Background decorations */}

          <div className="absolute left-[-120px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#00A863]/20 blur-3xl" />

          <div className="absolute bottom-[-160px] right-[-120px] h-[480px] w-[480px] rounded-full bg-[#73E6AF]/10 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(115,230,175,0.12),transparent_35%)]" />

          <div className="relative mx-auto max-w-[1500px] px-5 pb-16 pt-8 sm:px-8 lg:px-12 xl:px-16">

            <Breadcrumbs items={breadcrumbsItems} />

            <div className="mx-auto mt-10 max-w-6xl text-center">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md">

                AfriBEST Farming Guide

              </div>

              <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

                {article.title}

              </h1>

              <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-white/75 sm:text-lg md:text-xl">

                {article.excerpt}

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">

                <span className="inline-flex items-center gap-2">

                  <CalendarDays className="h-4 w-4 text-[#73E6AF]" />

                  {publishDate}

                </span>

                <span className="h-1 w-1 rounded-full bg-white/30" />

                <span className="inline-flex items-center gap-2">

                  <Clock3 className="h-4 w-4 text-[#73E6AF]" />

                  {article.readingTime}

                </span>

                <span className="h-1 w-1 rounded-full bg-white/30" />

                <span className="inline-flex items-center gap-2">

                  <BookOpen className="h-4 w-4 text-[#73E6AF]" />

                  {article.category}

                </span>

              </div>

            </div>

          </div>

        </section>

        {/* ==================================================
            FEATURED IMAGE
        ================================================== */}

        <section className="relative z-10 mx-auto -mt-8 max-w-[1450px] px-4 sm:px-8 lg:px-12">

          <div className="relative h-[300px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl sm:h-[440px] md:h-[540px] lg:h-[620px]">

            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">

              <Badge className="border-0 bg-white px-5 py-2.5 text-sm font-bold text-[#075C3A] shadow-xl hover:bg-white">

                {article.category}

              </Badge>

            </div>

          </div>

        </section>

        {/* ==================================================
            MAIN ARTICLE AREA
        ================================================== */}

        <section className="mx-auto max-w-[1450px] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_370px]">

            {/* ==================================================
                MAIN CONTENT
            ================================================== */}

            <article className="min-w-0 rounded-[2rem] border border-[#E1EEE7] bg-white shadow-sm">

              <div className="p-6 sm:p-10 lg:p-14 xl:p-16">

                {/* Article information */}

                <div className="mb-10 flex flex-wrap items-center gap-5 border-b border-slate-100 pb-7">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF8F1] text-[#00A863]">

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

                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Published by
                      </p>

                      <p className="font-bold text-[#075C3A]">
                        AfriBEST SEEDS
                      </p>

                    </div>

                  </div>

                  <div className="hidden h-10 w-px bg-slate-200 sm:block" />

                  <div className="flex items-center gap-2 text-sm text-slate-500">

                    <CalendarDays className="h-4 w-4 text-[#00A863]" />

                    <time dateTime={publishDateSEO}>
                      {publishDate}
                    </time>

                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">

                    <Clock3 className="h-4 w-4 text-[#00A863]" />

                    {article.readingTime}

                  </div>

                </div>

                {/* Intro highlight */}

                <div className="mb-12 rounded-2xl border-l-4 border-[#00A863] bg-[#EAF8F1] px-6 py-6 sm:px-8">

                  <div className="flex gap-4">

                    <div className="hidden shrink-0 sm:flex">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A863] text-white">

                    <Image
                    src="/logo2.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />

                      </div>

                    </div>

                    <div>

                      <p className="text-xs font-black uppercase tracking-[0.15em] text-[#00A863]">
                        Farming Insight
                      </p>

                      <p className="mt-2 text-base font-medium leading-7 text-[#123B2A] sm:text-lg">

                        The right seed variety should fit your farm,
                        production conditions, available resources and
                        intended market.

                      </p>

                    </div>

                  </div>

                </div>

                {/* Article content */}

                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{
                    __html: processContent(article.content),
                  }}
                />

                {/* ==================================================
                    TAGS
                ================================================== */}

                <div className="mt-14 border-t border-slate-100 pt-9">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF8F1] text-[#00A863]">

                    <Image
                    src="/logo1.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />

                    </div>

                    <h2 className="text-xl font-black text-[#123B2A]">
                      Farming Topics
                    </h2>

                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">

                    {article.tags.map((tag) => (

                      <a
                        key={tag}
                        href="https://catalogue.afribestseeds.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >

                        <Badge
                          variant="outline"
                          className="cursor-pointer rounded-full border-[#00A863]/25 bg-white px-4 py-2 text-[#075C3A] transition hover:border-[#00A863] hover:bg-[#EAF8F1]"
                        >
                          {tag}
                        </Badge>

                      </a>

                    ))}

                  </div>

                </div>

{/* ==================================================
    SHARE
================================================== */}

<div className="mt-10 rounded-2xl bg-[#F7FCF9] p-6 sm:p-7">

  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

    <div>

      <h2 className="text-lg font-black text-[#123B2A]">
        Share This Farming Guide
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Share useful farming knowledge with your network.
      </p>

    </div>

    <div className="flex flex-wrap gap-2">

      {/* Facebook */}
      <Button
        variant="outline"
        size="sm"
        className="border-[#00A863]/25 text-[#075C3A] hover:bg-[#EAF8F1]"
        asChild
      >
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            `https://www.afribestseeds.com/blog/${article.slug}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </a>
      </Button>


      {/* Instagram */}
      <Button
        variant="outline"
        size="sm"
        className="border-[#00A863]/25 text-[#075C3A] hover:bg-[#EAF8F1]"
        asChild
      >
        <a
          href="https://www.instagram.com/afribestseeds/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit AfriBEST Seeds on Instagram"
        >
          <Instagram className="mr-2 h-4 w-4" />
          Instagram
        </a>
      </Button>


      {/* WhatsApp */}
      <Button
        variant="outline"
        size="sm"
        className="border-[#00A863]/25 text-[#075C3A] hover:bg-[#EAF8F1]"
        asChild
      >
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `${article.title} - https://www.afribestseeds.com/blog/${article.slug}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </a>
      </Button>


      {/* Email */}
      <Button
        variant="outline"
        size="sm"
        className="border-[#00A863]/25 text-[#075C3A] hover:bg-[#EAF8F1]"
        asChild
      >
        <a
          href={`mailto:?subject=${encodeURIComponent(
            article.title
          )}&body=${encodeURIComponent(
            `I thought you might find this farming guide useful:\n\n${article.title}\nhttps://www.afribestseeds.com/blog/${article.slug}`
          )}`}
          aria-label="Share by email"
        >
          <Mail className="mr-2 h-4 w-4" />
          Email
        </a>
      </Button>

    </div>

  </div>

</div>

              </div>

            </article>

            {/* ==================================================
                SIDEBAR
            ================================================== */}

            <aside className="lg:sticky lg:top-24 lg:self-start">

              <div className="space-y-6">

                {/* Article navigation */}

                <div className="rounded-[1.75rem] border border-[#E1EEE7] bg-white p-6 shadow-sm">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF8F1] text-[#00A863]">

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

                      <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                        This Guide
                      </p>

                      <h3 className="font-black text-[#123B2A]">
                        Article Information
                      </h3>

                    </div>

                  </div>

                  <div className="mt-6 space-y-4">

                    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">

                      <span className="text-sm text-slate-500">
                        Category
                      </span>

                      <span className="text-right text-sm font-bold text-[#075C3A]">
                        {article.category}
                      </span>

                    </div>

                    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">

                      <span className="text-sm text-slate-500">
                        Published
                      </span>

                      <span className="text-right text-sm font-bold text-[#123B2A]">
                        {publishDate}
                      </span>

                    </div>

                    <div className="flex items-start justify-between gap-4">

                      <span className="text-sm text-slate-500">
                        Reading time
                      </span>

                      <span className="text-right text-sm font-bold text-[#123B2A]">
                        {article.readingTime}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Quality seed CTA */}

                <div className="relative overflow-hidden rounded-[1.75rem] bg-[#075C3A] p-7 text-white shadow-xl">

                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#00A863]/30 blur-2xl" />

                  <div className="relative">

                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00A863]">

                    <Image
                    src="/logo1.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />

                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#73E6AF]">
                      AfriBEST SEEDS
                    </p>

                    <h3 className="mt-2 text-2xl font-black leading-tight">
                      Pure Seeds for Better Yield
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-white/75">

                      Explore vegetable seed varieties for different
                      farming and production needs.

                    </p>

                    <Link
                      href="https://catalogue.afribestseeds.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 font-bold text-[#075C3A] transition hover:bg-[#EAF8F1]"
                    >

                      Explore Our Seeds

                      <ArrowRight className="ml-2 h-4 w-4" />

                    </Link>

                  </div>

                </div>

                {/* WhatsApp */}

                <a
                  href="https://wa.me/255682510710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[1.75rem] border border-[#DDEBE4] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#00A863]/40 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF8F1] text-[#00A863] transition group-hover:bg-[#00A863] group-hover:text-white">

                    <MessageCircle className="h-6 w-6" />

                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                      Need Assistance?
                    </p>

                    <p className="mt-1 font-black text-[#123B2A]">
                      Talk to AfriBEST SEEDS
                    </p>

                  </div>

                  <ArrowRight className="ml-auto h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#00A863]" />

                </a>

              </div>

            </aside>

          </div>

        </section>

        {/* ==================================================
            RELATED ARTICLES
        ================================================== */}

        <section className="border-y border-[#E1EEE7] bg-white py-16 sm:py-20">

          <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#00A863]">

                  More Farming Knowledge

                </div>

                <h2 className="text-3xl font-black tracking-tight text-[#123B2A] sm:text-4xl">

                  Related Farming Guides

                </h2>

                <p className="mt-3 max-w-2xl text-slate-600">

                  Continue exploring practical vegetable farming
                  information from AfriBEST SEEDS.

                </p>

              </div>

              <Link
                href="/blog"
                className="inline-flex items-center font-bold text-[#00A863] transition hover:text-[#075C3A]"
              >

                View All Guides

                <ArrowRight className="ml-2 h-5 w-5" />

              </Link>

            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

              {article.related.map((relatedArticle) => (

                <article
                  key={relatedArticle.id}
                  className="group overflow-hidden rounded-[1.75rem] border border-[#E1EEE7] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >

                  <Link
                    href={`/blog/${relatedArticle.slug}`}
                    className="relative block h-60 overflow-hidden"
                  >

                    <Image
                      src={relatedArticle.coverImage}
                      alt={relatedArticle.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                    <div className="absolute bottom-4 left-4">

                      <Badge className="border-0 bg-white/95 font-bold text-[#075C3A] shadow-md hover:bg-white">

                        {relatedArticle.category}

                      </Badge>

                    </div>

                  </Link>

                  <div className="p-6">

                    <Link href={`/blog/${relatedArticle.slug}`}>

                      <h3 className="text-xl font-black leading-tight text-[#123B2A] transition-colors group-hover:text-[#00A863]">

                        {relatedArticle.title}

                      </h3>

                    </Link>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5 text-xs text-slate-500">

                      <div className="flex items-center gap-1.5">

                        <CalendarDays className="h-4 w-4 text-[#00A863]" />

                        <time
                          dateTime={formatDateForSEO(
                            relatedArticle.publishedAt
                          )}
                        >

                          {formatDate(
                            relatedArticle.publishedAt
                          )}

                        </time>

                      </div>

                      <Link
                        href={`/blog/${relatedArticle.slug}`}
                        className="inline-flex items-center font-bold text-[#00A863]"
                      >

                        Read Guide

                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />

                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ==================================================
            CTA
        ================================================== */}

        <section className="relative overflow-hidden bg-[#EAF8F1] py-20 sm:py-24">

          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#00A863]/10 blur-3xl" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#73E6AF]/20 blur-3xl" />

          <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00A863] text-white shadow-xl shadow-[#00A863]/20">

                    <Image
                    src="/logo1.png"
                    alt="AfriBEST Seeds"
                    width={160}
                    height={55}
                    priority
                    className="h-11 w-auto object-contain"
                  />

            </div>

            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#00A863]">

              Pure Seeds for Better Yield

            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#123B2A] sm:text-4xl md:text-5xl">

              Ready to plan your next crop?

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">

              Explore the AfriBEST SEEDS vegetable seed range and
              discover varieties that fit your farming plans.

            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="https://catalogue.afribestseeds.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#00A863] px-8 py-4 font-bold text-white shadow-lg shadow-[#00A863]/20 transition hover:-translate-y-1 hover:bg-[#008F55]"
              >

                Explore Our Seeds

                <ArrowRight className="ml-2 h-5 w-5" />

              </a>

              <a
                href="https://wa.me/255682510710"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[#00A863]/30 bg-white px-8 py-4 font-bold text-[#075C3A] transition hover:-translate-y-1 hover:border-[#00A863] hover:bg-[#00A863] hover:text-white"
              >

                <MessageCircle className="mr-2 h-5 w-5" />

                Contact AfriBEST SEEDS

              </a>

            </div>

          </div>

        </section>

        {/* ==================================================
            BACK TO BLOG
        ================================================== */}

        <div className="bg-white py-8">

          <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

            <Link
              href="/blog"
              className="inline-flex items-center font-bold text-[#00A863] transition hover:text-[#075C3A]"
            >

              <ArrowLeft className="mr-2 h-5 w-5" />

              Back to Farming Guides

            </Link>

          </div>

        </div>

      </main>

    </>
  );
}