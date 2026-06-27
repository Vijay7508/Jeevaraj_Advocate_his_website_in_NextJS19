"use client";

import React, { useState } from "react";
import { FaGavel, FaRing, FaBalanceScale, FaPhoneAlt, FaWhatsapp, FaArrowRight, FaFileInvoice, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@mui/material";
import { services } from "./Dropdown";
import Link from "next/link";
const HomeServices = () => {
  const [showAll, setshowAll] = useState(false);

  return (
    <>
    <Head>
  <title>
    Area of Practice | Criminal, Bail, Marriage & Legal Services | AdvoraLaw
  </title>

  <meta
    name="description"
    content="Explore AdvoraLaw legal services including marriage registration, criminal law, bail matters, cheque bounce cases, domestic violence and challan legal support in Chandigarh, Mohali, Kharar and Punjab."
  />

  <meta
    name="keywords"
    content="
    Area of Practice,
    Legal Services Chandigarh,
    Criminal Lawyer Chandigarh,
    Bail Lawyer Mohali,
    Marriage Registration Lawyer,
    Court Marriage Chandigarh,
    Cheque Bounce Lawyer,
    Section 138 Advocate,
    Domestic Violence Lawyer,
    Challan Lawyer Punjab,
    Traffic Challan Advocate,
    Family Lawyer Mohali,
    Best Advocate Chandigarh,
    Legal Consultation Punjab,
    Criminal Defense Lawyer,
    Bail Matters Advocate,
    Legal Help Chandigarh,
    Property and Civil Lawyer,
    Trusted Legal Experts,
    Chandigarh Court Lawyer,
    Mohali Legal Services,
    Punjab Legal Consultant,
    AdvoraLaw,
    Advocates and Legal Consultants
    "
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="AdvoraLaw" />

  {/* Open Graph SEO */}
  <meta
    property="og:title"
    content="Area of Practice | AdvoraLaw Legal Services"
  />

  <meta
    property="og:description"
    content="Professional legal services for criminal law, bail matters, marriage registration, cheque bounce and domestic violence cases."
  />

  <meta property="og:type" content="website" />

  {/* Mobile Responsive */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://www.advoralaw.com"/>

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-700">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
Area of Practice       
 </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, showAll? services.length : 6)
          .map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="h-fit overflow-hidden relative group">
  <Image
    src={item.image}
    alt={item.title}
    width={400}
    height={400}
    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
  />
</div>


                {/* Content */}
                <div className="p-6 relative">
                  {/* Icon */}
                  <motion.div
  whileHover={{ rotate: 360, scale: 1.1 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="absolute -top-7 left-6 h-14 w-14 rounded-lg bg-white text-white flex items-center justify-center text-xl shadow-md"
>
  <Image
  src={item.icon}
  alt={item.title}
  width={50}
  height={50}
  />
</motion.div>


                  <h3 className="mt-8 mb-2 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Actions */}
      <div className="mt-6 flex justify-center gap-6">
  {/* Call */}
  <motion.button
  onClick={() => {
    window.location.href = "tel:7888326148";
  }}
  whileHover={{ y: -6, scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="h-14 w-14 rounded-full bg-gray-100 text-gray-700
  hover:bg-yellow-500 hover:text-white shadow-md hover:shadow-lg
  flex items-center justify-center"
>
  <FaPhoneAlt className="text-lg"/>
</motion.button>


  {/* WhatsApp */}
 <motion.button
  onClick={() =>
    window.open(
      "https://wa.me/917888326148?text=Hello,%20I%20need%20a%20legal%20consultation",
      "_blank"
    )
  }
  whileHover={{ y: -6, scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="h-14 w-14 rounded-full bg-gray-100 text-gray-700
  hover:bg-green-500 hover:text-white shadow-md hover:shadow-lg
  flex items-center justify-center"
>
  <FaWhatsapp className="text-xl" />
</motion.button>


  {/* View Details */}
  <Link href={`/practice-areas/${item.slug}`}>

  <motion.button
    whileHover={{ y: -6, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-14 w-14 rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white shadow-md hover:shadow-lg flex items-center justify-center"
  >
<FaArrowRight className="text-lg group-hover:rotate-45 transition-transform duration-300" />
  </motion.button>
  </Link>
</div>


                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
     <div className="flex justify-center mt-10">
  <button
    onClick={() => setshowAll(!showAll)}
    className="
      px-8 py-3
      bg-gradient-to-r from-yellow-500 to-orange-500
      text-white font-semibold
      rounded-full
      shadow-lg
      hover:shadow-2xl
      hover:scale-105
      transition-all duration-300
      flex items-center gap-2
    "
  >
    {showAll ? "Show Less" : "Explore More"}
    <FaArrowRight
      className={`transition-transform duration-300 ${
        showAll ? "rotate-90" : ""
      }`}
    />
  </button>
</div>
    </section>
    </>
  );
};

export default HomeServices;
