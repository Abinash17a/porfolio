import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MINECRAFT_ICON =
  "https://img.icons8.com/?size=100&id=16456&format=png&color=000000";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [swinging, setSwinging] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, {
    damping: 22,
    stiffness: 400,
    mass: 0.4,
  });

  const springY = useSpring(cursorY, {
    damping: 22,
    stiffness: 400,
    mass: 0.4,
  });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    setEnabled(hasFinePointer);

    if (!hasFinePointer) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;

      setIsPointer(
        !!target.closest(
          "button, a, [role='button'], input, select, textarea"
        )
      );
    };

    const handleDown = () => {
      setSwinging(true);

      window.setTimeout(() => {
        setSwinging(false);
      }, 180);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: springX,
        y: springY,
        translateX: "-15%",
        translateY: "-80%",
      }}
    >
      <motion.div
        animate={{
          rotate: swinging ? [-45, 25, -45] : -45,
          scale: isPointer ? 1.25 : 1,
        }}
        transition={{
          duration: swinging ? 0.18 : 0.15,
        }}
      >
        <img
          src={MINECRAFT_ICON}
          alt="Minecraft"
          className="w-8 h-8 image-rendering-pixelated"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;