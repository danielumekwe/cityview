type SectionHeadingProps = {
  kicker?: string;
  title: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  align = "center",
  as: Heading = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {kicker && (
        <p className="mb-2 font-sans text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          {kicker}
        </p>
      )}
      <Heading className="font-serif text-3xl font-semibold tracking-wide text-heading sm:text-4xl lg:text-5xl">
        {title}
      </Heading>
    </div>
  );
}
