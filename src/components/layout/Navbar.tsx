import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const clickSound = new Audio("/sounds/click.wav");

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 640);
    updateSize(); // run once
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 20);
    updateScroll(); // run once in case page loads mid-scroll
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "px-3 sm:px-6 py-1.5 sm:py-2 bg-slate-950/80 shadow-lg shadow-black/30"
          : "px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-900/30"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1
          className={`font-pixel font-bold text-[#f5c96a] tracking-wider transition-all duration-300 ${
            scrolled
              ? "text-xs sm:text-base md:text-lg"
              : "text-sm sm:text-lg md:text-xl lg:text-2xl"
          }`}
          style={{
            textShadow: "2px 2px 0 rgba(15, 23, 42, 0.9)",
          }}
        >
          {"< Abinash />"}
        </h1>

        <ul className="hidden md:flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                className={`font-pixel text-slate-100/90 transition-all duration-200 hover:bg-[#d4a856]/10 hover:text-[#f5c96a] rounded-full border border-white/10 ${
                  scrolled ? "px-3 py-1.5 text-[10px]" : "px-4 py-2 text-xs"
                }`}
                onClick={() => {
                  clickSound.currentTime = 0;
                  clickSound.play();
                  scrollToSection(item.href);
                }}
              >
                {item.name.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            className="text-[#f5c96a] p-1.5 sm:p-2 rounded-full border border-[#d4a856]/30 bg-white/5"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              clickSound.currentTime = 0;
              clickSound.play();
            }}
          >
            {menuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 sm:mt-4 max-w-7xl mx-auto space-y-2 bg-slate-950/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-white/10"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                className="block w-full text-left font-pixel text-[#f5c96a] text-xs sm:text-sm px-4 py-2 rounded-xl border border-[#d4a856]/30 hover:bg-[#d4a856] hover:text-slate-950 transition-colors"
                onClick={() => {
                  clickSound.currentTime = 0;
                  clickSound.play();
                  scrollToSection(item.href);
                }}
              >
                {item.name.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;