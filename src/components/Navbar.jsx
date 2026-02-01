"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-shadow ${
        isScrolled ? "shadow-md bg-white" : "bg-white/90"
      }`}
    >
      <div className="flex items-center justify-between max-w-5xl mx-auto h-16 px-5 sm:px-8">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo_blue.png"
            alt="Logo"
            className="w-20 h-20 md:w-20 md:h-20 cursor-pointer"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm sm:text-base md:text-lg lg:text-xl">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition-colors font-medium"
          >
            Contact
          </Link>
          <Link
            href="/glossary"
            className="hover:text-blue-600 transition-colors font-medium"
          >
            Glossary
          </Link>
          <Link
            href="/one-rep-max-calculator"
            className="hover:text-blue-600 transition-colors font-medium"
          >
            1RM Calculator
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded hover:bg-gray-100 transition"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col p-4 gap-3 text-base">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/glossary"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Glossary
            </Link>
            <Link
              href="/one-rep-max-calculator"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              1RM Calculator
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
