import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  /** A single line, or multiple lines rendered inside one semantic h1. */
  title: string | string[];
  description?: string;
  cta?: { label: string; href: string; variant?: "primary" | "outline-gold" };
  minHeight?: string;
};

export function PageHero({
  image,
  imageAlt,
  title,
  description,
  cta,
  minHeight = "min-h-[60vh]",
}: PageHeroProps) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <section className={`relative flex ${minHeight} items-center overflow-hidden text-white`}>
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <Container className="relative z-10 py-24 text-center">
        <h1 className="font-serif text-4xl font-semibold tracking-wide sm:text-5xl lg:text-6xl">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg">{description}</p>
        )}

        {cta && (
          <div className="mt-10">
            <Button href={cta.href} variant={cta.variant ?? "primary"}>
              {cta.label}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
