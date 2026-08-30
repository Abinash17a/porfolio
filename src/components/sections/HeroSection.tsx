import { motion } from "framer-motion";
import pixelCoder from "../../../public/images/pixel-coders.png";
import bgHero from "../../../public/images/japanbg.gif"; // or .jpg / .png
import { useEffect, useState } from "react";
import PixelLoader from "../widgets/PixelLoader";

const HeroSection = () => {
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <PixelLoader />;





  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative min-h-screen flex items-center bg-center bg-no-repeat px-4 md:px-10 pt-28 md:pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(7,11,23,0.72), rgba(7,11,23,0.8)), url(${bgHero})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,168,86,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.16),_transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-white py-6 md:py-0 rounded-3xl">
        <div className="max-w-2xl w-full text-center md:text-left">
          <motion.p
            className="inline-flex items-center rounded-full border border-[#d4a856]/30 bg-[#d4a856]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5c96a] shadow-lg shadow-black/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 mt-5 leading-[0.95] tracking-[-0.06em] text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            I build clean,
            <span className="block text-[#f5c96a]">fast, memorable</span>
            digital experiences.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            I’m Abinash, a developer focused on turning ideas into polished products using modern web technologies and thoughtful design.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#d4a856] px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_14px_30px_rgba(212,168,86,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5c96a]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white shadow-[0_14px_30px_rgba(15,23,42,0.18)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Let’s Talk
            </a>
          </motion.div>
        </div>

        <div className="w-full md:w-[32%] mt-8 md:mt-0 flex justify-center">
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-slate-900/50 p-4 shadow-[0_30px_80px_rgba(2,6,23,0.38)] backdrop-blur-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.img
              src={pixelCoder}
              alt="Pixel Coder"
              className="w-72 h-72 md:w-80 md:h-80 object-contain image-render-pixel"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
