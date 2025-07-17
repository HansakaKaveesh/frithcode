"use client";
import Link from "next/link";

export default function HeroSection({ title, breadcrumb }) {
  return (
    <div className="relative bg-blue-800 text-white dark:bg-blue-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 brightness-75"
        style={{
          backgroundImage: 'url("/Aboutus.jpg")',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/60 dark:bg-blue-950/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-24 sm:py-28 md:py-36 lg:py-48">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-gray-100 opacity-0 animate-fadeInUp">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100 opacity-0 animate-fadeInUp delay-200">
          Feel free to reach out with any inquiries or feedback.
        </p>

        {/* Breadcrumb */}
        {breadcrumb && (
          <p className="mt-4 text-sm sm:text-base text-blue-200 opacity-0 animate-fadeInUp delay-400">
            <Link href="/" className="text-blue-300 hover:underline dark:text-blue-400">
              Home
            </Link>{" "}
            &gt; <span>{breadcrumb}</span>
          </p>
        )}
      </div>
    </div>
  );
}
