import {
  FaUserShield,
  FaBriefcase,
  FaThumbsUp,
  FaBalanceScale,
} from "react-icons/fa";
import Head from "next/head";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Client-Focused Approach",
      desc: "We listen, we understand, and we fight with your best interest in mind — always.",
      icon: <FaUserShield />,
    },
    {
      title: "Decades of Experience",
      desc: "Backed by years of legal expertise across multiple jurisdictions and courts.",
      icon: <FaBriefcase />,
    },
    {
      title: "High Success Rate",
      desc: "Our record speaks for itself — hundreds of successful case resolutions.",
      icon: <FaThumbsUp />,
    },
    {
      title: "Ethical Representation",
      desc: "Transparent, honest, and dedicated to upholding justice above all.",
      icon: <FaBalanceScale />,
    },
  ];

  return (
    <>
    <Head>
  <title>
    Why Choose AdvoraLaw | Experienced & Trusted Legal Experts
  </title>

  <meta
    name="description"
    content="Choose AdvoraLaw for trusted legal services backed by years of experience, ethical representation, client-focused approach and successful case resolutions in Chandigarh, Mohali and Punjab."
  />

  <meta
    name="keywords"
    content="
    Why Choose AdvoraLaw,
    Trusted Legal Experts,
    Experienced Advocate Chandigarh,
    Best Lawyer Mohali,
    Client Focused Legal Services,
    Ethical Legal Representation,
    High Success Rate Lawyer,
    Professional Advocate Services,
    Legal Experts Punjab,
    Trusted Advocate Chandigarh,
    Experienced Court Lawyer,
    Criminal Lawyer Chandigarh,
    Civil Lawyer Mohali,
    Family Lawyer Punjab,
    Property Lawyer Chandigarh,
    Corporate Lawyer Mohali,
    Legal Consultation Punjab,
    Best Legal Consultant,
    Reliable Lawyer Chandigarh,
    Advocates and Legal Consultants
    "
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="AdvoraLaw" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Why Choose AdvoraLaw | Trusted Legal Experts"
  />

  <meta
    property="og:description"
    content="AdvoraLaw offers experienced legal representation, ethical advocacy, client-focused solutions and successful legal services."
  />

  <meta property="og:type" content="website" />

  {/* Mobile Responsive */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://www.advoralaw.com" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>
   
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 animate-fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose AdvoraLaw?
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We are more than just legal experts — we are advocates for your
            rights, your peace, and your future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-xl bg-white border border-gray-100 p-8 text-center
              transition-all duration-300 hover:translate-y-2 animate-cardFadeUp "
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* Icon */}
              <div
  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center
  rounded-full bg-yellow-100 text-yellow-500 text-2xl
  transition-transform duration-500 ease-in-out
  group-hover:scale-110 group-hover:rotate-[360deg]"
>
  {item.icon}
</div>


              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
     </>
  );
};

export default WhyChooseUs;
