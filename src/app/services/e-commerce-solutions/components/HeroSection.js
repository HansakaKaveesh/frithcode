"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-blue-800 text-white dark:bg-blue-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 brightness-75"
        style={{
          backgroundImage: 'url("/Services/Ecommerce/ecommerce.jpg")',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60 dark:bg-opacity-70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-24 sm:py-28 md:py-36 lg:py-48">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white dark:text-gray-100 opacity-0 animate-fadeInUp">
          E-Commerce Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-100 opacity-0 animate-fadeInUp delay-200">
          Building seamless, scalable, and feature-rich online stores tailored to your business.
        </p>

        {/* Breadcrumb (optional) */}
        <p className="mt-4 text-sm md:text-base text-blue-200 opacity-0 animate-fadeInUp delay-400">
          <Link href="/" className="text-blue-300 hover:underline dark:text-blue-400">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/services" className="text-blue-300 hover:underline dark:text-blue-400">
            Services
          </Link>{" "}
          &gt; <span className="text-blue-100">E-Commerce Solutions</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
