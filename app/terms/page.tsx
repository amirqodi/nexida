"use client";

import termsData from "@/data/termsData";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <>
      <div className="text-white min-h-screen">
        <div className="max-w-4xl mx-auto p-6 mt-32">
          <div className="space-y-8">
            {termsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                {Array.isArray(item.text) ? (
                  <ol className="list-decimal pl-6 text-gray-400">
                    {item.text.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-400">{item.text}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-center p-10 border-t border-[#ffffff1a] w-full">
        <p>Copyright 2025 © Nexida Project</p>
      </footer>
    </>
  );
};

export default Terms;
