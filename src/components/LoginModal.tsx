"use client";

import React, { FC } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000066] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-2xl flex relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Left Section - SmartPrep branding */}
        <div className="w-1/2 bg-[#E6F0FF] p-8 flex flex-col justify-center items-center text-center">
          <Image
            src="/SP.png"
            alt="SmartPrep Logo"
            width={200}
            height={80}
            priority
            className="mx-auto mb-2"
          />
          <p className="text-gray-800 text-base font-semibold">
            All-in-one Learning Platform
          </p>
          <p className="text-gray-600 text-lg font-medium mt-4">
            Welcome back!
          </p>
        </div>

        {/* Right Section - Login options */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Login</h3>
          <div className="flex flex-col gap-5 w-full max-w-[200px]">
            <a
              href="https://secure.tutorcruncher.com/smartprep/login"
              className="w-full"
            >
              <button className="w-full py-3 border-2 border-[#254465] text-[#254465] rounded-full font-semibold hover:bg-[#254465] hover:text-white transition-colors duration-300">
                Tutor Login
              </button>
            </a>
            <a
              href="https://secure.tutorcruncher.com/smartprep/login/"
              className="w-full"
            >
              <button className="w-full py-3 border-2 border-[#254465] text-[#254465] rounded-full font-semibold hover:bg-[#254465] hover:text-white transition-colors duration-300">
                Client Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
