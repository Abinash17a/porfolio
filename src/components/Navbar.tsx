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
  const [scrolled] = useState(false);
  const [mobScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const clickSound = new Audio("/sounds/click.wav");

useEffect(() => {
  const updateSize = () => setIsMobile(window.innerWidth < 640);
  updateSize(); // run once
  window.addEventListener("resize", updateSize);
  return () => window.removeEventListener("resize", updateSize);
}, []);;

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
className={`fixed top-0 w-full z-50 px-4 py-4 border-b-4 border-black backdrop-blur-md transition-all duration-300 ${
  isMobile
    ? mobScrolled
      ? "bg-black/60 shadow-md"
      : "bg-transparent"
    : scrolled
    ? "bg-black/60 shadow-md"
    : "bg-transparent"
}`}
>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="font-pixel text-base md:text-lg text-green-300 tracking-wider">
          {"< Abinash />"}
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                className="font-pixel px-4 py-2 bg-black text-green-300 border-2 border-green-800 hover:bg-green-1000 hover:text-black"
                onClick={() => {
                  clickSound.currentTime = 0; // rewind to start
                  clickSound.play();
                  scrollToSection(item.href)
                }}
              >
                {item.name.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-green-300"
            onClick={() => {
              setMenuOpen((prev) => !prev)
              clickSound.currentTime = 0; // rewind to start
              clickSound.play();
            }}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 space-y-2 bg-black p-4 border-t-4 border-green-400"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                className="block w-full text-left font-pixel text-green-300 px-4 py-2 border border-green-300 hover:bg-green-300 hover:text-black"
                onClick={() => {
                   clickSound.currentTime = 0; // rewind to start
                    clickSound.play();
                  scrollToSection(item.href)}
                }
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
