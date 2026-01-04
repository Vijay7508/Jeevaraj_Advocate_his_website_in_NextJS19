import Link from "next/link";
import Image from "next/image";
import {
  FaBalanceScale,
  FaGavel,
  FaUsers,
  FaBuilding,
  FaHome,
  FaShieldAlt,
  FaBriefcase,
  FaCarCrash,
} from "react-icons/fa";
import HomePopup from "@/components/HomePopup";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeServices from "@/components/HomeServices";




export default function HomePage() {
    const practices = [
    {
      title: "Criminal Law",
      desc: "Strong defense and legal representation in criminal cases.",
      icon: <FaGavel />,
    },
    {
      title: "Matrimonial Law",
      desc: "Divorce, alimony, child custody, and family matters.",
      icon: <FaUsers />,
    },
    {
      title: "Motor Accident Claims",
      desc: "Injury compensation and accident claim cases.",
      icon: <FaCarCrash />,
    },
    {
      title: "Recovery Cases",
      desc: "Debt recovery, cheque bounce and financial disputes.",
      icon: <FaBriefcase />,
    },
    {
      title: "Labour & Industrial Law",
      desc: "Employment disputes, settlements and compensation.",
      icon: <FaBuilding />,
    },
    {
      title: "Arbitration",
      desc: "Alternative dispute resolution and arbitration services.",
      icon: <FaBalanceScale />,
    },
    {
      title: "Civil Law",
      desc: "Property, contracts and civil litigation matters.",
      icon: <FaHome />,
    },
    {
      title: "Corporate Matters",
      desc: "Corporate compliance, M&A and legal advisory.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <>
    <HomePopup/>
    <main className="bg-gray-50 min-h-screen italic">

      {/* HERO SECTION */}
    <section className="relative h-screen w-full">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/Background.png"
        alt="Law Firm Background"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-5xl text-center backdrop-blur-md bg-white/10
        border border-white/20 rounded-2xl px-10 py-12 shadow-2xl">

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
Defending What Matters in Law          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            To serve clients with integrity, clarity, and legal excellence.
          </p>

          <a
  href="https://wa.me/917888326148?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20legal%20consultation"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-8
  bg-yellow-500 text-black
  px-8 py-3 rounded-full font-semibold
  hover:bg-yellow-400 transition"
>
  Book Free Consultation
</a>


        </div>
      </div>

    </section>


      {/* FIRM OVERVIEW */}
     <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
  <div className="text-center animate-fadeUp">

    <h2 className="text-4xl md:text-3xl font-bold tracking-wide text-gray-900 mb-6">
      About  Advora<span className="text-gray-700">Law</span>
    </h2>

    <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
      At <span className="font-semibold text-gray-900">AdvoRaLaw</span>, we deliver
      comprehensive legal solutions for individuals and corporate clients.
      Our experienced legal professionals ensure
      <span className="font-medium text-gray-900"> ethical, timely,</span> and
      <span className="font-medium text-gray-900"> result-driven</span> representation
      in every matter we handle.
    </p>

  </div>
</section>


      {/* KEY PRACTICE HIGHLIGHTS */}
         {/* <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        {/* <div className="text-center mb-14 animate-fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Areas of Practice
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Professional legal services across diverse practice areas.
          </p>
        </div> */}

        {/* Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-gray-100
              bg-white p-7 shadow-sm transition-all duration-300
              hover:shadow-xl hover:-translate-y-2 animate-cardFadeUp"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* Hover Glow */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div> */}

              {/* Icon */}
              {/* <div className="relative mb-5 text-3xl text-yellow-500 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div> */}

              {/* Title */}
              {/* <h3 className="relative font-semibold text-lg text-gray-900 mb-2">
                {item.title}
              </h3> */}

              {/* Description */}
              {/* <p className="relative text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p> */}
            {/* </div> */}
          {/* ))} */}
        {/* </div> */} 
      {/* </div> */}
    {/* </section> */} 
            <HomeServices/>

    <WhyChooseUs/>






    </main>
    </>
  );
}
