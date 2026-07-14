import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { hero } from "@/content/reservation";

export const metadata: Metadata = {
  title: "Make a Reservation",
  description: hero.description,
  alternates: { canonical: "/get-fit" },
};

export default function ReservationPage() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container className="max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-3xl font-bold text-heading sm:text-4xl">{hero.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-body">{hero.description}</p>
        </div>

        <ReservationForm />
      </Container>
    </section>
  );
}
