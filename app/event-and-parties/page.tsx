import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { hero } from "@/content/event-and-parties";

export const metadata: Metadata = {
  title: "Events and Parties",
  description: hero.description,
  alternates: { canonical: "/event-and-parties" },
};

export default function EventAndPartiesPage() {
  return (
    <PageHero
      image={hero.image}
      imageAlt="Cityview Events and Parties"
      title={hero.title}
      description={hero.description}
      cta={hero.cta}
      minHeight="min-h-[80vh]"
    />
  );
}
