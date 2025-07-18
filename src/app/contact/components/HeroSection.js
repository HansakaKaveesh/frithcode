"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactHeroSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center bg-blue-950 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/woman-using-her-smartphone-while-home.jpg')] bg-cover bg-center opacity-70 "
        aria-label="Contact Us background"
   
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
            Get in <span className="text-blue-300">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Have a project in mind or want to collaborate? Reach out and let’s build something great together.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact-form"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Contact Form
            </a>
            <Link
              href="/"
              className="inline-block bg-white/20 hover:bg-white/30 text-blue-100 font-semibold px-6 py-3 rounded-lg shadow transition border border-blue-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;