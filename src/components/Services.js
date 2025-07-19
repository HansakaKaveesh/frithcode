"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />,
    title: "Custom Web Systems",
    desc: "Tailor-made web applications built with modern frameworks for optimal performance and scalability.",
    bg: "from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-900",
    iconBg: "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
    delay: 0,
  },
  {
    icon: <FaShoppingCart className="text-3xl text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />,
    title: "E-Commerce Platforms",
    desc: "Secure, scalable online stores with integrated payment solutions and inventory management.",
    bg: "from-green-100 to-emerald-100 dark:from-gray-700 dark:to-gray-900",
    iconBg: "from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30",
    delay: 200,
  },
  {
    icon: <FaSearch className="text-3xl text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />,
    title: "SEO Optimization",
    desc: "Comprehensive search engine optimization strategies to boost visibility and organic traffic.",
    bg: "from-amber-100 to-yellow-100 dark:from-gray-700 dark:to-gray-900",
    iconBg: "from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30",
    delay: 400,
  },
  {
    icon: <FaShieldAlt className="text-3xl text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />,
    title: "Advanced Security",
    desc: "Enterprise-grade security protocols and regular audits to protect your digital assets.",
    bg: "from-red-100 to-pink-100 dark:from-gray-700 dark:to-gray-900",
    iconBg: "from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30",
    delay: 600,
  },
];

const WebDevelopmentServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      style={{
        backgroundImage: `url('https://teamblume.com/wp-content/uploads/2022/05/Blume_PropTech_Business_Development_BG_17.jpg')`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
      }}
      aria-labelledby="web-services-heading"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 pointer-events-none z-0" />

      {/* Decorative SVG */}
      <svg
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-10 dark:opacity-5 pointer-events-none"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="450" cy="450" r="450" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="translate(450 450) scale(450)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#A5B4FC" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2
            id="web-services-heading"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Comprehensive Web Solutions
          </h2>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Empowering businesses with cutting-edge digital solutions that drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl dark:shadow-gray-900/20 border border-transparent hover:border-blue-400/40 focus-within:border-blue-500 outline-none`}
              data-aos="zoom-in"
              data-aos-delay={service.delay}
              tabIndex={0}
              aria-label={service.title}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 rounded-2xl`}
              ></div>
              <div className="relative">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-16 flex justify-center" data-aos="fade-up" data-aos-delay="800">
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;