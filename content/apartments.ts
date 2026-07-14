export const hero = {
  title: "Cityview Apartments",
  description:
    "Experience comfort, privacy, and relaxation at Cityview Lodge, where every stay is designed to give you peace of mind and a memorable hospitality experience. Our lodge features clean, stylish, and well-furnished rooms created for travelers, business guests, couples, and anyone seeking a comfortable place to rest. Whether you are staying for one night, a weekend getaway, or an extended visit, Cityview Lodge offers a calm and welcoming environment that feels like home.",
  cta: { label: "Make a Reservation", href: "/get-fit", variant: "outline-gold" as const },
  // The live site has no hero photo configured for this page — using the first
  // real apartment photo from the gallery below instead of leaving it blank.
  image: "/images/apartments/apt-1.jpg",
};

export const gallery = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/apartments/apt-${i + 1}.jpg`,
  alt: `Cityview Apartments interior ${i + 1}`,
}));
