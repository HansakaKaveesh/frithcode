"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebDevelopmentServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      offset: 100, // Offset for triggering animations
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <section className="py-16 px-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl font-bold text-gray-800 mb-8 dark:text-gray-200 sm:text-5xl md:text-3xl"
          data-aos="fade-up"
        >
          Our Web Development Services
        </h2>
        <p
          className="text-lg text-gray-600 mb-12 dark:text-gray-400 sm:text-xl md:text-1xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We offer a range of web development services to help your business grow online.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div
            className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 dark:bg-gray-700 dark:text-gray-200"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-100 sm:text-3xl">
              Web based systems
            </h3>
            <p className="text-gray-600 dark:text-gray-400 sm:text-lg">
              We create responsive and user-friendly web designs tailored to your brand and needs.
            </p>
          </div>
          {/* Service 2 */}
          <div
            className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 dark:bg-gray-700 dark:text-gray-200"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-100 sm:text-3xl">
              E-Commerce Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 sm:text-lg">
              We build secure and scalable e-commerce platforms for businesses of all sizes.
            </p>
          </div>
          {/* Service 3 */}
          <div
            className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 dark:bg-gray-700 dark:text-gray-200"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-100 sm:text-3xl">
              SEO Optimization
            </h3>
            <p className="text-gray-600 dark:text-gray-400 sm:text-lg">
              We optimize your website to rank higher in search engines and drive more traffic.
            </p>
          </div>
          {/* Service 4 */}
          <div
            className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 dark:bg-gray-700 dark:text-gray-200"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 dark:text-gray-100 sm:text-3xl">
              Data Security
            </h3>
            <p className="text-gray-600 dark:text-gray-400 sm:text-lg">
              We build secure and scalable e-commerce platforms for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;
