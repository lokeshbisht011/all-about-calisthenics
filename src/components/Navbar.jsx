import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white border-b text-black">
      <div className="flex items-center mx-auto max-w-4xl justify-between h-16 px-5 sm:px-8 z-50">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5 text-sm sm:text-base md:text-lg lg:text-xl">
          <Link href="/" className="hidden sm:inline">
            Home
          </Link>
          <Link href="/about" className="hidden sm:inline">
            About
          </Link>
          <Link href="/contact" className="hidden sm:inline">
            Contact
          </Link>
          <Link href="/glossary">Glossary</Link>
          <Link href="/one-rep-max-calculator">1RM Calculator</Link>
        </div>
      </div>
      <div className="border-t border-white/30 mx-5 sm:mx-8"></div>
    </div>
  );
};

export default Navbar;
