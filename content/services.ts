export type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: "martini" | "music" | "dumbbell" | "calendar";
  image: string;
};

// Real copy for the icon-box widgets (Bar & Lounge / Night Club / Gym & Fitness /
// Events & Parties block), reused verbatim on both the Home and About us pages
// in the live site. Images are actual Cityview venue photos already used on the
// respective detail pages (bar-and-lodge.ts, night-club.ts, gym-and-fitness.ts,
// event-and-parties.ts) — not the generic stock photography this card set
// previously shipped with.
export const services: ServiceCard[] = [
  {
    title: "Bar & Lounge",
    description:
      "Signature cocktails, premium drinks, good music and a classy atmosphere to relax and unwind.",
    href: "/bar-and-lodge",
    icon: "martini",
    image: "/images/bar-and-lodge/bar-1.jpg",
  },
  {
    title: "Night Club",
    description:
      "Top DJs, lights, energy and the hottest nightlife experience for unforgettable nights.",
    href: "/night-club",
    icon: "music",
    image: "/images/bar-and-lodge/bar-2.jpg",
  },
  {
    title: "Gym & Fitness",
    description:
      "Modern fitness equipment, personal training and wellness programs for everyone.",
    href: "/gym-and-fitness",
    icon: "dumbbell",
    image: "/images/gym-and-fitness/hero.jpg",
  },
  {
    title: "Events & Parties",
    description:
      "From birthdays to corporate events, we create beautiful memories in a premium setting.",
    href: "/event-and-parties",
    icon: "calendar",
    image: "/images/event-and-parties/hero.jpg",
  },
];
