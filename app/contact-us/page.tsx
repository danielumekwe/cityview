import type { Metadata } from "next";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} — ${siteConfig.address}.`,
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return <ContactDetails />;
}
