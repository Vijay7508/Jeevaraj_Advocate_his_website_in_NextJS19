"use client";

import { useEffect, useState } from "react";

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("bci_disclaimer");
    if (!accepted) {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("bci_disclaimer", "true");
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleDisagree = () => {
    window.location.href = "https://www.google.com";
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 italic">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-6 md:p-8">
        
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
          Disclaimer – Bar Council of India Compliance
        </h2>

        {/* SCROLL AREA */}
        <div className="text-sm md:text-[15px] text-gray-600 leading-relaxed
                        space-y-3 max-h-[55vh] overflow-y-auto pr-3
                        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

          <p>
            As per the rules of the Bar Council of India, law firms and advocates
            are not permitted to solicit work or advertise in any manner. By
            clicking on <span className="font-semibold text-gray-700">“I Agree”</span>,
            the user confirms the following:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              There has been <b>no advertisement, personal communication, solicitation, invitation, 
              or inducement</b> of any sort whatsoever from <b>Sagestone Law firm</b> or any of its members 
              to solicit any work or advertise through this website.
            </li>
            <li>
             All material and information (excluding statutory instruments or judicial precedents) presented 
             on this website is the <b>exclusive property of Sagestone Law firm.</b> No part of it may be copied, used, 
             or adapted, with or without modification, without prior written consent from the firm or relevant authority.
            </li>
            <li>
             The user wishes to access this website solely for their own personal use and informational purposes.
            </li>
            <li>
              The content provided on this website has been made available only upon a
               specific request by the user, and <b>should not be interpreted as legal advice, 
               solicitation, or advertisement.</b>

            </li>
            <li>
              Sagestone Law firm does not assume any liability for the interpretation and/or use of the information contained on this website, 
              nor does it offer any warranty (express or implied) regarding the accuracy or completeness of the same.
            </li>
            <li>
              Nothing on this website constitutes legal advice or should be construed as a substitute for professional legal counsel.

            </li>
            <li>
              This website is a resource for general information only and, while efforts are made to keep it updated,
               <b> Sagestone Law firm does not guarantee</b> the accuracy, completeness, or timeliness of the content.

            </li>
          </ul>

          <p className="text-center font-medium text-gray-700 pt-2">
            Your Justice. Our Passion. <br />
            Trusted Legal Advisors Serving You With Expertise & Integrity.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handleAgree}
            className="flex-1 bg-black text-white py-3 rounded-xl font-semibold
                       hover:bg-gray-800 active:scale-95 transition-all duration-200 italic"
          >
            I Agree
          </button>

          <button
            onClick={handleDisagree}
            className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl
                       hover:bg-gray-100 active:scale-95 transition-all duration-200 italic"
          >
            I Disagree
          </button>
        </div>
      </div>
    </div>
  );
}
