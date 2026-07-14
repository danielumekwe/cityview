import type { Metadata } from "next";
import { roboto, playfair, allerta, cinzel, montserrat, poppins } from "@/lib/fonts";
import { siteConfig } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – Hotel, Night Club, Gym & Event Centre in Ejigbo Lagos`,
    template: `%s – ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: ["/images/home/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/home/hero.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NightClub",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phones[0],
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "106-108, Isolo Egbe Rd",
      addressLocality: "Ejigbo, Lagos",
      postalCode: "100264",
      addressCountry: "NG",
    },
  };

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${playfair.variable} ${allerta.variable} ${cinzel.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
