// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// const sitemapData = [
//   {
//     title: "Main Pages",
//     links: [
//       { name: "Home", href: "/" },
//       { name: "About Us", href: "/about" },
//       { name: "Contact Us", href: "/contact" },
//       { name: "Client Resources", href: "/client_resources"},
//     ],
//   },
//   {
//     title: "Practice Areas",
//     links: [
//       { name: "Civil Litigation", href: "/practice-areas/civil-litigation" },
//       { name: "Criminal Law", href: "/practice-areas/criminal-law" },
//       { name: "Family Law", href: "/practice-areas/family-law" },
//       { name: "Property Disputes", href: "/practice-areas/property-disputes" },
//     ],
//   },
//   {
//     title: "Legal Services",
//     links: [
//       { name: "Legal Consultation", href: "/legal-services/legal-consultation" },
//       { name: "Documentation", href: "/legal-services/documentation" },
//       { name: "Corporate Law", href: "/legal-services/corporate-law" },
//       { name: "Cyber Crime", href: "/legal-services/cyber-crime" },
//     ],
//   },
// ];

// export default function Sitemap() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-20 px-4">
      
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-16"
//       >
//         <motion.h1
//           animate={{
//             textShadow: [
//               "0px 0px 10px rgba(251,191,36,.3)",
//               "0px 0px 25px rgba(251,191,36,.8)",
//               "0px 0px 10px rgba(251,191,36,.3)",
//             ],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//           }}
//           className="text-4xl md:text-6xl font-bold text-amber-400"
//         >
//           Website Sitemap
//         </motion.h1>

//         <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
//           Explore all pages and legal services available on AdvoraLaw.
//         </p>
//       </motion.div>

//       {/* Cards */}
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         {sitemapData.map((section, index) => (
//           <motion.div
//             key={section.title}
//             initial={{ opacity: 0, y: 70 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: index * 0.2,
//               duration: 0.6,
//             }}
//             whileHover={{
//               y: -10,
//               scale: 1.02,
//             }}
//             className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-7 shadow-2xl"
//           >
//             <h2 className="text-2xl font-bold text-amber-400 mb-6">
//               {section.title}
//             </h2>

//             <ul className="space-y-4">
//               {section.links.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="group flex items-center justify-between text-gray-300 hover:text-amber-400 transition-all duration-300"
//                   >
//                     <span>{link.name}</span>

//                     <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
//                       →
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom Animation */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="text-center mt-20"
//       >
//         <p className="text-gray-500">
//           © 2026 AdvoraLaw | Advocates & Legal Consultants
//         </p>
//       </motion.div>
//     </section>
//   );
// }