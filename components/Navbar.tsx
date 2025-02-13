"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedActiveTab = localStorage.getItem("activeTab");
    if (savedActiveTab && savedActiveTab !== "Home") {
      const activeItem = navItems.find((item) => item.name === savedActiveTab);
      if (activeItem) {
        router.push(activeItem.href);
      }
    }
    setActive(savedActiveTab || "Home");
  }, [router]);

  const handleSetActive = (name: string) => {
    setActive(name);
    localStorage.setItem("activeTab", name);
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <section className="absolute w-full top-4 left-0 px-4 sm:px-6 md:px-20">
      <nav className="flex justify-between items-center py-4 relative">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl">
            <span className="text-brandRed font-bold italic">NEXIDA</span>{" "}
            PROJECT
          </h3>
          <p className="text-xs sm:text-sm">Get Aura, Get Nexida.</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 md:gap-6 text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.name} className="relative lg:text-base text-xs">
              <Link
                href={item.href}
                className={`nav-li relative ${
                  active === item.name ? "text-red-500" : "text-white"
                }`}
                onClick={() => handleSetActive(item.name)}
              >
                {item.name}
              </Link>
              {active === item.name && (
                <>
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[5px] bg-red-500 bg-opacity-50 blur-[3.15px] rounded-[5px]"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <motion.span
                    layoutId="underlinespan"
                    className="absolute left-0 -bottom-1 w-full h-[5px] under-span rounded-[5px]"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button with Animation */}
        <motion.button
          className="md:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>

        {/* Mobile Menu with Enhanced Styles */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-custom-gradient3 text-white flex flex-col items-center py-8 space-y-6 shadow-xl md:hidden text-lg rounded-xl"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`w-full text-center py-3 px-4 rounded-lg transition-colors duration-300 ${
                    active === item.name
                      ? "bg-red-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => handleSetActive(item.name)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="w-full flex justify-center pt-4">
                <Link
                  href="/discord"
                  className="text-sm md:text-base underline underline-offset-4 text-gray-300 hover:text-white"
                >
                  Join our Discord
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Link
          href="/discord"
          className="hidden md:block underline underline-offset-4 not-active text-sm md:text-base"
        >
          Join our Discord
        </Link>
      </nav>
    </section>
  );
};

export default Navbar;
