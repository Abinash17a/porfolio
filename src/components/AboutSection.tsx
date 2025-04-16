import { motion, useScroll } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const AboutSection = () => {
  const { scrollYProgress } = useScroll();

  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Databases", icon: FaDatabase, color: "#4479A1" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white text-gray-800 px-4 sm:px-6 lg:px-12 py-12"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text Content */}
        <motion.div
          className="w-full md:w-2/3 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary">
            About Me
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
            I'm a passionate web developer, creating{" "}
            <strong className="text-accent">beautiful</strong> and{" "}
            <strong className="text-accent">functional</strong> experiences. I
            love working with modern technologies and I'm always exploring new
            ways to push the limits of UI/UX design.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                My Approach
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I believe in clean, efficient code and user-centric design.
                Every project is an opportunity to create something
                extraordinary.
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                My Goal
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To craft digital solutions that not only meet but exceed
                expectations, leaving a lasting impact on users and businesses
                alike.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Skills */}
        <motion.div
          className="w-full md:w-1/3 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <skill.icon size={40} className="sm:size-50" color={skill.color} />
              <span className="mt-2 text-base sm:text-lg font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
