"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials as fallbackTestimonials, testimonialsSection, type Testimonial } from "@/content/home";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

type TestimonialsSectionProps = {
  testimonials?: Testimonial[];
  rating?: number | null;
  totalReviews?: number | null;
};

export function TestimonialsSection({
  testimonials = fallbackTestimonials,
  rating,
  totalReviews,
}: TestimonialsSectionProps) {
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

        {rating && totalReviews ? (
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-body">
            <span className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.round(rating) ? "currentColor" : "none"}
                  strokeWidth={1.5}
                />
              ))}
            </span>
            <span>
              {rating.toFixed(1)} from {totalReviews} Google reviews
            </span>
          </p>
        ) : null}

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
              <SwiperSlide key={t.name + t.role}>
                <figure className="h-full border border-border bg-surface-elevated p-8 text-left">
                  {t.rating ? (
                    <div className="mb-3 flex items-center gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < t.rating! ? "currentColor" : "none"}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                  ) : null}
                  <blockquote className="text-sm text-body italic">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    {t.avatar ? (
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="size-12 rounded-full object-cover"
                        unoptimized
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex size-12 items-center justify-center rounded-full bg-primary/10 font-serif text-sm font-semibold text-primary"
                      >
                        {initials(t.name)}
                      </span>
                    )}
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
