import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { AmenityRow } from "@/components/sections/AmenityRow";
import { CTABand } from "@/components/sections/CTABand";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactMap } from "@/components/sections/ContactMap";
import { servicesSection } from "@/content/home";

export const metadata: Metadata = {
  title: "Home – Cityview Bar & Lodge",
  description:
    "Experience luxury, nightlife, fitness and unforgettable events all in one premium destination in Ejigbo, Lagos.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid id="services" kicker={servicesSection.kicker} title={servicesSection.title} />
      <AmenityRow />
      <CTABand />
      <TestimonialsSection />
      <ContactMap />
    </>
  );
}
