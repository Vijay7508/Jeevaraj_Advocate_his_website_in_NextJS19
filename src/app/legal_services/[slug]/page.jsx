"use client";

import React from "react";
import Link from "next/link";
import {legalServices} from "@/components/Dropdown"; // adjust path if needed

export default function LegalServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Legal Services & Compliance Solutions
          </h1>
          <p className="mt-4 text-gray-200">
            Explore all legal registrations, compliance services and advisory solutions under one platform.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-10">

        {legalServices.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border"
          >
            {/* CATEGORY TITLE */}
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
              {category.title}
            </h2>

            {/* ITEMS */}
            <div className="grid md:grid-cols-2 gap-3 mt-5">
              {category.items.map((item, idx) => {
                const slug = item
                  .toLowerCase()
                  .replace(/&/g, "and")
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "");

                return (
                  <Link
                    key={idx}
                    href={`/legal-services/${slug}`}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 transition border"
                  >
                    <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                      {item}
                    </span>

                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

      </section>
    </div>
  );
}