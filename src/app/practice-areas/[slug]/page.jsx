"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { practiceAreasContent } from "@/components/Dropdown";
import Image from "next/image";
import {
  FaBalanceScale,
  FaCheckCircle,
  FaArrowRight,
  FaGavel,
  FaUserTie,
} from "react-icons/fa";
import Link from "next/link";

export default function PracticeAreaPage({ params }) {
  const area = practiceAreasContent.find(
    (item) => item.slug === params.slug
  );

  if (!area) return notFound();

  // 🖼️ Hero fallback image
  const heroImage =
    area.image ||
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80";

  return (
    <div className="bg-gray-50 text-gray-900 italic">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071c34]/95 to-black/60" />

        <div className="relative max-w-5xl text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-wide"
          >
            {area.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-200 italic"
          >
            “{area.shortDescription}”
          </motion.p>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <FaGavel className="text-yellow-600" />
            About <span className="text-[#071c34]">{area.title}</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mt-4 mb-8" />

          <p className="leading-9 text-gray-700 text-lg italic">
            {area.overview}
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Our <span className="text-yellow-600">Services</span>
          </h2>

          <p className="text-center text-gray-500 mt-3 italic">
            Professional legal solutions tailored for your needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {area.services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-b from-white to-gray-50 border rounded-2xl shadow-md p-7 hover:shadow-xl transition"
              >
                <FaBalanceScale className="text-amber-500 text-4xl mb-4" />

                <h3 className="font-semibold text-lg">{item}</h3>

                <p className="text-sm text-gray-500 mt-2 italic">
                  Expert assistance in {area.title.toLowerCase()}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why <span className="text-[#071c34]">Choose Us</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {area.benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition"
              >
                <FaCheckCircle className="text-green-600 text-3xl mb-4" />

                <h4 className="font-semibold text-gray-800">{item}</h4>

                <p className="text-sm text-gray-500 mt-2 italic">
                  Trusted legal expertise with proven results
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0 bg-[#071c34]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <FaUserTie className="text-yellow-400 text-5xl mx-auto mb-6" />

          <h2 className="text-4xl font-bold">
            Need Professional Legal Assistance?
          </h2>

          <p className="text-gray-300 mt-5 italic">
            Schedule a consultation with our experienced advocates today.
          </p>
<Link href="/contact">

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold flex items-center gap-3 mx-auto transition">
            Contact Us
            <FaArrowRight />
          </button>
          </Link>

        </div>
      </section>

    </div>
  );
}