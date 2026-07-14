import { Container } from "@/components/ui/Container";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

type StorySectionProps = {
  id?: string;
  kicker: string;
  title: string;
  paragraph: string;
  videoId: string;
};

export function StorySection({ id, kicker, title, paragraph, videoId }: StorySectionProps) {
  return (
    <section id={id} className="bg-surface py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-2 font-sans text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            {kicker}
          </p>
          <h2 className="font-serif text-3xl font-semibold text-heading sm:text-4xl">{title}</h2>
          <p className="mt-6 text-base leading-relaxed text-body">{paragraph}</p>
        </div>

        <YouTubeEmbed videoId={videoId} title="Cityview Bar & Lodge showreel" className="shadow-lg" />
      </Container>
    </section>
  );
}
