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
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      
      <div className="animate-logoScale">
        <Image
          src="/Logo.jpeg"   // apna logo
          alt="Logo"
          width={160}
          height={160}
          priority
        />
      </div>

    </div>
  );
}
