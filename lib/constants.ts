export const siteConfig = {
  name: "Cityview Bar & Lodge",
  shortName: "Cityview",
  description:
    "Hotel, Night Club, Gym & Event Centre in Ejigbo Lagos — bar, lodge, apartments, gym and events under one roof.",
  url: "https://cityview.com.ng",
  address: "106-108, Isolo Egbe Rd, Ejigbo, Lagos 100264, Lagos",
  phones: ["08116312161", "07035803434"],
  email: "info@cityview.com.ng",
  // Social links are unconfigured (href="#") on the live site — kept as
  // placeholders rather than inventing real profile URLs.
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

// Mirrors the live site's active "Cityview Main Menu" (term_id 6), in its
// configured menu_order.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Bar and Lodge", href: "/bar-and-lodge" },
  { label: "Cityview Apartments", href: "/cityview-apartments" },
  { label: "Event and Parties", href: "/event-and-parties" },
  { label: "Gym and Fitness", href: "/gym-and-fitness" },
  { label: "Night club", href: "/night-club" },
  { label: "Contact Us", href: "/contact-us" },
];

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address
)}`;
