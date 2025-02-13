"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="h-auto mt-10 sm:mt-0 sm:h-[540px] flex flex-col md:flex-row w-full items-center justify-center px-5 py-10 md:py-0">
      <div className="w-full md:w-2/3 h-full flex flex-col justify-between text-center md:text-left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-y-5 mt-10 md:mt-[100px]"
        >
          <h1 className="bg-custom-gradient mx-auto lg:mr-auto lg:ml-0 rounded-3xl p-1 flex items-center text-sm sm:text-base md:text-lg lg:text-xl text-white">
            <Image
              src={"/icons/Ellipse.svg"}
              alt="icon"
              width={30}
              height={30}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            NEXIDA PROJECT PREMIUM CHEATS
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            <div className="flex items-center justify-center md:justify-start gap-2">
              Fastest
              <Image
                src={"/icons/RocketAndRibbon.svg"}
                alt="icon"
                width={40}
                height={40}
                className="w-10 sm:w-14"
              />
              Safest
            </div>
            Cheats Marketplace
          </h2>
          <p className="text-gray-300 leading-snug max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg pb-5">
            <span className="font-bold text-white">Nexida</span> is a
            cutting-edge project focused on providing advanced and undetectable
            cheating solutions for <span> </span>
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
        className="hidden md:block"
      >
        <Image
          src={"/UI/Claude.png"}
          alt="character image"
          width={250}
          height={300}
          className="w-40 sm:w-52 md:w-64 lg:w-72 mt-28"
        />
      </motion.picture>
    </section>
  );
};

export default Header;
