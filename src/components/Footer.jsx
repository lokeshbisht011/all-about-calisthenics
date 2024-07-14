import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="border-t border-white/30 mx-8"></div>
      <div className="flex flex-col items-center justify-center mt-5 pb-5 gap-2.5">
        <h1 className="text-2xl">AllAboutCalisthenics</h1>
        <p className="font-light">
          Learn everything about Calisthenics
        </p>
        <div className="mt-2.5 flex gap-2.5">
          <FaFacebook className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaTwitter className="text-2xl" />
          <FaYoutube className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;