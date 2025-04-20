"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence for animations
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className={cn("font-poppins text-xl sm:text-2xl md:text-3xl font-bold", scrolled ? "text-black" : "text-white")}>
          Abinash Chhetri
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Button
                variant="ghost"
                className={cn(
                  "font-poppins text-base sm:text-lg transition-colors hover:bg-gray-200/50 rounded-md",
                  scrolled ? "text-black hover:text-gray-900" : "text-white hover:text-gray-300"
                )}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn("p-2", scrolled ? "text-black" : "text-white")}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown with animation and backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-white z-40"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              className="fixed top-16 left-0 w-full z-50 bg-black rounded-lg shadow-xl p-6"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-end mb-4">
                <Button
                  variant="ghost"
                  onClick={() => setMenuOpen(false)}
                  className="text-black hover:text-gray-700 p-2"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Button
                      variant="ghost"
                      className="w-full text-left font-poppins text-lg text-white hover:bg-gray-100 rounded-md px-4 py-2 transition-colors"
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;