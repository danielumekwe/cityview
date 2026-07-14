import Image from "next/image";
import { Martini, Music, Dumbbell, CalendarDays, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services as defaultServices, ServiceCard } from "@/content/services";

const iconMap: Record<ServiceCard["icon"], LucideIcon> = {
  martini: Martini,
  music: Music,
  dumbbell: Dumbbell,
  calendar: CalendarDays,
};

type ServiceGridProps = {
  id?: string;
  kicker: string;
  title: string;
  services?: ServiceCard[];
};

export function ServiceGrid({ id, kicker, title, services = defaultServices }: ServiceGridProps) {
  return (
    <section id={id} className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading kicker={kicker} title={title} />

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.title} className="group border border-border">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="relative px-6 pt-9 pb-8 text-center">
                  <span className="absolute -top-6 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center bg-primary text-black">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-heading">{service.title}</h3>
                  <p className="mt-3 text-sm text-body">{service.description}</p>
                  <Button
                    href={service.href}
                    variant="link"
                    showArrow
                    className="mt-5 !text-white hover:!text-primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
