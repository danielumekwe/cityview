import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Gallery } from "@/components/sections/Gallery";
import { hero, gallery } from "@/content/night-club";

export const metadata: Metadata = {
  title: "Night Club",
  description: hero.description,
  alternates: { canonical: "/night-club" },
};

export default function NightClubPage() {
  return (
    <>
      <PageHero
        image={hero.image}
        imageAlt="Cityview Night Club"
        title={hero.title}
        description={hero.description}
        cta={hero.cta}
      />
      <Gallery images={gallery} />
    </>
  );
}
