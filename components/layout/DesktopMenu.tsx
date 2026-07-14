"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/lib/constants";

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 + navItems.length * 0.06, ease: [0.16, 1, 0.3, 1] },
  },
};

type DesktopMenuProps = {
  onNavigate: () => void;
  reservationHref: string;
  reservationLabel: string;
};

export function DesktopMenu({ onNavigate, reservationHref, reservationLabel }: DesktopMenuProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-16">
      <motion.nav
        variants={listVariants}
        initial="hidden"
        animate="visible"
        aria-label="Primary"
        className="flex flex-col items-center gap-3"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <motion.div key={item.href} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                className={`group relative inline-block font-serif text-4xl font-semibold uppercase tracking-wide transition-all duration-300 hover:translate-x-2 hover:text-primary xl:text-5xl ${
                  isActive ? "text-primary" : "text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive ? "w-full" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      <motion.div variants={ctaVariants} initial="hidden" animate="visible">
        <Button
          href={reservationHref}
          variant="primary"
          onClick={onNavigate}
          className="!px-12 !py-4 !text-base"
        >
          {reservationLabel}
        </Button>
      </motion.div>
    </div>
  );
}
