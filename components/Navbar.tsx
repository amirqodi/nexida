"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  // Retrieve active tab from localStorage on mount
  useEffect(() => {
    const savedActiveTab = localStorage.getItem("activeTab");
    if (savedActiveTab) {
      setActive(savedActiveTab);
    }
  }, []);

  // Update localStorage when active tab changes
  const handleSetActive = (name: string) => {
    setActive(name);
    localStorage.setItem("activeTab", name);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <section className="absolute w-[60vw] pr-20 top-4 left-4">
      <nav className="flex justify-between items-center py-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl">
            <span className="text-brandRed font-bold italic">NEXIDA</span>{" "}
            PROJECT
          </h3>
          <p>Get Aura, Get Nexida.</p>
        </div>

        <ul className="relative flex gap-6">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
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

        <Link
          href="/discord"
          className="underline underline-offset-4 not-active"
        >
          Join our Discord
        </Link>
      </nav>
    </section>
  );
};

export default Navbar;
