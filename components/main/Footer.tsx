import React from "react";
import { FaDiscord } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient2 text-white p-6 pt-10 text-sm">
      <div className="container mx-auto flex flex-wrap justify-center gap-x-32">
        {/* Logo and Socials */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="text-red-500 text-2xl font-bold">N</div>
          </div>
          <p className="mt-2">Check out our social media!</p>
          <div className="flex space-x-2 mt-2">
            <FaDiscord className="text-xl cursor-pointer" />
            <IoGlobeOutline className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Available Products */}
        <div>
          <h3 className="font-semibold mb-2">Available products</h3>
          <ul className="space-y-1">
            <li>Nexida Lua Engine</li>
            <li>Nexida Full</li>
            <li>Nexida Spoofer</li>
            <li>Nexida Decompiler</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Products</li>
            <li>Status</li>
            <li>Downloads</li>
            <li>Support</li>
            <li>User Panel</li>
            <li>Members</li>
          </ul>
        </div>

        {/* Legal Information */}
        <div>
          <h3 className="font-semibold mb-2">Legal information</h3>
          <ul className="space-y-1">
            <li>Terms and rules</li>
            <li>Privacy policy</li>
            <li>Brand</li>
            <li>Contacts</li>
            <li>Payments</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
