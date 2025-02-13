import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient2 text-white p-6 pt-10 text-sm">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center space-x-2">
            <div className="text-red-500 text-2xl font-bold">
              <Image
                width={45}
                height={45}
                src={"/UI/logo.png"}
                alt="nexida logo"
              />
            </div>
          </div>
          <p className="mt-2">Check out our social media!</p>
          <div className="flex space-x-3 mt-3">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="text-xl cursor-pointer hover:text-red-500 transition" />
            </a>
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="text-xl cursor-pointer hover:text-red-500 transition" />
            </a>
          </div>
        </div>

        {/* Available Products */}
        <div>
          <h3 className="font-semibold mb-3">Available Products</h3>
          <ul className="space-y-2 flex flex-col items-center sm:items-start">
            <li className="hover:text-red-500 transition cursor-pointer text-gray-400 sm:text-white">
              Nexida Lua Engine
            </li>
            <li className="hover:text-red-500 transition cursor-pointer text-gray-400 sm:text-white">
              Nexida Full
            </li>
            <li className="hover:text-red-500 transition cursor-pointer text-gray-400 sm:text-white">
              Nexida Spoofer
            </li>
            <li className="hover:text-red-500 transition cursor-pointer text-gray-400 sm:text-white">
              Nexida Decompiler
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 flex flex-col items-center sm:items-start">
            {[
              "Home",
              "Products",
              "Status",
              "Downloads",
              "Support",
              "User Panel",
              "Members",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-red-500 transition cursor-pointer text-gray-400 sm:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Information */}
        <div>
          <h3 className="font-semibold mb-3">Legal Information</h3>
          <ul className="space-y-2 flex flex-col items-center sm:items-start">
            {[
              "Terms and rules",
              "Privacy policy",
              "Brand",
              "Contacts",
              "Payments",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-red-500 transition cursor-pointer text-gray-400 sm:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-[10px] md:text-balance text-center text-gray-500 mt-5">
        © {new Date().getFullYear()} Nexida. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
