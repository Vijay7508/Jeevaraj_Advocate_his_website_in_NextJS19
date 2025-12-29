"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function BookAppointmentTwoColumn() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-10"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
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
              href="https://wa.me/919876543210"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-medium"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
            >
              <FaPhoneAlt /> Call
            </a>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/AdvocateImage.png" // Replace with your image path
            width={300}
            height={300}
            alt="Appointment Illustration"
            className="rounded-2xl shadow-lg object-cover w-full max-w-md"
          />
        </motion.div>

      </div>
    </div>
  );
}
