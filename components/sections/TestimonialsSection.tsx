"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, testimonialsSection } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <Image
        src={testimonialsSection.quoteIcon}
        alt=""
        width={220}
        height={220}
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 opacity-20"
      />

      <Container className="relative">
        <SectionHeading title={testimonialsSection.title} />

        <div className="mx-auto mt-14 max-w-5xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{ 768: { slidesPerView: 3 } }}
            loop
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <figure className="h-full border border-border bg-surface-elevated p-8 text-left">
                  <blockquote className="text-sm text-body italic">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover"
                    />
                    <span>
                      <span className="block font-serif font-semibold text-heading">{t.name}</span>
                      <span className="block text-xs text-body">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
