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
   
    <section className="bg-gray-100 py-16 italic">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Heading */}
        <div className="text-center animate-fadeUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our expert team. Fill the form, call, or chat with us on WhatsApp. We’ll respond promptly.
          </p>
        </div>

        {/* Appointment Form */}
        <div className="bg-white rounded-2xl shadow-xl p-10 animate-fadeRight">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Book an Appointment
          </h3>
          <form className="space-y-4 text-sm">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
            />
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              Submit
            </button>
          </form>

          {/* WhatsApp / Call Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <a
              href="https://wa.me/917888326148"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-medium"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="tel:+917888326148"
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
            >
              <FaPhoneAlt /> Call
            </a>
          </div>
        </div>

        {/* Google Map */}
        {/* <div className="w-full rounded-2xl overflow-hidden shadow-xl animate-fadeUp">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1234567890!2d76.743723!3d30.719452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzE0LjAiTiA3NsKwNDQnMzcuNCJF!5e0!3m2!1sen!2sin!4v0000000000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Chandigarh District Court"
          ></iframe>
        </div> */}

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-xl p-10 space-y-6 animate-fadeLeft">
          <div className="flex items-start gap-4">
  <FaMapMarkerAlt className="text-3xl text-gray-800 mt-1" />
  <div>
    <h4 className="font-semibold text-gray-900">Office Address</h4>

    <p className="text-gray-700 mt-1">
      <strong>Chandigarh Office:</strong><br />
      Chamber No. 455, District Courts, Sector-43, Chandigarh, India
    </p>

    <p className="text-gray-700 mt-2">
      <strong>Mohali / Kharar Office:</strong><br />
      House No. 30, Dashmesh Nagar, Kharar, Mohali, Punjab
    </p>
  </div>
</div>


          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-3xl text-gray-800 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p className="text-gray-700">+91 7888326148</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-3xl text-gray-800 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-700">advoralaw@gmail.com</p>
            </div>
          </div>
        </div>

      </div>
    </section>
     </>
  );
}
