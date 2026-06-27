"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { practiceAreasContent } from "@/components/Dropdown";

export default function PracticeAreas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 italic">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Practice Areas
          </h1>

          <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Comprehensive legal solutions designed to protect your rights,
            resolve disputes, and deliver effective legal outcomes across all major practice domains.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {practiceAreasContent.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >

              {/* soft glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-indigo-50 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">

                {/* TITLE */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition">
                  {item.title}
                </h2>

                {/* underline accent */}
                <div className="w-10 h-[2px] bg-blue-600 mt-3 mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {item.shortDescription}
                </p>

                {/* CTA BUTTON */}
                <Link
                  href={`/practice-areas/${item.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group"
                >
                  <span>View Details</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}