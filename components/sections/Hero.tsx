import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/home";

const youtubeEmbedSrc = `https://www.youtube.com/embed/${hero.videoId}?autoplay=1&mute=1&loop=1&playlist=${hero.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`;

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden text-white sm:min-h-screen">
      {/* Live site's hero background is an autoplaying muted YouTube loop.
          Hidden (in favor of the static image below) when the visitor has
          requested reduced motion — the WP original ignores that preference. */}
      <div className="absolute inset-0 overflow-hidden motion-reduce:hidden">
        <iframe
          src={youtubeEmbedSrc}
          title="Cityview Bar & Lodge showreel"
          allow="autoplay; encrypted-media"
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute top-1/2 left-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="absolute inset-0 hidden motion-reduce:block">
        <Image
          src={hero.image}
          alt="Cityview Bar & Lodge — luxury venue interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <Container className="relative z-10 py-24 text-center">
        {/* Font specs below are pulled verbatim from the live Elementor CSS for
            this hero block, which overrides the theme's default typography. */}
        <p className="mb-3 font-kicker text-lg font-semibold tracking-[10px] text-white uppercase sm:text-xl lg:text-[24px]">
          {hero.kicker}
        </p>
        <h1 className="font-display text-[56px] leading-[0.95] font-extrabold tracking-[3px] uppercase sm:text-[90px] lg:text-[111px] xl:text-[155px]">
          <span className="text-white">{hero.titleWhite} </span>
          <span className="text-primary">{hero.titleGold}</span>
        </h1>
        <p className="mt-4 font-kicker text-base font-medium tracking-[6px] text-white uppercase sm:text-xl lg:text-[27px]">
          {hero.tagline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl font-hero-body text-base tracking-[0.3px] text-white sm:text-lg">
          {hero.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={hero.primaryCta.href} variant="primary">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="outline">
            <Play className="size-4" aria-hidden="true" />
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
