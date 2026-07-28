import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/utils/cn";
import type { NavLink } from "@/types";

const links: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Players", path: "/players" },
  { label: "Services", path: "/services" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-ink/95 backdrop-blur-md border-b border-parchment/10 py-4"
          : "bg-transparent py-5 sm:py-7"
      )}
    >
      <div className="container-px flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center z-50 group">
          <img
            src="/assets/logo-horizontal.png"
            alt="GALZVIRT Sports"
            className="h-8 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                cn(
                  "relative font-heading text-xs xl:text-sm uppercase tracking-widest text-parchment/80 hover:text-gold-400 transition-colors py-1",
                  "after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-gold-400 after:transition-all after:duration-300",
                  isActive
                    ? "text-gold-400 after:w-full"
                    : "after:w-0 hover:after:w-full"
                )
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-xs">
            Work With Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden z-50 relative p-2 -mr-2 flex flex-col items-center justify-center gap-[5px] focus:outline-none"
        >
          <span
            className={cn(
              "block h-[2px] w-6 bg-parchment transition-transform duration-300 origin-center",
              open && "translate-y-[7px] rotate-45 bg-gold-400"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-6 bg-parchment transition-opacity duration-300",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-6 bg-parchment transition-transform duration-300 origin-center",
              open && "-translate-y-[7px] -rotate-45 bg-gold-400"
            )}
          />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink lg:hidden flex flex-col justify-between overflow-y-auto px-6 sm:px-10 pt-28 pb-12 min-h-screen"
          >
            <nav className="flex flex-col gap-1 sm:gap-2 my-auto">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.04,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
                  <RouterNavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block py-2.5 font-heading uppercase text-2xl sm:text-3xl tracking-wider transition-colors",
                        isActive ? "text-gold-400" : "text-parchment/90 hover:text-gold-400"
                      )
                    }
                  >
                    {link.label}
                  </RouterNavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
              className="pt-6 border-t border-parchment/10 mt-6"
            >
              <Link to="/contact" className="btn-primary w-full text-center block py-3">
                Work With Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}