import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Gallery } from "@/components/sections/Gallery";
import { hero, gallery } from "@/content/apartments";

export const metadata: Metadata = {
  title: "Cityview Apartments",
  description: hero.description,
  alternates: { canonical: "/cityview-apartments" },
};

export default function CityviewApartmentsPage() {
  return (
    <>
      <PageHero
        image={hero.image}
        imageAlt="Cityview Apartments"
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
      />
      <Gallery images={gallery} />
    </>
  );
}
