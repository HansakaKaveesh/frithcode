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
    <div className="relative bg-blue-800 text-white dark:bg-blue-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-105 brightness-75"
        style={{ backgroundImage: 'url("/Aboutus.jpg")' }}
        role="img"
        aria-label="Background image showcasing About Us section"
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-950/60 to-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto min-h-[60vh] lg:min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-24">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-gray-100"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Story of FrithCode Technologies
        </h1>
        <p
          className="mt-6 text-lg md:text-xl lg:text-2xl max-w-3xl text-blue-100"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Explore our innovative web solutions for businesses across the globe.
        </p>

        {/* Breadcrumb */}
        <div
          className="mt-6 text-sm md:text-base text-blue-200"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link href="/" className="text-blue-300 hover:underline dark:text-blue-400">
            Home
          </Link>{" "}
          &gt; <span className="font-medium text-blue-100">About Us</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
