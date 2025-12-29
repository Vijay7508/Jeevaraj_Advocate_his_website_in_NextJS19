"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  const practiceAreas = [
    "Civil Litigation",
    "Criminal Law",
    "Bail Matters",
    "Family & Matrimonial Law",
    "Labour & Employment Law",
    "Corporate & Commercial Law",
    "Property & Real Estate Law",
    "Cheque Bounce / NI Act",
    "Consumer Protection",
    "Service Matters",
    "Arbitration & Mediation",
    "Legal Compliance & Advisory",
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm italic ">
      
      {/* MAIN BAR */}
      <div className="w-full max-w-7xl mx-auto h-[72px] flex items-center justify-between px-4 sm:px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Logo.jpeg"
            alt="AdvoraLaw Logo"
            width={60}
            height={60}
            priority
            className="object-contain max-h-12"
          />
        </Link>

        {/* DESKTOP NAV */}
    <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold tracking-wide text-gray-800 ">

  {/* HOME */}
  <Link href="/" className="nav-link">Home</Link>

  {/* ABOUT */}
  <Link href="/about" className="nav-link">About</Link>

  {/* PRACTICE AREAS (Dropdown) */}
  <div
    className="relative"
    onMouseEnter={() => setPracticeOpen(true)}
    onMouseLeave={() => setPracticeOpen(false)}
  >
    <button className="flex items-center gap-1 hover:text-gray-900 transition">
      Practice Areas
      <span
        className={`text-xs transition-transform ${
          practiceOpen ? "rotate-180" : ""
        }`}
      >
        ▾
      </span>
    </button>

    <div
      className={`absolute top-10 left-0 w-[520px] bg-white border rounded-lg shadow-xl p-5
      grid grid-cols-2 gap-3 text-sm transition-all duration-200 origin-top
      ${practiceOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
    >
      {practiceAreas.map((item) => (
        <Link
          key={item}
          href={`/practice-areas/${item.toLowerCase().replace(/\s+/g, "-")}`}
          className="hover:text-gray-900 transition"
        >
          {item}
        </Link>
      ))}
    </div>
  </div>

  {/* LEGAL SERVICES */}
  <Link href="/legal_services" className="nav-link">
    Legal Services
  </Link>

  {/* CLIENT RESOURCES */}
  <Link href="/client_resources" className="nav-link">
    Client Resources
  </Link>

  {/* CONTACT */}
  <Link href="/contact" className="nav-link">
    Contact Us
  </Link>
</nav>



        {/* CTA */}
       <Link
  href="https://wa.me/91XXXXXXXXXX?text=Hello,%20I%20need%20a%20legal%20consultation"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-flex items-center gap-2 px-5 py-2
  border border-green-600 text-sm rounded-full text-green-600
  hover:bg-green-600 hover:text-white transition-all duration-300
  hover:-translate-y-[2px] hover:shadow-lg"
>
  <FaWhatsapp className="text-lg" />
  WhatsApp
</Link>



        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl font-bold text-gray-900"
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU – FULL WIDTH */}
      <div
  className={`md:hidden fixed top-[72px] left-0 right-0 z-50 w-full
  bg-white border-t shadow-xl
  transition-all duration-300 ease-in-out
  ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
>
  <nav className="flex flex-col px-6 py-6 space-y-5 text-[17px] font-semibold text-gray-900 italic">

    <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-700">
      Home
    </Link>

    <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-700">
      About
    </Link>

    <Link href="/practice-areas" onClick={() => setMenuOpen(false)} className="hover:text-gray-700">
      Practice Areas
    </Link>

    <Link href="/legal_services" onClick={() => setMenuOpen(false)} className="hover:text-gray-700">
      Legal Services
    </Link>

    <Link href="/client-resources" onClick={() => setMenuOpen(false)} className="hover:text-gray-700">
      Client Resources
    </Link>

    <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-700">
      Contact Us
    </Link>

    {/* WHATSAPP CTA */}
    <Link
      href="https://wa.me/91XXXXXXXXXX?text=Hello,%20I%20need%20a%20legal%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setMenuOpen(false)}
      className="mt-6 flex items-center justify-center gap-2
      border border-green-600 text-green-600 py-3 rounded-full
      hover:bg-green-600 hover:text-white transition-all duration-300"
    >
      <span className="text-lg italic">💬</span>
      WhatsApp
    </Link>

  </nav>
</div>

    </header>
  );
}
