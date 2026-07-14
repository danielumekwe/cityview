import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StorySection } from "@/components/sections/StorySection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { hero, story, servicesSection } from "@/content/about";

export const metadata: Metadata = {
  title: "About Us",
  description: hero.description,
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        image={hero.image}
        imageAlt="Cityview Bar & Lodge venue"
        title={hero.titleLines}
        description={hero.description}
        cta={hero.cta}
      />
      <StorySection
        id="story"
        kicker={story.kicker}
        title={story.title}
        paragraph={story.paragraph}
        videoId={story.videoId}
      />
      <ServiceGrid kicker={servicesSection.kicker} title={servicesSection.title} />
    </>
  );
}
