"use client";

import React, { useRef, useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    {
      name: "Teach with us",
      href: "#",
      onClick: () => alert("Open modal here"),
    },
    {
      name: "Contact Us",
      href: "#",
      onClick: scrollToFooter,
    },
  ];

  return (
    <div className="bg-gray-50 font-sans antialiased min-h-screen flex flex-col">
      {/* --- Header --- */}
      <header className="bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-8 py-5 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3">
            <Image
              src="/SP.png"
              alt="SmartPrep Logo"
              width={240}
              height={104}
              priority
              className="mx-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="text-lg text-gray-700 hover:text-[#6991B4] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="bg-[#6991B4] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#254465] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D0AB2C]"
            >
              Login
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <div className="px-8 py-5 flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={link.onClick}
                  className="text-lg text-gray-700 hover:text-[#6991B4] transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="bg-[#6991B4] text-white text-center px-6 py-3 rounded-full hover:bg-[#254465] transition-all duration-300 shadow-md"
              >
                Log In
              </a>
            </div>
          </div>
        )}
      </header>

      {/* --- Main Content (Just the Form) --- */}
      <main className="flex-grow pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScw9wH4hQc2MamtCblxxVdZ-CT2HrG1xIVAT0zGqh6QQQGh8w/viewform?embedded=true"
            width="100%"
            height="1800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full h-[1800px] border-none"
          >
            Loading…
          </iframe>
        </div>
      </main>

      {/* --- Optional Footer (Keep or remove) --- */}
      <footer ref={footerRef} className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SmartPrep. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://www.instagram.com/smartprepza">
              <Instagram />
            </a>
            <a href="https://za.linkedin.com/company/smartprep-by-jl-tutoring">
              <Linkedin />
            </a>
            <a href="https://www.facebook.com/smartprepza">
              <Facebook />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
