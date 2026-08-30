import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const LOGO_NAME = "Abinash";
const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#01";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [displayName, setDisplayName] = useState(LOGO_NAME);
  const [logoHovered, setLogoHovered] = useState(false);
  const scrambleInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const clickSound = new Audio("/sounds/click.wav");

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 20);
    updateScroll(); // run once in case page loads mid-scroll
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Track which section is in view so the nav can highlight it
  // like a "currently selected" menu item.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navItems.find(
              (item) => item.href === `#${entry.target.id}`
            );
            if (match) setActive(match.name);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Cleanup any in-flight scramble interval on unmount.
  useEffect(() => {
    return () => {
      if (scrambleInterval.current) clearInterval(scrambleInterval.current);
    };
  }, []);

  const handleLogoHover = () => {
    setLogoHovered(true);
    if (scrambleInterval.current) clearInterval(scrambleInterval.current);

    let iteration = 0;
    scrambleInterval.current = setInterval(() => {
      setDisplayName(
        LOGO_NAME.split("")
          .map((letter, index) => {
            if (index < iteration) return letter;
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("")
      );

      if (iteration >= LOGO_NAME.length) {
        if (scrambleInterval.current) clearInterval(scrambleInterval.current);
        setDisplayName(LOGO_NAME);
      }
      iteration += 1 / 2;
    }, 35);
  };

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
      className={`fixed top-0 left-0 w-full z-50 border-b-2 border-[#f5c96a]/20 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "px-3 sm:px-6 py-1.5 sm:py-2 bg-slate-950/85 shadow-[0_4px_0_rgba(0,0,0,0.4)]"
          : "px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-900/30"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1
          onMouseEnter={handleLogoHover}
          onMouseLeave={() => setLogoHovered(false)}
          animate={{
            scale: logoHovered ? 1.06 : 1,
            textShadow: logoHovered
              ? "0 0 8px rgba(245,201,106,0.9), 0 0 18px rgba(245,201,106,0.5), 2px 2px 0 rgba(15,23,42,0.9)"
              : "2px 2px 0 rgba(15,23,42,0.9)",
          }}
          transition={{ duration: 0.2 }}
          className={`font-pixel font-bold text-[#f5c96a] tracking-wider flex items-center cursor-default select-none transition-[font-size] duration-300 ${
            scrolled
              ? "text-xs sm:text-base md:text-lg"
              : "text-sm sm:text-lg md:text-xl lg:text-2xl"
          }`}
        >
          <motion.span
            animate={{ x: logoHovered ? -3 : 0, rotate: logoHovered ? -8 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {"<"}
          </motion.span>
          <span className="mx-1">{displayName}</span>
          <motion.span
            animate={{ x: logoHovered ? 3 : 0, rotate: logoHovered ? 8 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {"/>"}
          </motion.span>
          <span className="w-[2px] h-[0.9em] bg-[#f5c96a] ml-1 animate-[blink_1s_steps(1)_infinite]" />
        </motion.h1>

        <ul className="hidden md:flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <li key={item.name}>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 2, scale: 0.96 }}
                  className={`font-pixel flex items-center gap-1.5 transition-colors duration-200 rounded-full border-2 ${
                    scrolled ? "px-3 py-1.5 text-[10px]" : "px-4 py-2 text-xs"
                  } ${
                    isActive
                      ? "text-[#f5c96a] border-[#f5c96a]/60 bg-[#f5c96a]/10 shadow-[0_3px_0_rgba(212,168,86,0.4)]"
                      : "text-slate-100/90 border-white/10 hover:text-[#f5c96a] hover:border-[#d4a856]/40 shadow-[0_3px_0_rgba(255,255,255,0.05)]"
                  }`}
                  onClick={() => {
                    clickSound.currentTime = 0;
                    clickSound.play();
                    scrollToSection(item.href);
                  }}
                >
                  {isActive && (
                    <span className="animate-pulse">{"▶"}</span>
                  )}
                  {item.name.toUpperCase()}
                </motion.button>
              </li>
            );
          })}
        </ul>

        <div className="md:hidden">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 2, scale: 0.9 }}
            className="text-[#f5c96a] p-1.5 sm:p-2 rounded-full border-2 border-[#d4a856]/30 bg-white/5 shadow-[0_3px_0_rgba(212,168,86,0.3)]"
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
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 sm:mt-4 max-w-7xl mx-auto space-y-2 bg-slate-950/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border-2 border-white/10"
          >
            {navItems.map((item) => {
              const isActive = active === item.name;
              return (
                <motion.button
                  key={item.name}
                  whileTap={{ scale: 0.96, x: 4 }}
                  className={`flex items-center gap-2 w-full text-left font-pixel text-xs sm:text-sm px-4 py-2 rounded-xl border-2 transition-colors ${
                    isActive
                      ? "border-[#f5c96a] text-[#f5c96a] bg-[#f5c96a]/10"
                      : "border-[#d4a856]/30 text-[#f5c96a]/80 hover:bg-[#d4a856] hover:text-slate-950"
                  }`}
                  onClick={() => {
                    clickSound.currentTime = 0;
                    clickSound.play();
                    scrollToSection(item.href);
                  }}
                >
                  {isActive && <span className="animate-pulse">{"▶"}</span>}
                  {item.name.toUpperCase()}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;