"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Luckiest_Guy } from "next/font/google";

const LuckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"], // Optimize for Latin characters
  display: "swap",
});

const SharinganLoader = () => {
  const [tomoeCount, setTomoeCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTomoeCount((prev) => (prev < 3 ? prev + 1 : 3));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="relative w-40 h-40 border-[2px] border-red-950 rounded-full flex items-center justify-center"
      >
        <div className="absolute w-32 h-32 bg-red-600 rounded-full blur-md"></div>
        <div className="absolute w-8 h-8 bg-black rounded-full"></div>
        <div className="absolute w-[105px] h-[105px] border-[1px] border-black rounded-full"></div>

        {[...Array(tomoeCount)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute"
            style={{
              transform: `rotate(${index * 120}deg) translate(65px)`,
            }}
          >
            <div
              className={`transform rotate-45 text-[90px] text-black ${LuckiestGuy.className}`}
            >
              ,
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SharinganLoader;
