"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/lib/constants";

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.15 + navItems.length * 0.05, ease: [0.16, 1, 0.3, 1] },
  },
};

type MobileMenuProps = {
  onNavigate: () => void;
  reservationHref: string;
  reservationLabel: string;
};

export function MobileMenu({ onNavigate, reservationHref, reservationLabel }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <motion.nav
        variants={listVariants}
        initial="hidden"
        animate="visible"
        aria-label="Primary"
        className="flex w-full flex-col items-center gap-1"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <motion.div key={item.href} variants={itemVariants} className="w-full text-center">
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                className={`inline-block py-2.5 font-serif text-2xl font-semibold uppercase tracking-wide transition-colors duration-200 active:text-primary ${
                  isActive ? "text-primary" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      <motion.div variants={ctaVariants} initial="hidden" animate="visible" className="w-full max-w-xs px-6">
        <Button
          href={reservationHref}
          variant="primary"
          onClick={onNavigate}
          className="!w-full !py-4 !text-base"
        >
          {reservationLabel}
        </Button>
      </motion.div>
    </div>
  );
}
