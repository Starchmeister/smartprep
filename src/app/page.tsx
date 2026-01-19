"use client";

import React, { useRef, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  GraduationCap,
  PlayCircle,
  Users,
  Star,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import TeachWithUsModal from "@/components/TeachWithUsModal";
import LoginModal from "@/components/LoginModal";
import Link from "next/link";

interface StatItemProps {
  value: string | number; // or more specific types if needed
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

// Helper component for Stat items
const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center">
    <p className="text-5xl md:text-6xl font-bold text-[#6991B4]">{value}</p>
    <p className="text-base md:text-lg text-gray-700 mt-3">{label}</p>
  </div>
);

// Helper component for "How it Works" steps
const HowItWorksStep = ({
  number,
  title,
  description,
}: HowItWorksStepProps) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-[#E6F0FF] text-[#6991B4] rounded-full flex items-center justify-center font-bold text-xl shadow-sm">
        {number}
      </div>
    </div>
    <div className="ml-5">
      <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

// Helper component for FAQ items
const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-7">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-xl font-medium text-gray-800 hover:text-[#6991B4] focus:outline-none focus:ring-2 focus:ring-[#D0AB2C] rounded-md"
      >
        <span>{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={26}
        />
      </button>
      {isOpen && (
        <div className="mt-5 text-gray-600 pr-8">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTeachModalOpen, setIsTeachModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // New state for login modal

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
      onClick: () => setIsTeachModalOpen(true),
    },
    {
      name: "Contact Us",
      href: "#",
      onClick: scrollToFooter,
    },
  ];

  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* --- Header --- */}
      <header className="bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div>
              <Image
                src="/SP.png"
                alt="SmartPrep Logo"
                width={240}
                height={104}
                priority
                className="mx-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="text-lg text-gray-700 hover:text-[#6991B4] transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsLoginModalOpen(true)} // Modified onClick for Login button
              className="bg-[#6991B4] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#254465] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D0AB2C]"
            >
              Log In
            </button>
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
              <button
                onClick={() => setIsLoginModalOpen(true)} // Modified onClick for Login button in mobile menu
                className="bg-[#6991B4] text-white text-center px-6 py-3 rounded-full hover:bg-[#254465] transition-all duration-300 shadow-md"
              >
                Log In
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-28 md:pt-32">
        {/* --- Hero Section --- */}
        <section className="py-24 md:py-36 ">
          <div className="container mx-auto px-8 text-center max-w-6xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Learn from <span className="text-[#6991B4]">anywhere</span> &{" "}
              anytime
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed">
              Online tutoring & recorded classes that fit your schedule. Achieve
              academic excellence at your own pace.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="https://learn.smartprep.co.za"
                className="bg-[#6991B4] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#254465] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#D0AB2C]"
              >
                View Classes
              </a>
              <a
                href="/tutor-request-form"
                className="bg-white text-[#6991B4] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#E6F0FF] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto border-2 border-[#D0AB2C] focus:outline-none focus:ring-2 focus:ring-[#D0AB2C]"
              >
                Request a Tutor <ArrowRight size={22} />
              </a>
            </div>
          </div>
        </section>

        {/* --- How It Works Section --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Learn Anywhere. Succeed Everywhere.
              </h2>
              <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Getting started with personalized tutoring or on-demand classes
                is simple and straightforward.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-20">
              {/* Getting a Private Tutor */}
              <div className="bg-[#E6F0FF] p-10 rounded-3xl shadow-lg border border-[#E6F0FF]">
                <h3 className="text-3xl font-bold text-gray-800 mb-10">
                  Getting a Private Tutor
                </h3>
                <div className="space-y-10">
                  <HowItWorksStep
                    number="1"
                    title="Submit a Tutor Request"
                    description="Fill in your subject, grade, and specific learning preferences."
                  />
                  <HowItWorksStep
                    number="2"
                    title="Make Payment"
                    description="Choose your preferred tutoring package and pay securely online."
                  />
                  <HowItWorksStep
                    number="3"
                    title="We Match You Within 24 Hours"
                    description="Our expert team assigns the ideal tutor based on your unique request."
                  />
                </div>
                <a
                  href="/tutor-request-form"
                  className="mt-12 inline-block bg-[#6991B4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#254465] transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D0AB2C]"
                >
                  Request a Tutor
                </a>
              </div>
              {/* Joining a Class */}
              <div className="bg-[#E6F0FF] p-10 rounded-3xl shadow-lg border border-[#E6F0FF]">
                <h3 className="text-3xl font-bold text-gray-800 mb-10">
                  Joining a Class or Recording
                </h3>
                <div className="space-y-10">
                  <HowItWorksStep
                    number="1"
                    title="Browse Courses"
                    description="Search for your subject or module (live classes or recorded sessions)."
                  />
                  <HowItWorksStep
                    number="2"
                    title="Add to Cart"
                    description="Select individual lessons or purchase multiple classes at once."
                  />
                  <HowItWorksStep
                    number="3"
                    title="Checkout & Register"
                    description="Create your student account and complete the secure payment."
                  />
                  <HowItWorksStep
                    number="4"
                    title="Start Learning"
                    description="Attend live sessions, or access your purchased recordings anytime."
                  />
                </div>
                <a
                  href="https://learn.smartprep.co.za"
                  className="mt-12 inline-block bg-white text-[#6991B4] border border-[#D0AB2C] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#E6F0FF] transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D0AB2C]"
                >
                  Browse Classes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section className="py-24">
          <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
              <Users className="w-14 h-14 text-[#6991B4] mb-6" />
              <h3 className="text-3xl font-bold text-gray-800">
                Online Tutoring (1-on-1 or Group)
              </h3>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Personalized live sessions on Zoom or Google Meet to fit your
                learning style.
              </p>
              <ul className="mt-8 space-y-4 text-gray-700 text-lg">
                <li className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-green-600 mr-3" />{" "}
                  Choose between one-on-one or small group formats.
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-green-600 mr-3" />{" "}
                  University & school-level subjects available.
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-green-600 mr-3" />{" "}
                  Interactive and engaging learning environment.
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
              <PlayCircle className="w-14 h-14 text-[#6991B4] mb-6" />
              <h3 className="text-3xl font-bold text-gray-800">
                Pre-recorded Classes
              </h3>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Flexible learning with on-demand video lessons from expert
                instructors.
              </p>
              <ul className="mt-8 space-y-4 text-gray-700 text-lg">
                <li className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-green-600 mr-3" /> Learn
                  anytime, anywhere, at your own pace.
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-green-600 mr-3" />{" "}
                  Covers key topics, past papers & exam strategies.
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-green-600 mr-3" />{" "}
                  Includes downloadable notes & community support.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Track Record Section --- */}
        <section className="py-24 bg-[#E6F0FF]">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Our Track Record
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Since 2017, we&apos;ve been dedicated to helping students
                succeed.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
              <StatItem value="50k+" label="Students Helped" />
              <StatItem value="3k+" label="Classes Conducted" />
              <StatItem value="7+" label="Years of Experience" />
              <StatItem value="4.6 ★" label="Google Review Rating" />
            </div>
            <div className="text-center mt-16">
              <p className="text-base text-gray-500 max-w-4xl mx-auto leading-relaxed">
                SmartPrep is a registered vendor of UP, UCT, SU, WITS and
                Varsity College. Ask your Bursary about signing up for our
                classes!
                <br />
                <span className="italic mt-3 block">
                  SmartPrep supports CAPS, IEB, IB, Cambridge (IGCSE and
                  A/A-Levels) and other curriculums, and provides support to
                  various tertiary institutions across South Africa.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* --- Private Tutoring Showcase --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="w-full h-[400px] relative">
              {/* Increased height and made container relative */}
              <Image
                src="/120shots_so.png"
                alt="Tutoring platform dashboard"
                fill
                className="rounded-3xl shadow-2xl border border-[#E6F0FF] object-cover" // Changed to object-cover
                priority
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                The Best Tutors in South Africa & Beyond
              </h2>
              <p className="mt-5 text-xl text-gray-600 leading-relaxed">
                Personalized 1-on-1 tutoring from our expert tutors for all
                universities and school grades.
              </p>
              <ul className="mt-10 space-y-5">
                <li className="flex items-center text-xl text-gray-700">
                  <GraduationCap className="w-9 h-9 text-[#6991B4] mr-4" /> All{" "}
                  universities and school grades
                </li>
                <li className="flex items-center text-xl text-gray-700">
                  <Users className="w-9 h-9 text-[#6991B4] mr-4" /> In-person{" "}
                  and online tutoring
                </li>
                <li className="flex items-center text-xl text-gray-700">
                  <Star className="w-9 h-9 text-[#6991B4] mr-4" /> Top-rated,{" "}
                  vetted instructors
                </li>
              </ul>
              <a
                href="/tutor-request-form"
                className="mt-12 inline-block bg-[#6991B4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#254465] transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#D0AB2C]"
              >
                Request a Tutor
              </a>
            </div>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="py-24">
          <div className="container mx-auto px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <FaqItem
                question="1. What tutoring services does SmartPrep offer?"
                answer="We offer one-on-one private tutoring, group tutoring, exam prep workshops, and online courses for both high school and university students across a wide range of subjects."
              />
              <FaqItem
                question="2. What subjects and levels do you cover?"
                answer="We cover all major subjects from Grades R–12 (CAPS, IEB, Cambridge) and university-level subjects across commerce, science, engineering, and humanities. If you're unsure, just ask—we likely have a tutor for it."
              />
              <FaqItem
                question="3. Is tutoring available online and in person?"
                answer="Yes. Online tutoring is available nationwide and internationally. In-person tutoring is available in all major cities including Cape Town, Johannesburg, Pretoria, and Durban."
              />
              <FaqItem
                question="4. What are the benefits of using SmartPrep instead of finding a tutor directly?"
                answer="We rigorously vet all tutors, offer flexible scheduling, secure payment options, and support if you need to switch tutors. Plus, our team ensures the entire process is hassle-free and aligned with your learning goals."
              />
              <FaqItem
                question="5. How much does tutoring cost?"
                answer="Rates vary by level and subject, but we offer competitive pricing. Group sessions offer the best cost-per-student rate, and we have bulk and monthly packages for added savings."
              />
              <FaqItem
                question="6. What’s the cost-benefit analysis of tutoring?"
                answer="Tutoring leads to improved grades, deeper understanding, and confidence—saving time and boosting future opportunities like scholarships, university admission, or job offers. It's an investment in long-term success."
              />
              <FaqItem
                question="7. How do I sign up for tutoring?"
                answer="Click the 'Request a Tutor' button, fill in your learning needs, and our team will get back to you within 24 hours with a tailored match and next steps."
              />
              <FaqItem
                question="8. Can I request a specific tutor?"
                answer="Yes, if you have a preferred tutor from our team, we’ll do our best to match you. If they’re unavailable, we’ll recommend a similar expert."
              />
              <FaqItem
                question="9. What if I’m not happy with my tutor?"
                answer="No problem! Let us know, and we’ll rematch you at no additional cost. Your satisfaction and progress are our top priorities."
              />
              <FaqItem
                question="10. What is your refund policy?"
                answer="We offer pro-rata refunds for unused sessions within 7 days of purchase. For ongoing packages, we can pause or transfer credits as needed. Terms apply—please contact support for full details."
              />
              <FaqItem
                question="11. Do you offer support for special learning needs?"
                answer="Yes, we have experienced tutors trained to work with learners who have ADHD, dyslexia, and other learning needs. Just mention this during sign-up so we can match accordingly."
              />
              <FaqItem
                question="12. Are your tutors qualified?"
                answer="All SmartPrep tutors have achieved a minimum of 75% in the subject they teach or hold an honours degree. They also go through a thorough vetting and onboarding process."
              />
              <FaqItem
                question="13. How are tutoring sessions scheduled?"
                answer="Sessions are scheduled based on your availability and the tutor’s. We offer flexible booking and rescheduling via email or WhatsApp support."
              />
              <FaqItem
                question="14. How do I make payment?"
                answer="You can pay securely online via card, EFT, or SnapScan. We’ll invoice you once your sessions are confirmed, and you’ll receive reminders before each session."
              />
              <FaqItem
                question="15. Do you offer discounts or sponsorships?"
                answer="Yes. We offer discounts for group sessions, multi-session packages, and we also partner with bursaries and sponsors to support students financially. Contact us to find out if you're eligible."
              />
            </div>
          </div>
        </section>

        {/* --- Partners Section --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Clients & Partners
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              We&apos;re proud to collaborate with leading educational
              organizations.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
              <div>
                <Image
                  src="/1.png"
                  alt="SmartPrep Logo"
                  width={120}
                  height={52}
                  priority
                  className="mx-auto"
                />
              </div>
              <div>
                <Image
                  src="/2.png"
                  alt="SmartPrep Logo"
                  width={120}
                  height={52}
                  priority
                  className="mx-auto"
                />
              </div>
              <div>
                <Image
                  src="/3.png"
                  alt="SmartPrep Logo"
                  width={120}
                  height={52}
                  priority
                  className="mx-auto"
                />
              </div>
              <div>
                <Image
                  src="/4.png"
                  alt="SmartPrep Logo"
                  width={120}
                  height={52}
                  priority
                  className="mx-auto"
                />
              </div>
              <div>
                <Image
                  src="/5.png"
                  alt="SmartPrep Logo"
                  width={120}
                  height={52}
                  priority
                  className="mx-auto"
                />
              </div>
              <div>
                <Link href="/tutors-exams-sa">
                  <Image
                    src="/tutors.png"
                    alt="SmartPrep Logo"
                    width={120}
                    height={52}
                    priority
                    className="mx-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer ref={footerRef} className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div>
                <Image
                  src="/SP.png"
                  alt="SmartPrep Logo"
                  width={240}
                  height={104}
                  priority
                />
              </div>
              <div className="flex justify-items-center gap-4 mt-4">
                <a href="https://www.instagram.com/smartprepza?igsh=MXdtYjNoaWlocWR1Zg==">
                  <Instagram />
                </a>
                <a href="https://za.linkedin.com/company/smartprep-by-jl-tutoring">
                  {" "}
                  <Linkedin />
                </a>
                <a href="https://www.facebook.com/smartprepza">
                  {" "}
                  <Facebook />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Course</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://secure.tutorcruncher.com/smartprep-cape-town-tutors/signup/tutor/"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Live Classes
                  </a>
                </li>
                <li>
                  <a
                    href="https://learn.smartprep.co.za"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Recorded Classes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://docs.google.com/document/d/1as3s_YXUPAqPVtLBoc8MSeh6URklcf3scFhyACl6bTM/edit?usp=sharing"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/document/d/1ulmwuvPeqt48SfvS6mjvCaYQRvOWWSemRr4d3KXJskQ/edit?usp=sharing"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <p className="text-gray-400 hover:text-white transition-colors duration-200">
                    +27 73 895 9293
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 hover:text-white transition-colors duration-200">
                    info@smartprep.co.za
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-700 pt-10 text-center text-gray-500">
            <p className="text-sm leading-relaxed">
              &copy; {new Date().getFullYear()} SmartPrep. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Teach With Us Modal */}
      <TeachWithUsModal
        isOpen={isTeachModalOpen}
        onClose={() => setIsTeachModalOpen(false)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}
