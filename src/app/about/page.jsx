"use client";
import { FaBalanceScale, FaBullseye, FaEye } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";


export default function AboutPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
    <section
  className="relative py-28 md:py-36 bg-center bg-cover"
  style={{
    backgroundImage:
      "url('AboutImage.png')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 text-center animate-fadeUp">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight italic">
      About <span className="text-gray-200 font-semibold">AdvoRaLaw</span>
    </h1>

    <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto italic">
      Trusted legal professionals delivering ethical, timely, and result-oriented
      legal solutions for individuals and businesses.
    </p>
  </div>
</section>


      {/* Firm Profile */}
      <section className="py-20 italic bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
    
    {/* Image */}
    <div className="md:w-1/2 animate-fadeLeft">
      <Image
        src="/AdvocateImage.png"   // <-- apni vakil ki photo yahan daal do
        alt="Firm Profile"
        width={600}         // container ke approx width
        height={400}        // container ke approx height
        className="rounded-lg shadow-lg w-full h-72 md:h-96 contain-fill"
        priority
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2 animate-fadeRight">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Firm Profile</h2>
      <p className="text-gray-700 mb-4">
        AdvoRaLaw is a full-service law firm committed to providing expert legal guidance across multiple domains. 
        Our team of experienced lawyers ensures ethical, professional, and timely solutions for all our clients.
      </p>
      <p className="text-gray-700">
        We specialize in civil litigation, criminal defense, family & matrimonial law, corporate & commercial law, 
        property & real estate, and legal compliance advisory. Our mission is to safeguard your interests and provide 
        trusted counsel for every legal challenge.
      </p>
    </div>

  </div>
</section>


      {/* Vision & Mission */}
     <section className="bg-gray-100 py-20 italic">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 animate-fadeUp">
      Vision & Mission
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Vision Card */}
      <div
        className="bg-white rounded-xl p-8 shadow-lg 
        hover:shadow-2xl hover:-translate-y-2 hover:bg-amber-50/30
        transition-all duration-300 ease-out 
        animate-fadeUp delay-100 group"
      >
        <div
          className="text-4xl text-amber-400 mb-4 flex justify-center 
          group-hover:scale-110 transition-transform duration-300"
        >
          <FaEye />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Our Vision
        </h3>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          To be recognized as a trusted and ethical law firm delivering professional, efficient, and result-oriented legal solutions to individuals and corporations.
        </p>
      </div>

      {/* Mission Card */}
      <div
        className="bg-white rounded-xl p-8 shadow-lg 
        hover:shadow-2xl hover:-translate-y-2 hover:bg-amber-50/30
        transition-all duration-300 ease-out 
        animate-fadeUp delay-200 group"
      >
        <div
          className="text-4xl text-amber-400 mb-4 flex justify-center 
          group-hover:scale-110 transition-transform duration-300"
        >
          <FaBullseye />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Our Mission
        </h3>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          To provide expert legal guidance with integrity, protect client interests, ensure compliance, and resolve legal matters efficiently with a professional team.
        </p>
      </div>

    </div>
  </div>
</section>



      {/* Core Values / Highlights */}
      <section className="py-24 italic bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-14"
    >
      Core Values
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
      {[
        {
          title: "Integrity",
          icon: <FaBalanceScale className="text-amber-400" />,
          desc: "We maintain the highest ethical standards in all legal matters.",
        },
        {
          title: "Excellence",
          icon: <FaBullseye className="text-amber-400" />,
          desc: "Delivering top-notch legal services with professionalism.",
        },
        {
          title: "Client Focus",
          icon: <FaEye  className="text-amber-400"/>,
          desc: "Prioritizing client needs and safeguarding their interests.",
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition relative group"
        >
          {/* ICON */}
          <motion.div
            className="text-5xl text-gray-800 mb-6 flex justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            whileHover={{
              rotate: 720,
              scale: 1.2,
            }}
          >
            {item.icon}
          </motion.div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            {item.desc}
          </p>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-200/20 to-gray-400/20 opacity-0 group-hover:opacity-100 transition"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </main>
  );
}
