import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { hero } from "@/content/gym-and-fitness";

export const metadata: Metadata = {
  title: "Gym and Fitness",
  description: hero.description,
  alternates: { canonical: "/gym-and-fitness" },
};

export default function GymAndFitnessPage() {
  return (
    <PageHero
      image={hero.image}
      imageAlt="Cityview Gym and Fitness"
      title={hero.title}
      description={hero.description}
      cta={hero.cta}
      minHeight="min-h-[80vh]"
    />
  );
}
