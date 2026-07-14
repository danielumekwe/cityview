export type AmenityItem = {
  title: string;
  description: string;
  icon: "bed" | "shield" | "parking" | "wifi" | "utensils";
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
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
  image: "/images/home/cta-band.jpg",
};

export const testimonialsSection = {
  title: "What My Clients Say about us",
  quoteIcon: "/images/home/quote-icon.png",
};

/**
 * TODO(content): these are Lorem Ipsum placeholders in the live WordPress
 * database, not real customer quotes. Migrated verbatim per instructions —
 * swap in real testimonials when available.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Et ligula sit quam, sapien lorem. Nec risus lorem vestibulum mi facilisis. Tincidunt urna accumsan nec risus lorem vestibulum mi facilisis.",
    name: "Freya Sanz",
    role: "Actress",
    avatar: "/images/home/testimonial-1.png",
  },
  {
    quote:
      "Et ligula sit quam, sapien lorem. Nec risus lorem vestibulum mi facilisis. Tincidunt urna accumsan nec risus lorem vestibulum mi facilisis.",
    name: "Mark Ficher",
    role: "Mr. America",
    avatar: "/images/home/testimonial-2.png",
  },
  {
    quote:
      "Et ligula sit quam, sapien lorem. Nec risus lorem vestibulum mi facilisis. Tincidunt urna accumsan nec risus lorem vestibulum mi facilisis.",
    name: "Diana Burnwood",
    role: "Mother",
    avatar: "/images/home/testimonial-3.png",
  },
];

export const contactSection = {
  address: "106-108, Isolo Egbe Rd, Ejigbo, Lagos 100264, Lagos",
  cta: { label: "GET DIRECTION" },
};
