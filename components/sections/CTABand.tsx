import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ctaBand } from "@/content/home";

export function CTABand() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <Image src={ctaBand.image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

      <Container className="relative z-10 text-center">
        <p className="font-kicker text-lg font-semibold tracking-[10px] text-white uppercase lg:text-[24px]">
          {ctaBand.title}
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-[42px]">
          {ctaBand.subtitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">{ctaBand.description}</p>
        <Button href={ctaBand.cta.href} variant="primary" className="mt-8">
          {ctaBand.cta.label}
        </Button>
      </Container>
    </section>
  );
}
