"use client";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Head from "next/head";

export default function Footer() {
  return (
    <>
    <Head>
  <title>
    AdvoRaLaw Footer | Legal Services & Contact Information
  </title>

  <meta
    name="description"
    content="Contact AdvoRaLaw for trusted legal consultation and advocate services in Chandigarh, Mohali and Kharar. Explore quick links, privacy policy, legal resources and professional legal assistance."
  />

  <meta
    name="keywords"
    content="
    AdvoRaLaw,
    Advocate Chandigarh,
    Lawyer Mohali,
    Legal Services Punjab,
    Contact Advocate Chandigarh,
    Chandigarh District Court Lawyer,
    Mohali Legal Consultant,
    Kharar Advocate Services,
    Trusted Legal Experts,
    Criminal Lawyer Chandigarh,
    Civil Lawyer Mohali,
    Family Lawyer Punjab,
    Property Lawyer Chandigarh,
    Corporate Lawyer Mohali,
    Legal Consultation Punjab,
    Privacy Policy Lawyer Website,
    Legal Disclaimer,
    Bar Council Compliance,
    Chandigarh Advocate Contact,
    Legal Help Punjab,
    Best Lawyer Chandigarh,
    Professional Legal Services,
    Legal Advisors Chandigarh,
    Advocates and Legal Consultants
    "
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="AdvoRaLaw" />

  {/* Open Graph SEO */}
  <meta
    property="og:title"
    content="AdvoRaLaw | Trusted Legal Services Chandigarh & Mohali"
  />

  <meta
    property="og:description"
    content="Professional legal consultation and advocate services for criminal, civil, family and corporate matters."
  />

  <meta property="og:type" content="website" />

  {/* Responsive */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://www.advoralaw.com" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>
   
    <footer className="bg-gray-900 text-gray-300 mt-16 italic">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div className="animate-fadeUp">
          <h3 className="text-white text-xl font-semibold mb-3">
            AdvoRa<span className="text-gray-400 font-normal">Law</span>
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Trusted legal professionals delivering ethical, timely and
            result-oriented legal solutions for individuals and businesses.
          </p>
        </div>

        {/* CONTACT */}
        <div className="animate-fadeUp delay-100">
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
  <FaMapMarkerAlt className="mt-1 text-gray-400" />
  <span>
    <strong>Chandigarh Office:</strong> Chamber No. 455, District Courts, Sector 43, Chandigarh.
    <br />
    <strong>Mohali/Kharar Office:</strong> House No. 30, Dashmesh Nagar, Kharar, Mohali.
  </span>
</li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-400" />
              <span>+91 7888326148</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gray-400" />
              <span>advoralaw@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="animate-fadeUp delay-200">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Client Resource", link: "/client_resources"},
              { name: "Contact Us", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="hover:text-white transition-all hover:translate-x-1 inline-block"
                >
                  → {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LEGAL */}
        <div className="animate-fadeUp delay-300">
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Disclaimer",
              "Bar Council Compliance",
              "Sitemap",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-white transition-all hover:translate-x-1 inline-block"
                >
                  → {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AdvoRaLaw. All Rights Reserved.
        </div>
      </div>
    </footer>
     </>
  );
}
