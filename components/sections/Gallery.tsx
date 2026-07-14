"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Container } from "@/components/ui/Container";
import "swiper/css";

export type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryProps = {
  id?: string;
  kicker?: string;
  title?: string;
  images: GalleryImage[];
};

export function Gallery({ id, kicker, title, images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close]);

  useEffect(() => {
    if (activeIndex !== null && swiper) {
      swiper.slideTo(activeIndex, 0);
    }
  }, [activeIndex, swiper]);

  return (
    <section id={id} className="bg-surface py-20 sm:py-28">
      <Container>
        {(kicker || title) && (
          <div className="mb-12 text-center">
            {kicker && (
              <p className="font-kicker mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                {kicker}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl font-semibold text-heading sm:text-4xl">{title}</h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1} of ${images.length}: ${image.alt}`}
              className="group relative aspect-4/3 overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" aria-hidden="true" />
            </button>
          ))}
        </div>
      </Container>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-6 right-6 z-10 text-white transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <X className="size-8" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous image"
            className="absolute left-2 z-10 text-white transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:left-6"
          >
            <ChevronLeft className="size-10" aria-hidden="true" />
          </button>

          <Swiper
            modules={[Keyboard]}
            keyboard
            initialSlide={activeIndex}
            onSwiper={setSwiper}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            className="h-[80vh] w-full max-w-5xl px-14"
          >
            {images.map((image) => (
              <SwiperSlide key={image.src} className="flex items-center justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="90vw"
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            aria-label="Next image"
            className="absolute right-2 z-10 text-white transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:right-6"
          >
            <ChevronRight className="size-10" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
