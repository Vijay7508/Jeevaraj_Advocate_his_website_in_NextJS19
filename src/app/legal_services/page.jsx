"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Gavel,
  Mail,
  Search,
  Briefcase,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Legal Consultation",
    desc: "Professional legal guidance to help you understand your rights and legal remedies.",
    icon: Scale,
  },
  {
    title: "Drafting & Vetting of Documents",
    desc: "Accurate drafting and thorough review of contracts, agreements, and affidavits.",
    icon: FileText,
  },
  {
    title: "Court Representation",
    desc: "Strong and reliable representation before courts, tribunals, and authorities.",
    icon: Gavel,
  },
  {
    title: "Legal Notices & Replies",
    desc: "Precise drafting and response to legal notices in a timely manner.",
    icon: Mail,
  },
  {
    title: "Due Diligence",
    desc: "Complete legal verification for properties, companies, and transactions.",
    icon: Search,
  },
  {
    title: "Retainer Services for Companies",
    desc: "Dedicated monthly legal support for startups, SMEs, and corporates.",
    icon: Briefcase,
  },
  {
    title: "Legal Awareness & Advisory Programs",
    desc: "Educational programs and advisory sessions to promote legal awareness.",
    icon: Users,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LegalServices() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden italic">
       <div
className="relative bg-center bg-cover bg-no-repeat min-h-[50vh]"
  style={{
    backgroundImage: "url('/Service.png')",
  }}
>
  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-28 text-center text-white">
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold mb-6"
    >
      Our Legal Services
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="max-w-3xl mx-auto text-gray-200 text-lg"
    >
      Reliable, professional, and result-oriented legal solutions for individuals and businesses.
    </motion.p>
  </div>
</div>

      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto italic">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="relative bg-white border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100">
                  <Icon className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                {/* subtle hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-gradient-to-tr from-transparent via-transparent to-gray-100 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-24 px-6 text-center italic">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Need Professional Legal Assistance?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Get in touch with us today for confidential and expert legal support.
        </motion.p>
< Link href="/contact" passHref>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-12 py-4 rounded-xl hover:bg-gray-800 transition italic"
        >
          Contact Us
        </motion.button>
            </Link>

      </section>
    </>
  );
}
