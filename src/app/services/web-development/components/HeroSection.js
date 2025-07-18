"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WebDevServicesHeroSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center bg-blue-950 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/web-development_0.jpg')] bg-cover bg-center opacity-70 mt-12"
        aria-label="Web Development Services background"
        
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:items-start mt-12">
        <div
          className="w-full md:w-2/3 lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Web Development <span className="text-blue-300">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Empower your business with cutting-edge web solutions. From responsive websites to robust web applications, we deliver quality, performance, and innovation.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-block bg-white/20 hover:bg-white/30 text-blue-100 font-semibold px-6 py-3 rounded-lg shadow transition border border-blue-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevServicesHeroSection;