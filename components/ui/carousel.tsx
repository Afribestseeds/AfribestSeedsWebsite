'use client';

import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext =
  React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

/* ============================================================
   CAROUSEL
============================================================ */

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] =
      React.useState(false);

    const [canScrollNext, setCanScrollNext] =
      React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    /* ----------------------------------------------------------
       Keyboard navigation
    ---------------------------------------------------------- */

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (
          event.target instanceof HTMLElement &&
          ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(
            event.target.tagName
          )
        ) {
          return;
        }

        if (orientation === 'horizontal') {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            scrollPrev();
          }

          if (event.key === 'ArrowRight') {
            event.preventDefault();
            scrollNext();
          }
        }

        if (orientation === 'vertical') {
          if (event.key === 'ArrowUp') {
            event.preventDefault();
            scrollPrev();
          }

          if (event.key === 'ArrowDown') {
            event.preventDefault();
            scrollNext();
          }
        }
      },
      [orientation, scrollPrev, scrollNext]
    );

    /* ----------------------------------------------------------
       Expose Embla API
    ---------------------------------------------------------- */

    React.useEffect(() => {
      if (!api || !setApi) return;

      setApi(api);
    }, [api, setApi]);

    /* ----------------------------------------------------------
       Embla state listeners
    ---------------------------------------------------------- */

    React.useEffect(() => {
      if (!api) return;

      onSelect(api);

      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api.off('reInit', onSelect);
        api.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation:
            orientation ||
            (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn(
            'group/carousel relative w-full',
            className
          )}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = 'Carousel';

/* ============================================================
   CAROUSEL CONTENT
============================================================ */

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="relative overflow-hidden rounded-[1.5rem]"
    >
      {/* Left soft edge */}
      {orientation === 'horizontal' && (
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/carousel:opacity-100" />
      )}

      {/* Right soft edge */}
      {orientation === 'horizontal' && (
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/carousel:opacity-100" />
      )}

      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal'
            ? '-ml-4'
            : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
    </div>
  );
});

CarouselContent.displayName = 'CarouselContent';

/* ============================================================
   CAROUSEL ITEM
============================================================ */

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        'transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'motion-safe:will-change-transform',
        orientation === 'horizontal'
          ? 'pl-4'
          : 'pt-4',
        className
      )}
      {...props}
    />
  );
});

CarouselItem.displayName = 'CarouselItem';

/* ============================================================
   PREVIOUS BUTTON
============================================================ */

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(
  (
    {
      className,
      variant = 'outline',
      size = 'icon',
      ...props
    },
    ref
  ) => {
    const {
      orientation,
      scrollPrev,
      canScrollPrev,
    } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute z-20',
          'h-11 w-11 rounded-full',
          'border border-white/30',
          'bg-white/90 backdrop-blur-md',
          'text-[#075C3A]',
          'shadow-lg shadow-black/10',
          'transition-all duration-300',
          'hover:-translate-y-1',
          'hover:border-[#00A863]',
          'hover:bg-[#00A863]',
          'hover:text-white',
          'hover:shadow-xl',
          'active:scale-95',
          'disabled:pointer-events-none disabled:opacity-30',
          'focus-visible:ring-2',
          'focus-visible:ring-[#00A863]',
          'focus-visible:ring-offset-2',
          orientation === 'horizontal'
            ? '-left-5 top-1/2 -translate-y-1/2'
            : '-top-5 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        aria-label="Previous slide"
        {...props}
      >
        <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />

        <span className="sr-only">
          Previous slide
        </span>
      </Button>
    );
  }
);

CarouselPrevious.displayName = 'CarouselPrevious';

/* ============================================================
   NEXT BUTTON
============================================================ */

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(
  (
    {
      className,
      variant = 'outline',
      size = 'icon',
      ...props
    },
    ref
  ) => {
    const {
      orientation,
      scrollNext,
      canScrollNext,
    } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          'absolute z-20',
          'h-11 w-11 rounded-full',
          'border border-white/30',
          'bg-white/90 backdrop-blur-md',
          'text-[#075C3A]',
          'shadow-lg shadow-black/10',
          'transition-all duration-300',
          'hover:-translate-y-1',
          'hover:border-[#00A863]',
          'hover:bg-[#00A863]',
          'hover:text-white',
          'hover:shadow-xl',
          'active:scale-95',
          'disabled:pointer-events-none disabled:opacity-30',
          'focus-visible:ring-2',
          'focus-visible:ring-[#00A863]',
          'focus-visible:ring-offset-2',
          orientation === 'horizontal'
            ? '-right-5 top-1/2 -translate-y-1/2'
            : '-bottom-5 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        aria-label="Next slide"
        {...props}
      >
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />

        <span className="sr-only">
          Next slide
        </span>
      </Button>
    );
  }
);

CarouselNext.displayName = 'CarouselNext';

/* ============================================================
   EXPORTS
============================================================ */

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};