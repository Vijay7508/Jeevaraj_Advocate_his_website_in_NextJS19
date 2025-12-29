"use client";
import { FaBalanceScale, FaBullseye, FaEye } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-white py-20 italic">
        <div className="max-w-7xl mx-auto px-6 text-center animate-fadeUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gray-700 font-semibold">AdvoRaLaw</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Trusted legal professionals delivering ethical, timely, and result-oriented legal solutions for individuals and businesses.
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
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 animate-fadeUp">
            Vision & Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition animate-fadeUp delay-100">
              <div className="text-4xl text-gray-800 mb-4 flex justify-center">
                <FaEye />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700 text-sm md:text-base">
                To be recognized as a trusted and ethical law firm delivering professional, efficient, and result-oriented legal solutions to individuals and corporations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition animate-fadeUp delay-200">
              <div className="text-4xl text-gray-800 mb-4 flex justify-center">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 text-sm md:text-base">
                To provide expert legal guidance with integrity, protect client interests, ensure compliance, and resolve legal matters efficiently with a professional team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 animate-fadeUp">
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { title: "Integrity", icon: <FaBalanceScale />, desc: "We maintain the highest ethical standards in all legal matters." },
              { title: "Excellence", icon: <FaBullseye />, desc: "Delivering top-notch legal services with professionalism." },
              { title: "Client Focus", icon: <FaEye />, desc: "Prioritizing client needs and safeguarding their interests." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition animate-fadeUp" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl text-gray-800 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
