"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative bg-blue-800 text-white dark:bg-blue-900 overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/Services/bg.jpg")',
          backgroundAttachment: "fixed", // Enable parallax effect
        }}
      ></div>

      {/* Blue Transparent Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 dark:bg-blue-950/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center px-6 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] py-24 sm:py-28 md:py-36 lg:py-60">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white dark:text-gray-100 opacity-0 animate-fadeInUp">
          Web Development Services
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-100 opacity-0 animate-fadeInUp delay-200">
          Creating modern, scalable, and user-friendly websites tailored to your needs.
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
          &gt; <span className="text-blue-100">Web Development</span>
        </p>
        
      </div>
    </div>
  );
};

export default HeroSection;
