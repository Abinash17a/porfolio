import { motion } from "framer-motion";
import dev from "../assets/dev.png"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex items-center bg-black px-4 md:px-10" // Responsive padding
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-white py-6 md:py-0">
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
            className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            I’m a passionate developer building innovative and functional web solutions with cutting-edge technologies.
          </motion.p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <motion.img
            src={dev}
            alt="Developer at work"
            className="w-full h-auto object-contain max-h-96 md:max-h-full"
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