import { z } from "zod";

export const reservationSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .regex(/^[\d+()\s-]+$/, "Enter a valid phone number"),
  service: z.enum(["bar-and-lodge", "night-club", "gym-and-fitness", "event-and-parties", "apartments"], {
    message: "Select what you'd like to reserve",
  }),
  date: z.string().min(1, "Select a preferred date"),
  guests: z.coerce.number({ message: "Enter number of guests" }).int().min(1, "At least 1 guest").max(500),
  message: z.string().trim().max(1000).optional(),
});

export type ReservationValues = z.infer<typeof reservationSchema>;

export const serviceOptions: { value: ReservationValues["service"]; label: string }[] = [
  { value: "bar-and-lodge", label: "Bar and Lodge" },
  { value: "night-club", label: "Night Club" },
  { value: "gym-and-fitness", label: "Gym and Fitness" },
  { value: "event-and-parties", label: "Events and Parties" },
  { value: "apartments", label: "Cityview Apartments" },
];
