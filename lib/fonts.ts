import { Roboto, Playfair_Display, Allerta, Cinzel, Montserrat, Poppins } from "next/font/google";

// Body copy — matches the live site's Astra `body-font-family` setting.
export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

// Headings — matches the live site's Astra `headings-font-family` setting.
export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Primary nav menu — matches the live site's `header-menu1-font-family` setting.
export const allerta = Allerta({
  variable: "--font-allerta",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// The hero "CITY VIEW" title — this specific Elementor widget overrides the
// theme default with an explicit font-family:"Cinzel", font-weight:800.
export const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

// Hero kicker/tagline and the CTA band's "READY TO EXPERIENCE..." kicker —
// both explicitly set font-family:"Montserrat" in the live site's CSS.
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

// Hero description paragraph — explicit font-family:"Poppins" override.
export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
