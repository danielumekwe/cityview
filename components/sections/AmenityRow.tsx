import { BedDouble, ShieldCheck, ParkingCircle, Wifi, UtensilsCrossed, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { amenities, AmenityItem } from "@/content/home";

const iconMap: Record<AmenityItem["icon"], LucideIcon> = {
  bed: BedDouble,
  shield: ShieldCheck,
  parking: ParkingCircle,
  wifi: Wifi,
  utensils: UtensilsCrossed,
};

export function AmenityRow() {
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20">
      <Container className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {amenities.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={item.title} className="flex flex-col items-center text-center">
              <span className="mb-4 flex size-12 items-center justify-center bg-primary text-black">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-sans text-sm font-bold tracking-wide text-heading uppercase">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-body">{item.description}</p>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
