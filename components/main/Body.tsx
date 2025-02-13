"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Article from "../Article";
import Image from "next/image";

const Body = () => {
  return (
    <main className="w-full text-white">
      {/* Hero Section */}
      <motion.div
        className="bg-custom-gradient2 shadow-custom-shadow w-full p-8 text-center flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
          Choose A Reliable Cheat, For <br />
          Your Favorite Game!
        </h3>
      </motion.div>

      {/* Features Section */}
      <section className="flex flex-col items-center w-full py-12">
        <h2 className="text-2xl font-bold text-center mb-4">
          Why you should choose Nexida?
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mb-8">
          We want to provide you with a high-quality product that gives you the
          best possible assistant experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl sm:w-auto w-[300px]">
          {features.map((feature, index) => (
            <FeatureCard index={index} feature={feature} key={index} />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="flex flex-col items-center w-full py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-32 max-w-8xl">
          {products.map((product, index) => (
            <Article
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col items-center text-center py-12">
        <h3 className="text-xl font-bold mb-2">Have any questions?</h3>
        <p className="text-gray-400 mb-4">
          We&apos;re here and happy to help you with anything you need.
        </p>
        <motion.button
          className="bg-red-600 px-6 py-2 rounded hover:bg-red-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.button>
      </section>
    </main>
  );
};

type Feature = {
  title: string;
  description: string;
  icon: string;
  border?: boolean;
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center text-center px-6 py-6 
        border-gray-500 border-opacity-50 
        ${index !== features.length - 1 && index !== 2 ? "md:border-r" : ""} 
        md:border-b-0 border-b md:last:border-r-0 last:border-b-0`}
    >
      <div className="text-4xl mb-2">
        <Image src={feature.icon} alt={feature.title} width={50} height={50} />
      </div>
      <h3 className="font-bold text-lg sm:text-xl">{feature.title}</h3>
      <p className="text-gray-400 text-sm sm:text-base">
        {feature.description}
      </p>
    </motion.div>
  );
};

// Features Data
const features = [
  {
    title: "Security First",
    description:
      "Our first priority is the safety of our users accounts. We do everything we can to keep your accounts.",
    icon: "/icons/Security.svg",
  },
  {
    title: "Fast Support",
    description:
      "We pay special attention to communication with clients and provide prompt support on our website. Get the necessary assistance and answers to your questions by reaching out to our team of experts.",
    icon: "/icons/Security.svg",
    border: true,
  },
  {
    title: "Instant Access",
    description:
      "Don't waste your time on registration forms. We have made the purchase form as simple as possible and also we cover a lot of payment methods. You definitely need to check it out!",
    icon: "/icons/Security.svg",
  },
  {
    title: "Easy To Use",
    description:
      "The software installation process takes less than a minute and it doesn't require any actions from the user. The entire process is fully automated.",
    icon: "/icons/Security.svg",
  },
  {
    title: "Instant Updates",
    description:
      "All our assistant are updated after every game update. We work daily to improve the quality of our products and provide quick updates.",
    icon: "/icons/Security.svg",
    border: true,
  },
  {
    title: "Affordable Prices",
    description:
      "We regularly provide special prices / discounts for our regular customers. We also cover a large number of payment methods from credit card to crypto.",
    icon: "/icons/Security.svg",
  },
];

// Products Data
const products = [
  {
    title: "Lua Engine",
    description:
      "Take your Lua development to new heights with our cutting-edge Lua Software Development Kit (SDK). Designed specifically for Lua developers, our SDK offers a comprehensive set of tools and features to streamline your debugging process and enhance your coding experience.",
    price: "3.50$/wk",
    image: "/products/nexidaFull01.png",
  },
  {
    title: "Nexida Full",
    description:
      "Nexida Full is the ultimate cheat solution for Multi Theft Auto (MTA SA), packed with powerful features to enhance your gaming experience. Whether you're looking to dominate the game with precision or just want to troll other players, Nexida Full has got you covered.",
    price: "5.99$/wk",
    image: "/products/nexidaFull01.png",
  },
];

export default Body;
