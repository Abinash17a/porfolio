// components/PixelLoader.tsx
import { useEffect, useState } from "react";

const PixelLoader = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-green-400 text-center">
      <div className="pixel-font text-xs sm:text-base md:text-xl animate-pulse">
        Loading{dots}
      </div>
    </div>
  );
};

export default PixelLoader;
