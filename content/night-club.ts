export const hero = {
  title: "Night Club",
  description:
    "Step into the vibrant nightlife experience at Cityview Night Club, where energy, music, and unforgettable moments come alive. Our club is designed for guests who love premium entertainment, exciting atmospheres, and nights filled with fun. With quality sound, stylish lighting, talented DJs, and a lively crowd, every visit to Cityview promises an experience worth remembering. Whether you are celebrating a birthday, enjoying a weekend outing, or simply looking to unwind after a long week, our nightclub offers the perfect place to dance, connect, and enjoy the moment.",
  cta: { label: "Make a Reservation", href: "/get-fit", variant: "outline-gold" as const },
  // Live site currently reuses the Bar and Lodge hero photo for Night Club too — no
  // dedicated night club photography has been uploaded yet.
  image: "/images/bar-and-lodge/bar-1.jpg",
};

// TODO: live site reuses the Bar and Lodge gallery photos here as placeholders —
// swap in real Night Club photography once available.
export const gallery = [
  { src: "/images/bar-and-lodge/bar-1.jpg", alt: "Cityview Night Club" },
  { src: "/images/bar-and-lodge/bar-2.jpg", alt: "Cityview Night Club" },
  { src: "/images/bar-and-lodge/bar-3.jpg", alt: "Cityview Night Club" },
];
