"use client";
import { useState, useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { practiceAreas, legalServices } from "./Dropdown";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(legalServices[0]);
  const closeTimer = useRef(null);
const [legalMobileOpen, setLegalMobileOpen] = useState(false);
const [activeMobileSection, setActiveMobileSection] = useState(null);




const handleMouseEnter = () => {
  if (closeTimer.current) {
    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }
  setLegalOpen(true);
};

const handleMouseLeave = () => {
  closeTimer.current = setTimeout(() => {
    setLegalOpen(false);
  }, 2000); // 👈 2 seconds hold
};


  

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm italic ">
      
      {/* MAIN BAR */}
      <div className="w-full max-w-7xl mx-auto h-[72px] flex items-center justify-between px-4 sm:px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/LOGO1.jpeg"
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
 <div
  className="relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <button className="flex items-center gap-1 hover:text-gray-900 transition">
    Legal Services
    <span
      className={`text-xs transition-transform ${
        legalOpen ? "rotate-180" : ""
      }`}
    >
      ▾
    </span>
  </button>

  {/* DROPDOWN */}
  <div
    className={`absolute left-0 top-full mt-2 w-[650px]
    bg-white border rounded-xl shadow-2xl
    flex overflow-hidden
    transition-all duration-300 ease-out
    ${legalOpen ? "opacity-100 scale-100" : "opacity-0 scale-[0.98] pointer-events-none"}`}
  >
    {/* LEFT SIDE – TITLES */}
    <div className="w-[280px] bg-gray-50 p-4 space-y-1">
      {legalServices.map((section) => (
        <div
          key={section.title}
          onMouseEnter={() => setActiveSection(section)}
          className={`cursor-pointer px-3 py-2 rounded-md text-sm font-semibold
          transition-all duration-200
          ${
            activeSection.title === section.title
              ? "bg-white shadow text-gray-900 pl-5"
              : "text-gray-700 hover:bg-white hover:pl-5"
          }`}
        >
          {section.title}
        </div>
      ))}
    </div>

    {/* RIGHT SIDE – CONTENT */}
    <div
      key={activeSection.title}
      className="flex-1 p-5 bg-white animate-[fadeSlide_0.25s_ease-out]"
    >
      <h4 className="mb-4 font-bold text-gray-900 text-sm">
        {activeSection.title}
      </h4>

      <ul className="space-y-2">
        {activeSection.items.map((item) => (
          <li key={item}>
            <Link
              href={`/legal-services/${item
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
              className="block text-sm text-gray-600
              transition-all duration-200
              hover:text-gray-900 hover:translate-x-1"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>






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

    {/* LEGAL SERVICES – MOBILE ACCORDION */}
{/* LEGAL SERVICES – MOBILE */}
<div className="space-y-3">

  {/* MAIN TOGGLE */}
  <button
    onClick={() => {
      setLegalMobileOpen(!legalMobileOpen);
      setActiveMobileSection(null);
    }}
    className="w-full flex items-center justify-between font-semibold"
  >
    <span>Legal Services</span>
    <span
      className={`transition-transform duration-300 ${
        legalMobileOpen ? "rotate-180" : ""
      }`}
    >
      ▾
    </span>
  </button>

  {/* LEVEL 1 – TITLES */}
  <div
    className={`overflow-hidden transition-all duration-300 ease-out
    ${legalMobileOpen ? "max-h-[2000px]" : "max-h-0"}`}
  >
    {legalServices.map((section) => {
      const isActive = activeMobileSection === section.title;

      return (
        <div key={section.title} className="border-l pl-3 py-2">

          {/* TITLE */}
          <button
            onClick={() =>
              setActiveMobileSection(isActive ? null : section.title)
            }
            className="w-full flex items-center justify-between text-left text-sm font-semibold text-gray-800"
          >
            {section.title}
            <span
              className={`transition-transform duration-300 ${
                isActive ? "rotate-90" : ""
              }`}
            >
              ▸
            </span>
          </button>

          {/* LEVEL 2 – ITEMS */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out
            ${isActive ? "max-h-[800px] mt-2" : "max-h-0"}`}
          >
            <ul className="space-y-2 pl-3">
              {section.items.map((item) => (
                <li key={item}>
                  <Link
                    href={`/legal-services/${item
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setLegalMobileOpen(false);
                      setActiveMobileSection(null);
                    }}
                    className="block text-sm text-gray-600 hover:text-gray-900 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      );
    })}
  </div>
</div>



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
      <span className="text-lg italic"></span>
      WhatsApp
    </Link>

  </nav>
</div>

    </header>
  );
}
