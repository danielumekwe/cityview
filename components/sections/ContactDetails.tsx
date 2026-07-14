import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, googleMapsUrl } from "@/lib/constants";

export function ContactDetails() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image src="/images/contact/hero.png" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
      </div>

      <Container className="relative z-10 grid grid-cols-1 gap-12 py-24 lg:grid-cols-2 lg:items-center">
        <div className="text-white">
          <h1 className="font-serif text-3xl font-bold tracking-wide uppercase sm:text-4xl">Contact Us</h1>
          <h2 className="mt-4 font-serif text-xl font-semibold text-primary sm:text-2xl">{siteConfig.address}</h2>

          <ul className="mt-8 space-y-5">
            {siteConfig.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-4">
                <Phone className="size-6 shrink-0 text-white" aria-hidden="true" />
                <a href={`tel:${phone}`} className="text-lg text-white transition-colors hover:text-primary">
                  {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <Mail className="size-6 shrink-0 text-white" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg text-white transition-colors hover:text-primary"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>

          <Button href={googleMapsUrl} variant="primary" className="mt-10">
            Get Direction
          </Button>
        </div>

        <div className="h-[400px] w-full overflow-hidden rounded-sm lg:h-[500px]">
          <iframe
            title="Cityview Bar & Lodge location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
            className="size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
