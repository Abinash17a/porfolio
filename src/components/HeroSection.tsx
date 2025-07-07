import { motion } from "framer-motion";
import pixelCoder from "../../public/images/pixel-coders.png";
import bgHero from "../../public/images/japanbg.gif"; // or .jpg / .png

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex items-center bg-center bg-no-repeat px-4 md:px-10"
      style={{
        backgroundImage: `url(${bgHero})`, // ✅ Corrected
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-black py-6 md:py-0  rounded-xl">
        {/* Left Side - Text Content */}
        <div className="max-w-2xl w-full text-center md:text-left">
          <motion.h1
            className="font-poppins text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Crafting Digital Experiences
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl  text-black leading-relaxed"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            I’m a passionate developer building innovative and functional web solutions with cutting-edge technologies.
          </motion.p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center">
          <motion.img
            src={pixelCoder} // ✅ add .src just to be safe
            alt="Pixel Coder"
            className="w-80 h-80 object-contain image-render-pixel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
