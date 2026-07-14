export type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: "martini" | "music" | "dumbbell" | "calendar";
  image: string;
};

// Real copy + real photos from the live site's icon-box widgets (Bar & Lounge /
// Night Club / Gym & Fitness / Events & Parties block). This exact card set is
// reused verbatim on both the Home and About us pages in the live site.
export const services: ServiceCard[] = [
  {
    title: "Bar & Lounge",
    description:
      "Signature cocktails, premium drinks, good music and a classy atmosphere to relax and unwind.",
    href: "/bar-and-lodge",
    icon: "martini",
    image: "/images/shared/service-bar.avif",
  },
  {
    title: "Night Club",
    description:
      "Top DJs, lights, energy and the hottest nightlife experience for unforgettable nights.",
    href: "/night-club",
    icon: "music",
    image: "/images/shared/service-nightclub.avif",
  },
  {
    title: "Gym & Fitness",
    description:
      "Modern fitness equipment, personal training and wellness programs for everyone.",
    href: "/gym-and-fitness",
    icon: "dumbbell",
    image: "/images/shared/service-gym.avif",
  },
  {
    title: "Events & Parties",
    description:
      "From birthdays to corporate events, we create beautiful memories in a premium setting.",
    href: "/event-and-parties",
    icon: "calendar",
    image: "/images/shared/service-events.avif",
  },
];
