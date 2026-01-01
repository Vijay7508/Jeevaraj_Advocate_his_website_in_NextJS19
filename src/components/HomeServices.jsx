"use client";

import React from "react";
import { FaGavel, FaRing, FaBalanceScale, FaPhoneAlt, FaWhatsapp, FaArrowRight, FaFileInvoice, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeServices = () => {
  const services = [
    {
      title: "Marriage Registration",
      desc: "Legal assistance for smooth and hassle-free marriage registration process.",
      icon: "/IconMarrige.png",
      image: "/MarrigeReg.png",
    },
    {
      title: "Criminal Law",
      desc: "Strong legal defense and representation in criminal cases.",
      icon: "/IconCriminal.png",
      image: "/CriminalLaw.png",
    },
    {
      title: "Bail Matters",
      desc: "Quick and effective legal support for bail-related cases.",
      icon: "/IconBail.png",
      image: "/Bail.png",
    },
    {
      title: "Challan",
      desc: "Legal help for traffic challans and related notices issued by authorities.",
      icon: "/IconChallan.png" ,
      image: "/Challan.png",
    },
    {
      title: "Cheque Bounce",
      desc: "Expert legal support under Section 138 for cheque bounce matters.",
      icon: "/IconBounce.png",
      image: "/Bounce.png",
    },
    {
      title: "Domestic Violence",
      desc: "Sensitive and strong legal assistance for domestic violence cases.",
      icon: "/IconDomesticVoilence.png",
      image: "/DomesticVoilence.png",
    },
  ];

  return (
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
          {services.map((item, idx) => {
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
                <div className="h-52 overflow-hidden relative group">
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
    whileHover={{ y: -6, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-14 w-14 rounded-full bg-gray-100 text-gray-700 hover:bg-yellow-500 hover:text-white shadow-md hover:shadow-lg flex items-center justify-center"
  >
    <FaPhoneAlt className="text-lg" />
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
  <motion.button
    whileHover={{ y: -6, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-14 w-14 rounded-full bg-gray-100 text-gray-700 hover:bg-black hover:text-white shadow-md hover:shadow-lg flex items-center justify-center"
  >
<FaArrowRight className="text-lg group-hover:rotate-45 transition-transform duration-300" />
  </motion.button>
</div>


                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
