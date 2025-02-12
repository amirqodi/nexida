"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Article from "@/components/Article";
import porductsData from "@/data/productsData";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search input
  const filteredProducts = porductsData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col w-full items-center mt-20"
    >
      <div className="mt-10 w-full max-w-6xl px-4 mb-10">
        <div className="flex w-full justify-between items-center">
          <p className="text-3xl font-semibold text-center sm:text-left">
            Explore Products
          </p>

          {/* Search Input */}
          <div className="flex justify-center sm:justify-start">
            <motion.input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md bg-articlebg px-4 py-2 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout // Enables smooth reordering
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
        >
          <AnimatePresence>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout // Animates position changes
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }} // Animate removal
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Article
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                  />
                </motion.div>
              ))
            ) : (
              <motion.p
                key="no-products"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-500 col-span-full text-center"
              >
                No products found.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <footer className="flex items-center justify-center p-10 border-t border-[#ffffff1a] w-full">
        <p>Copyright 2025 © Nexida Project</p>
      </footer>
    </motion.section>
  );
};

export default ProductsPage;
