import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { AmenityRow } from "@/components/sections/AmenityRow";
import { CTABand } from "@/components/sections/CTABand";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactMap } from "@/components/sections/ContactMap";
import { servicesSection } from "@/content/home";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Home – Cityview Bar & Lodge",
  description:
    "Experience luxury, nightlife, fitness and unforgettable events all in one premium destination in Ejigbo, Lagos.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const liveReviews = await getGoogleReviews();

  return (
    <>
      <Hero />
      <ServiceGrid id="services" kicker={servicesSection.kicker} title={servicesSection.title} />
      <AmenityRow />
      <CTABand />
      <TestimonialsSection
        testimonials={liveReviews?.testimonials}
        rating={liveReviews?.rating}
        totalReviews={liveReviews?.totalReviews}
      />
      <ContactMap />
    </>
  );
}
