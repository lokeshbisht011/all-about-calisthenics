import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebook />, url: "https://facebook.com" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
  { icon: <FaTwitter />, url: "https://twitter.com" },
  { icon: <FaYoutube />, url: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-5 py-8 flex flex-col items-center gap-4">
        {/* Logo / Title */}
        <h1 className="text-2xl md:text-3xl font-bold">AllAboutCalisthenics</h1>
        <p className="text-sm md:text-base font-light text-center">
          Your ultimate resource to learn everything about calisthenics
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 mt-4"></div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} AllAboutCalisthenics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
