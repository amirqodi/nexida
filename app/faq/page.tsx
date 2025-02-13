"use client";

import faqData from "@/data/faqData";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <>
      <div className="text-white min-h-screen">
        <div className="max-w-4xl mx-auto p-6 mt-32">
          <div className="space-y-8">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <h2 className="text-xl font-semibold">{item.question}</h2>
                {Array.isArray(item.answer) ? (
                  <ol className="list-decimal pl-6 text-gray-400">
                    {item.answer.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-400">{item.answer}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-center p-10 border-t border-[#ffffff1a] w-full">
        <p className="text-[10px] md:text-lg">
          Copyright 2025 © Nexida Project
        </p>
      </footer>
    </>
  );
};

export default FAQ;
