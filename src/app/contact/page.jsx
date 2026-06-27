"use client";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Head from "next/head";

export default function ContactUsSection() {
  return (
    <>
<Head>
  <title>Best Advocate in Chandigarh & Mohali | Legal Services</title>

  <meta
    name="description"
    content="Professional legal services in Chandigarh, Mohali & Kharar. Expert advocate for criminal, civil, family, divorce, property and court cases. Contact now for legal consultation."
  />

  <meta
    name="keywords"
    content="
    Advocate in Chandigarh,
    Lawyer in Mohali,
    Best Advocate in Kharar,
    Criminal Lawyer Chandigarh,
    Civil Lawyer Mohali,
    Divorce Lawyer Chandigarh,
    Property Lawyer Punjab,
    Family Lawyer Mohali,
    Legal Services Chandigarh,
    Court Case Lawyer Punjab,
    District Court Chandigarh Advocate,
    High Court Lawyer Chandigarh,
    Chandigarh Legal Consultant,
    Punjab Advocate Services,
    Best Lawyer in Punjab
    "
  />

  <meta name="author" content="Advora Law" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Best Advocate in Chandigarh & Mohali | Legal Services"
  />

  <meta
    property="og:description"
    content="Expert legal consultation and court case services in Chandigarh, Mohali & Kharar."
  />

  <meta property="og:type" content="website" />

  {/* Responsive */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
   
   <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-100 via-white to-gray-100 italic">

  {/* Background Blobs */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-300/20 rounded-full blur-3xl animate-pulse"></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
        Get In Touch
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
        Contact AdvoraLaw
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
        Our experienced legal professionals are ready to assist you with
        civil, criminal, family, property, corporate and service matters.
        Reach out today for trusted legal guidance.
      </p>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">

      <a
        href="https://wa.me/917888326148"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl group-hover:rotate-12 transition" />
        WhatsApp Now
      </a>

      <a
        href="tel:+917888326148"
        className="group flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300"
      >
        <FaPhoneAlt className="group-hover:animate-bounce" />
        Call Now
      </a>

    </div>

    {/* Contact Cards */}
    <div className="grid lg:grid-cols-2 gap-8">

  {/* CONTACT CARD */}
  <div className="group relative overflow-hidden rounded-[30px] bg-white p-[1px] hover:scale-[1.02] transition-all duration-500">

    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

    <div className="relative bg-white rounded-[30px] p-10 h-full">

      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Contact Information
      </h3>

      <div className="space-y-8">

        {/* Phone */}
        <div className="flex items-center gap-5 p-5 rounded-2xl bg-blue-50 hover:bg-blue-100 transition">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
            <FaPhoneAlt className="text-2xl text-blue-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              Call Us
            </p>
            <p className="text-xl font-bold text-gray-900">
              +91 7888326148
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-5 p-5 rounded-2xl bg-red-50 hover:bg-red-100 transition">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
            <FaEnvelope className="text-2xl text-red-500" />
          </div>

          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              Email Us
            </p>
            <p className="text-lg font-bold text-gray-900 break-all">
              advoralaw@gmail.com
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>

  {/* ADDRESS CARD */}
  <div className="group relative overflow-hidden rounded-[30px] bg-white p-[1px] hover:scale-[1.02] transition-all duration-500">

    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

    <div className="relative bg-white rounded-[30px] p-10 h-full">

      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Office Address
      </h3>

      <div className="space-y-6">

        <div className="border-l-4 border-amber-500 pl-5">
          <h4 className="font-bold text-gray-900 text-lg">
            Chandigarh Office
          </h4>

          <p className="text-gray-600 mt-2 leading-relaxed">
            Chamber No. 455, District Courts,
            Sector-43, Chandigarh, India
          </p>
        </div>

        <div className="border-l-4 border-amber-500 pl-5">
          <h4 className="font-bold text-gray-900 text-lg">
            Mohali / Kharar Office
          </h4>

          <p className="text-gray-600 mt-2 leading-relaxed">
            House No. 30, Dashmesh Nagar,
            Kharar, Mohali, Punjab
          </p>
        </div>

      </div>

    </div>
  </div>

</div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center bg-gray-900 rounded-3xl p-10 text-white shadow-2xl">
      <h3 className="text-3xl font-bold mb-4">
        Need Immediate Legal Assistance?
      </h3>

      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Connect with our legal experts today and get professional guidance
        for your legal concerns.
      </p>

      <a
        href="https://wa.me/917888326148"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-green-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all"
      >
        <FaWhatsapp />
        Start WhatsApp Consultations
      </a>
    </div>

  </div>
</section>
     </>
  );
}
