"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const QuotationHeroSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center bg-blue-950 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/cyber-attack-with-unrecognizable-hooded-hacker-using-virtual-reality-digital-glitch-effect.jpg')] bg-cover bg-center opacity-70 mt-12"
        aria-label="Quotation background"
        
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:items-start">
        <div
          className="w-full md:w-2/3 lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Request a <span className="text-blue-300">Quotation</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Interested in our services? Get a personalized quote tailored to your business needs. Fast, transparent, and commitment-free.
          </p>
          <div className="flex gap-4">
            <a
              href="#quotation-form"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Get a Quote
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white/20 hover:bg-white/30 text-blue-100 font-semibold px-6 py-3 rounded-lg shadow transition border border-blue-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationHeroSection;