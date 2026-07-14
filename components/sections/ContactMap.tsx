import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, googleMapsUrl } from "@/lib/constants";

export function ContactMap() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="aspect-square w-full lg:aspect-auto lg:h-full lg:min-h-[420px]">
        <iframe
          title="Cityview Bar & Lodge location map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
          className="size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden py-16 text-center text-white lg:min-h-full">
        <Image
          src="/images/home/contact-bg.jpg"
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

        <Container className="relative z-10">
          <h2 className="font-serif text-2xl font-semibold tracking-wide text-white uppercase sm:text-3xl">
            {siteConfig.address}
          </h2>
          <Button href={googleMapsUrl} variant="primary" className="mt-6">
            Get Direction
          </Button>
        </Container>
      </div>
    </section>
  );
}
