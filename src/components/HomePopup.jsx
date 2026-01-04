"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePopup() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // auto close after animation
    const timer = setTimeout(() => {
      setShow(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gray-900 flex items-center justify-center">
      
      <div className="animate-logoScale flex flex-col items-center text-center">
  <span
    className="text-4xl md:text-5xl text-white font-medium"
    style={{ fontFamily: "var(--font-playfair)" }}
  >
    AdvoraLaw
  </span>

  <span className="mt-1 text-amber-400 text-xs md:text-sm italic font-medium">
    ADVOCATES & LEGAL CONSULTANTS
  </span>
</div>


    </div>
  );
}
