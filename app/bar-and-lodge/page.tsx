import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Gallery } from "@/components/sections/Gallery";
import { hero, gallery } from "@/content/bar-and-lodge";

export const metadata: Metadata = {
  title: "Bar and Lodge",
  description: hero.description,
  alternates: { canonical: "/bar-and-lodge" },
};

export default function BarAndLodgePage() {
  return (
    <>
      <PageHero
        image={hero.image}
        imageAlt="Cityview Bar and Lodge"
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
      />
      <Gallery images={gallery} />
    </>
  );
}
