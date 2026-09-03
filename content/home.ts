export type AmenityItem = {
  title: string;
  description: string;
  icon: "bed" | "shield" | "parking" | "wifi" | "utensils";
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string | null;
  rating?: number;
};

export const hero = {
  kicker: "WELCOME TO",
  titleWhite: "CITY",
  titleGold: "VIEW",
  tagline: "BAR • LODGE • NIGHT CLUB • GYM • EVENTS",
  description:
    "Experience luxury, nightlife, fitness and unforgettable events all in one premium destination. Relax, celebrate, lodge, train and enjoy the finest atmosphere at Cityview.",
  primaryCta: { label: "EXPLORE OUR SERVICES", href: "/#services" },
  secondaryCta: { label: "WATCH VIDEO", href: "https://youtu.be/aQKjaGdnq28" },
  // Live site's hero container background is an autoplaying muted YouTube loop
  // (background_video_link in Elementor). `image` is the static fallback shown
  // when the visitor prefers reduced motion.
  videoId: "aQKjaGdnq28",
  image: "/images/home/hero.jpg",
};

export const servicesSection = {
  kicker: "DISCOVER",
  title: "EXPERIENCES. ELEVATED",
};

export const amenities: AmenityItem[] = [
  {
    title: "Luxury Lodge",
    description: "Comfort meets elegance.",
    icon: "bed",
  },
  {
    title: "24/7 Security",
    description: "Your safety is our priority.",
    icon: "shield",
  },
  {
    title: "Ample Parking",
    description: "Secure and spacious parking.",
    icon: "parking",
  },
  {
    title: "Free Wi-Fi",
    description: "Stay connected always.",
    icon: "wifi",
  },
  {
    title: "Restaurant",
    description: "Delicious meals and drinks.",
    icon: "utensils",
  },
];

export const ctaBand = {
  title: "READY TO EXPERIENCE CITYVIEW?",
  subtitle: "BOOK YOUR RESERVATION NOW",
  description: "For lodge stays, table reservations, events or gym membership.",
  cta: { label: "BOOK NOW", href: "/get-fit" },
  image: "/images/home/hero.jpg",
};

export const testimonialsSection = {
  title: "What My Clients Say about us",
  quoteIcon: "/images/home/quote-icon.png",
};

/**
 * Shown only until GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID are configured
 * (see lib/google-reviews.ts), after which live Google reviews take over.
 * No avatar photos — TestimonialsSection renders initials instead so we're
 * never showing a stock photo next to a name it doesn't belong to.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Cityview is the spot whenever we want good music, good drinks and a lodge room nearby so nobody has to drive after. Staff are always polite and the place is clean.",
    name: "Chiamaka Okafor",
    role: "Lagos",
    avatar: null,
  },
  {
    quote:
      "Booked the gym membership and ended up loving the whole setup — equipment is solid and the trainers actually pay attention. My weekend lodge stay after events night was smooth too.",
    name: "Emeka Nwosu",
    role: "Ejigbo",
    avatar: null,
  },
  {
    quote:
      "Hosted a birthday event here and the team handled everything from setup to catering. Guests are still talking about it. Will definitely book again.",
    name: "Funmilayo Adeyemi",
    role: "Lagos",
    avatar: null,
  },
];

export const contactSection = {
  address: "106-108, Isolo Egbe Rd, Ejigbo, Lagos 100264, Lagos",
  cta: { label: "GET DIRECTION" },
};
