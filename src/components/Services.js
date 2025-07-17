"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaShoppingCart, FaSearch, FaShieldAlt } from "react-icons/fa";

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
        backgroundImage: `url('https://teamblume.com/wp-content/uploads/2022/05/Blume_PropTech_Business_Development_BG_17.jpg')`, // <-- Replace with your image path
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2
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
            Empowering businesses with cutting-edge digital solutions that drive growth and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div
            className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl dark:shadow-gray-900/20"
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl dark:from-gray-700 dark:to-gray-900"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 dark:from-blue-900/30 dark:to-blue-800/30">
                <FaLaptopCode className="text-3xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-100">
                Custom Web Systems
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Tailor-made web applications built with modern frameworks for optimal performance and scalability
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl dark:shadow-gray-900/20"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl dark:from-gray-700 dark:to-gray-900"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 dark:from-green-900/30 dark:to-green-800/30">
                <FaShoppingCart className="text-3xl text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-100">
                E-Commerce Platforms
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Secure, scalable online stores with integrated payment solutions and inventory management
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl dark:shadow-gray-900/20"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl dark:from-gray-700 dark:to-gray-900"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 dark:from-amber-900/30 dark:to-amber-800/30">
                <FaSearch className="text-3xl text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-100">
                SEO Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Comprehensive search engine optimization strategies to boost visibility and organic traffic
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div
            className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl dark:shadow-gray-900/20"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl dark:from-gray-700 dark:to-gray-900"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 dark:from-red-900/30 dark:to-red-800/30">
                <FaShieldAlt className="text-3xl text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-100">
                Advanced Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Enterprise-grade security protocols and regular audits to protect your digital assets
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200 to-purple-200 opacity-10 dark:opacity-5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;