import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "outline-gold" | "link";

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variantStyles: Record<Variant, string> = {
  primary:
    "rounded-sm bg-primary px-8 py-3.5 text-black hover:bg-primary-hover",
  outline:
    "rounded-sm border-2 border-white px-8 py-3.5 text-white hover:border-primary hover:text-primary",
  "outline-gold":
    "rounded-sm border-2 border-primary px-8 py-3.5 text-white hover:bg-primary hover:text-black",
  link: "text-primary hover:text-white",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

export function Button({
  href,
  variant = "primary",
  showArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const isHash = href.startsWith("#");
  const isHttp = href.startsWith("http");

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="size-4" aria-hidden="true" />}
    </>
  );

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (isHttp) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  if (isHash) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
