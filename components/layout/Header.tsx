"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Hamburger } from "@/components/ui/Hamburger";
import { DesktopMenu } from "@/components/layout/DesktopMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";

const RESERVATION_HREF = "/get-fit";
const RESERVATION_LABEL = "Make a Reservation";
const OVERLAY_ID = "site-nav-overlay";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const headerRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll and trap focus while the overlay is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () => {
      const scopes = [headerRef.current, overlayRef.current].filter(
        (el): el is HTMLElement => el !== null
      );
      // DesktopMenu and MobileMenu are both always mounted (one hidden via a
      // `hidden lg:*` class per breakpoint), so filter out the CSS-hidden
      // variant — display:none elements can't actually receive focus and
      // would make the trap's "last" element unreachable, letting Tab escape.
      return scopes.flatMap((scope) =>
        Array.from(scope.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
          (el) => el.offsetParent !== null
        )
      );
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setIsOpen(false);
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);

    // Move focus to the first visible link inside the overlay (the visible
    // menu variant only — see getFocusable's note on the hidden breakpoint).
    const overlayLinks = overlayRef.current
      ? Array.from(overlayRef.current.querySelectorAll<HTMLElement>("a[href]")).filter(
          (el) => el.offsetParent !== null
        )
      : [];
    overlayLinks[0]?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, [isOpen]);

  // Return focus to the trigger once the overlay closes.
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (!isOpen && wasOpenRef.current) {
      toggleRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-[70] w-full transition-[background-color,box-shadow,border-color] duration-300 ${
          isScrolled
            ? "border-b border-border bg-surface/95 shadow-lg shadow-black/40 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between lg:h-24">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Cityview Bar & Lodge home"
          >
            <Image
              src="/images/logo.png"
              alt="Cityview Bar & Lodge"
              width={154}
              height={74}
              className="h-12 w-auto object-contain lg:h-14"
              priority
            />
          </Link>

          <div className="flex items-center gap-4 lg:gap-6">
            <div
              className={`hidden transition-opacity duration-200 lg:block ${
                isOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <Button href={RESERVATION_HREF} variant="primary">
                {RESERVATION_LABEL}
              </Button>
            </div>
            <Hamburger
              ref={toggleRef}
              isOpen={isOpen}
              controls={OVERLAY_ID}
              onClick={() => setIsOpen((v) => !v)}
            />
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={overlayRef}
            id={OVERLAY_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-y-auto bg-black/70 px-6 py-28 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hidden lg:block">
                <DesktopMenu
                  onNavigate={close}
                  reservationHref={RESERVATION_HREF}
                  reservationLabel={RESERVATION_LABEL}
                />
              </div>
              <div className="lg:hidden">
                <MobileMenu
                  onNavigate={close}
                  reservationHref={RESERVATION_HREF}
                  reservationLabel={RESERVATION_LABEL}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
