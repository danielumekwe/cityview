"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { reservationSchema, serviceOptions, type ReservationValues } from "@/lib/schemas/reservation";
import { siteConfig } from "@/lib/constants";

const fieldClasses =
  "w-full rounded-sm border border-border bg-surface-elevated px-4 py-3 text-white placeholder:text-body focus:border-primary focus:outline-none";
const labelClasses = "mb-2 block text-sm font-semibold tracking-wide text-white uppercase";
const errorClasses = "mt-1.5 text-sm text-red-400";

function buildMailtoHref(values: ReservationValues) {
  const serviceLabel = serviceOptions.find((s) => s.value === values.service)?.label ?? values.service;
  const subject = `Reservation Request — ${serviceLabel}`;
  const bodyLines = [
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Service: ${serviceLabel}`,
    `Preferred date: ${values.date}`,
    `Number of guests: ${values.guests}`,
    "",
    values.message ? `Additional details:\n${values.message}` : "",
  ];
  const body = bodyLines.join("\n");
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = (values: ReservationValues) => {
    window.location.href = buildMailtoHref(values);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-sm border border-border bg-surface-elevated px-8 py-16 text-center">
        <CheckCircle2 className="size-14 text-primary" aria-hidden="true" />
        <h2 className="mt-6 font-serif text-2xl font-semibold text-heading">Your email app should now be open</h2>
        <p className="mt-3 max-w-md text-body">
          We&rsquo;ve pre-filled a reservation email with your details — just hit send from your mail app. If it
          didn&rsquo;t open, email us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-primary hover:text-white">
            {siteConfig.email}
          </a>{" "}
          or call {siteConfig.phones[0]}.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-semibold tracking-wide text-primary uppercase hover:text-white"
        >
          Fill out another reservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={fieldClasses}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className={errorClasses} role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClasses}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className={errorClasses} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClasses}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClasses} role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            What would you like to reserve?
          </label>
          <select
            id="service"
            defaultValue=""
            className={fieldClasses}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            {...register("service")}
          >
            <option value="" disabled>
              Select an option
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className={errorClasses} role="alert">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClasses}>
            Preferred Date
          </label>
          <input
            id="date"
            type="date"
            className={fieldClasses}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "date-error" : undefined}
            {...register("date")}
          />
          {errors.date && (
            <p id="date-error" className={errorClasses} role="alert">
              {errors.date.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="guests" className={labelClasses}>
            Number of Guests
          </label>
          <input
            id="guests"
            type="number"
            min={1}
            max={500}
            className={fieldClasses}
            aria-invalid={!!errors.guests}
            aria-describedby={errors.guests ? "guests-error" : undefined}
            {...register("guests")}
          />
          {errors.guests && (
            <p id="guests-error" className={errorClasses} role="alert">
              {errors.guests.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Additional Details <span className="text-body normal-case">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className={fieldClasses}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className={errorClasses} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold tracking-wide text-black uppercase transition-colors duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        Send Reservation Request
      </button>
    </form>
  );
}
