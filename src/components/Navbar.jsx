"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { practiceAreas, legalServices } from "./Dropdown";
import Head from "next/head";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(legalServices[0]);
  const closeTimer = useRef(null);

  const [legalMobileOpen, setLegalMobileOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setLegalOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setLegalOpen(false);
    }, 2000);
  };

  return (
    <>
    <Head>
  <title>
    AdvoraLaw | Best Advocate & Legal Services in Chandigarh, Mohali
  </title>

  <meta
    name="description"
    content="AdvoraLaw provides professional legal services in Chandigarh, Mohali, Kharar and Punjab including criminal law, civil disputes, divorce cases, family matters, property disputes, cyber crime, banking, corporate and legal consultation services."
  />

  <meta
    name="keywords"
    content="
    AdvoraLaw,
    Advocate in Chandigarh,
    Lawyer in Mohali,
    Best Advocate in Punjab,
    Criminal Lawyer Chandigarh,
    Civil Lawyer Mohali,
    Family Lawyer Chandigarh,
    Divorce Lawyer Punjab,
    Property Lawyer Chandigarh,
    Cyber Crime Lawyer Punjab,
    Bail Lawyer Chandigarh,
    High Court Advocate Chandigarh,
    District Court Lawyer Chandigarh,
    Corporate Lawyer Mohali,
    Banking Lawyer Chandigarh,
    Consumer Court Lawyer,
    Immigration Lawyer Punjab,
    Arbitration Lawyer Chandigarh,
    Labour Court Lawyer,
    Insurance Claim Lawyer,
    Real Estate Lawyer Chandigarh,
    Legal Notice Services,
    Legal Consultation Chandigarh,
    Chandigarh Court Advocate,
    Mohali Advocate Services,
    Punjab Legal Consultant,
    Legal Services Chandigarh,
    Best Lawyer in Mohali,
    Top Advocate Chandigarh,
    Advocates and Legal Consultants
    "
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="AdvoraLaw" />

  {/* Open Graph SEO */}
  <meta
    property="og:title"
    content="AdvoraLaw | Best Advocate & Legal Services in Chandigarh, Mohali"
  />

  <meta
    property="og:description"
    content="Professional legal consultation and court case services in Chandigarh, Mohali, Kharar and Punjab."
  />

  <meta property="og:type" content="website" />

  {/* Mobile Responsive */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://www.advoralaw.com" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>
   
    <header
      className="sticky top-0 z-50 w-full italic
      bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
      backdrop-blur-md border-b border-gray-700/60
      shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
    >
      {/* MAIN BAR */}
      <div className="w-full max-w-7xl mx-auto h-[78px] flex items-center justify-between px-4 sm:px-6">

        {/* LOGO */}
           <Link href="/" className="flex items-center shrink-0 italic">
  <div className="flex flex-col leading-tight">
    <span
      className="text-white text-2xl md:text-2xl font-medium"
    >
      AdvoraLaw
    </span>

    <span className="text-amber-400 text-[9px] md:text-[10px] mt-0.5 italic font-semibold">
  ADVOCATES & LEGAL CONSULTANTS
</span>



  </div>
</Link>




        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold tracking-wide text-gray-100">

          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>

          {/* PRACTICE AREAS */}
          <div
            className="relative"
            onMouseEnter={() => setPracticeOpen(true)}
            onMouseLeave={() => setPracticeOpen(false)}
          >
            <button className="flex items-center gap-1 nav-link">
              Practice Areas <span className="text-xs">▾</span>
            </button>

            <div
              className={`absolute top-10 left-0 w-[520px]
              bg-gray-900 border border-gray-700 rounded-xl
              shadow-2xl p-5 grid grid-cols-2 gap-3 text-sm
              transition-all duration-200
              ${practiceOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              {practiceAreas.map((item) => (
                <Link
                  key={item}
                  href={`/practice-areas/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-300 hover:text-amber-400 transition"
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
            <button className="flex items-center gap-1 nav-link">
              Legal Services <span className="text-xs">▾</span>
            </button>

            <div
              className={`absolute left-0 top-full mt-2 w-[650px]
              bg-gray-900 border border-gray-700 rounded-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              flex overflow-hidden transition-all duration-300
              ${legalOpen ? "opacity-100 scale-100" : "opacity-0 scale-[0.98] pointer-events-none"}`}
            >
              {/* LEFT */}
              <div className="w-[280px] bg-gray-800 p-4 space-y-1">
                {legalServices.map((section) => (
                  <div
                    key={section.title}
                    onMouseEnter={() => setActiveSection(section)}
                    className={`cursor-pointer px-3 py-2 rounded-md text-sm font-semibold
                    transition-all duration-200
                    ${
                      activeSection.title === section.title
                        ? "bg-gray-900 text-amber-400 pl-5 shadow-lg"
                        : "text-gray-300 hover:bg-gray-900 hover:text-amber-400 hover:pl-5"
                    }`}
                  >
                    {section.title}
                  </div>
                ))}
              </div>

              {/* RIGHT */}
              <div className="flex-1 p-5 bg-gray-900 animate-[fadeSlide_0.25s_ease-out]">
                <h4 className="mb-4 font-bold text-amber-400 text-sm">
                  {activeSection.title}
                </h4>

                <ul className="space-y-2">
                  {activeSection.items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/legal-services/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="block text-sm text-gray-300
                        hover:text-amber-400 transition-all hover:translate-x-1"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link href="/client_resources" className="nav-link">
            Client Resources
          </Link>
          <Link href="/contact" className="nav-link">
            Contact Us
          </Link>
        </nav>

        {/* WHATSAPP */}
        <Link
          href="https://wa.me/917888326148"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2
          border border-green-500 text-green-400 rounded-full text-sm
          hover:bg-green-500 hover:text-black transition-all
          shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          <FaWhatsapp className="text-lg" />
          WhatsApp
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl font-bold text-gray-100"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-[78px] inset-x-0
        bg-gray-900 border-t border-gray-700 shadow-xl
        transition-all duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <nav className="flex flex-col px-6 py-6 space-y-5 text-[17px] font-semibold text-gray-100 italic">

          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">About</Link>
          <Link href="/practice-areas" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">Practice Areas</Link>

          {/* MOBILE LEGAL */}
          <div>
            <button
              onClick={() => {
                setLegalMobileOpen(!legalMobileOpen);
                setActiveMobileSection(null);
              }}
              className="w-full flex justify-between"
            >
              Legal Services <span>▾</span>
            </button>

            {legalMobileOpen && legalServices.map((section) => (
              <div key={section.title} className="pl-3 mt-2">
                <button
                  onClick={() =>
                    setActiveMobileSection(
                      activeMobileSection === section.title ? null : section.title
                    )
                  }
                  className="w-full flex justify-between text-sm text-gray-300"
                >
                  {section.title} <span>▸</span>
                </button>

                {activeMobileSection === section.title && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link
                          href={`/legal-services/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          onClick={() => setMenuOpen(false)}
                          className="text-sm text-gray-400 hover:text-amber-400"
                        >
                          {item}
                        </Link>

                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <Link href="/client_resources" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">Client Resource</Link>


          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
            Contact Us
          </Link>
          <Link
  href="https://wa.me/+917888326148?text=Hello,%20I%20need%20a%20legal%20consultation"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
  className="mt-6 flex items-center justify-center gap-2
  border border-green-500 text-green-400 py-3 rounded-full
  text-base font-semibold
  hover:bg-green-500 hover:text-black transition-all duration-300
  shadow-[0_0_20px_rgba(34,197,94,0.4)]"
>
  <FaWhatsapp className="text-xl" />
  WhatsApp
</Link>

        </nav>
      </div>
    </header>
     </>
  );
}
