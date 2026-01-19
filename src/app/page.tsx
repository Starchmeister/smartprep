"use client";

import React, { useRef, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StatItemProps {
  value: string | number;
  label: string;
}

interface HowItWorksStepProps {
  number: number | string;
  title: string;
  description: string;
}

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  const scrollToFooter = () =>
    footerRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* HEADER */}
      <header className="bg-white/90 fixed top-0 left-0 right-0 z-50 border-b shadow-sm">
        <div className="container mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/">
            <Image src="/SP.png" alt="SmartPrep" width={240} height={104} />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-10">

            {/* Teach with us */}
            <div className="relative group">
              <button className="text-lg font-medium text-gray-700">
                Teach with us
              </button>
              <div className="absolute top-full mt-3 bg-white rounded-xl shadow-xl w-64 opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                <a
                  href="https://secure.tutorcruncher.com/smartprep-cape-town-tutors/signup/tutor/"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  Sign up as Tutor
                </a>
                <a
                  href="https://forms.gle/2WtzXwXs8QnngDk38"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  Teach with us (Instructor)
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="relative group">
              <button className="text-lg font-medium text-gray-700">
                Contact Us
              </button>
              <div className="absolute top-full mt-3 bg-white rounded-xl shadow-xl w-64 opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                <a
                  href="https://wa.me/27738959293"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  WhatsApp us
                </a>
                <a
                  href="mailto:info@smartprep.co.za"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  Email us
                </a>
              </div>
            </div>

            {/* Login */}
            <div className="relative group">
              <button className="bg-[#6991B4] text-white px-6 py-3 rounded-full font-semibold">
                Log In
              </button>
              <div className="absolute right-0 top-full mt-3 bg-white rounded-xl shadow-xl w-64 opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                <a
                  href="https://secure.tutorcruncher.com/smartprep-cape-town-tutors/login/"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  Tutor Login
                </a>
                <a
                  href="https://secure.tutorcruncher.com/smartprep-cape-town-tutors/login/"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  Client Login
                </a>
              </div>
            </div>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-32">
        {/* (All your existing sections remain unchanged below this point) */}
      </main>

      {/* FOOTER */}
      <footer ref={footerRef} className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-8">
          <Image src="/SP.png" alt="SmartPrep" width={240} height={104} />
          <div className="flex gap-4 mt-4">
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
          <p className="mt-8 text-gray-400">
            © {new Date().getFullYear()} SmartPrep. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

