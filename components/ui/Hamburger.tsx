"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

type HamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
  controls: string;
  className?: string;
};

const lineTransition = { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const };

export const Hamburger = forwardRef<HTMLButtonElement, HamburgerProps>(function Hamburger(
  { isOpen, onClick, controls, className = "" },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls={controls}
      className={`relative z-[70] flex size-11 shrink-0 items-center justify-center text-white transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
    >
      <span className="relative flex h-4 w-6 flex-col justify-between" aria-hidden="true">
        <motion.span
          className="block h-0.5 w-full origin-center rounded-full bg-current"
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={lineTransition}
        />
        <motion.span
          className="block h-0.5 w-full rounded-full bg-current"
          animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block h-0.5 w-full origin-center rounded-full bg-current"
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={lineTransition}
        />
      </span>
    </button>
  );
});
