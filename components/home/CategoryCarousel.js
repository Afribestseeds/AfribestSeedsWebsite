'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                              HERO SLIDES                                   */
/* -------------------------------------------------------------------------- */

const heroSlides = [

  {
    image:
      'images/corriander.jpg',

    eyebrow:
      'Pure Seeds for Better Yields',

    title:
      'For Pure Seeds.',

    highlight:
      'Welcome to AfriBEST SEEDS.',

    description:
      'Discover quality vegetable seeds carefully selected to help farmers achieve healthy crops, reliable production and better harvests.',
  },

  {
    image:
      'images/kale1.jpg',

    eyebrow:
      'Pure Seeds for Better Yields',

    title:
      'Your Quality starts.',

    highlight:
      'With The Right Seed.',

    description:
      'From tomatoes and cabbage to onions, kale, peppers and many more, AfriBEST SEEDS helps put better possibilities in every field.',
  },

  {
    image:
      'images/ngogwe.jpeg',

    eyebrow:
      'Pure Seeds for Better Yields',

    title:
      'Your Farm Starts',

    highlight:
      'With The Right Seed.',

    description:
      'Choose from a growing range of vegetable seed varieties designed to support productive farming and a stronger agricultural future.',
  },
];

/* -------------------------------------------------------------------------- */
/*                         HERO CAROUSEL COMPONENT                            */
/* -------------------------------------------------------------------------- */

export default function HeroCarousel() {
  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 80,
      align: 'start',
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const activeSlide = heroSlides[selectedIndex];

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#063D29] md:min-h-[760px]">

      {/* ================================================================== */}
      {/* BACKGROUND CAROUSEL                                                */}
      {/* ================================================================== */}

      <div
        ref={emblaRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="flex h-full">

          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className="relative min-w-0 flex-[0_0_100%] overflow-hidden"
            >

              <Image
                src={slide.image}
                alt={`${slide.title} ${slide.highlight}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className={
                  index === selectedIndex
                    ? 'scale-110 object-cover object-center hero-image-transition'
                    : 'scale-100 object-cover object-center hero-image-transition'
                }
              />

            </div>
          ))}

        </div>
      </div>

      {/* ================================================================== */}
      {/* IMAGE OVERLAYS                                                      */}
      {/* ================================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#063D29]/95 via-[#063D29]/20 to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_70%_45%,rgba(0,168,99,0.18),transparent_45%)]" />

      {/* ================================================================== */}
      {/* CONTENT                                                             */}
      {/* ================================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 sm:px-8 md:min-h-[900px] lg:px-12">

        <div className="max-w-4xl">

          {/* Eyebrow */}

          <div
            key={`eyebrow-${selectedIndex}`}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-white shadow-lg backdrop-blur-md"
          >

            {activeSlide.eyebrow}
          </div>

          {/* Heading */}

          <div key={`content-${selectedIndex}`}>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">

              {activeSlide.title}

              <span className="block text-[#35D18A]">
                {activeSlide.highlight}
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg md:text-xl">
              {activeSlide.description}
            </p>

          </div>

          {/* Buttons */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <a
              href="https://catalogue.afribestseeds.com/"
              target="_blank"
                rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-xl bg-[#00A863] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#008F55]"
            >
              Explore Our Seeds

              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/50 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#075C3A]"
            >
              Talk To Us

              <MessageCircle className="ml-2 h-5 w-5" />
            </Link>

          </div>

          {/* Trust points */}

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white">

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#35D18A]" />
              Quality Seed Varieties
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#35D18A]" />
              Farmer Focused
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#35D18A]" />
              Vegetable Seeds
            </div>

          </div>

        </div>

      </div>

      {/* ================================================================== */}
      {/* CAROUSEL INDICATORS                                                */}
      {/* ================================================================== */}

      <div className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-2 backdrop-blur-md">

        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Show hero slide ${index + 1}`}
            aria-current={selectedIndex === index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={
              selectedIndex === index
                ? 'h-1.5 w-9 rounded-full bg-[#73E6AF] transition-all duration-500'
                : 'h-1.5 w-2 rounded-full bg-white/50 transition-all duration-500 hover:bg-white'
            }
          />
        ))}

      </div>

      {/* Slide counter */}

      <div className="absolute bottom-24 right-6 z-30 hidden rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-md sm:block">

        0{selectedIndex + 1}

        <span className="mx-2 text-white/40">
          /
        </span>

        0{heroSlides.length}

      </div>

      {/* Bottom fade */}

      <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />

    </section>
  );
}