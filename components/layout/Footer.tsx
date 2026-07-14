import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig, googleMapsUrl } from "@/lib/constants";

const socialLinks = [
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt="Cityview Bar & Lodge"
            width={154}
            height={74}
            className="mb-4 h-12 w-auto object-contain"
          />
          <p className="text-sm text-white/70">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="mb-4 font-serif text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-serif text-lg font-semibold">Contact</h2>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="hover:text-primary">
                {siteConfig.address}
              </a>
            </li>
            {siteConfig.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${phone}`} className="hover:text-primary">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-serif text-lg font-semibold">Follow Us</h2>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/60 sm:flex-row">
          <p>
            Copyright &copy; {year} <span className="text-white/80">Cityview Bar & Lodge</span>
          </p>
          <p>Powered By Cityview Bar & Lodge</p>
        </Container>
      </div>
    </footer>
  );
}
