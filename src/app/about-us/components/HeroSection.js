"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center bg-blue-950 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/glasses-lie-laptop-reflecting-light-from-screen-dark.jpg')] bg-cover bg-center opacity-70 mt-12 "
        aria-label="About Us background"
        
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
            Discover the <span className="text-blue-300">FrithCode</span> Story
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            We build innovative web solutions for businesses worldwide. Let’s create something amazing together.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;