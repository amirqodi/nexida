"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="h-[50vh] flex w-full items-center justify-center px-5">
      <div className="w-2/3 h-full flex flex-col justify-between pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-y-2 mt-[100px]"
        >
          <h1 className="bg-custom-gradient rounded-3xl mr-auto p-1 flex items-center">
            <Image
              src={"/icons/Ellipse.svg"}
              alt="icon"
              width={40}
              height={40}
            />
            NEXIDA PROJECT PREMIUM CHEATS
          </h1>
          <h2 className="text-4xl font-bold">
            <div className="flex items-center gap-2">
              Fastest
              <Image
                src={"/icons/RocketAndRibbon.svg"}
                alt="icon"
                width={60}
                height={60}
              />
              Safest
            </div>
            Cheats Marketplace
          </h2>
          <p className="text-gray-300 leading-snug max-w-md pb-5">
            <span className="font-bold text-white">Nexida</span> is a
            cutting-edge project focused on providing advanced and undetectable
            cheating solutions for{" "}
            <span className="font-bold text-white">
              Multi Theft Auto: San Andreas (MTA SA)
            </span>
            . Our team is dedicated to delivering the most powerful and
            customizable cheats, aimed at enhancing the gameplay experience for
            those who want to take their gaming to the next level.
          </p>
        </motion.div>
      </div>
      <motion.picture
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={"/UI/Claude.png"}
          alt="character image"
          width={250}
          height={300}
          className="mt-28"
        />
      </motion.picture>
    </section>
  );
};

export default Header;
