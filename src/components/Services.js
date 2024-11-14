'use client';
import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-8 md:px-10 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Web Development Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto mb-12">
          We provide innovative and custom web solutions to meet your business needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 sm:text-3xl dark:text-gray-100">
              Custom Web Design
            </h3>
            <p className="text-gray-600 sm:text-lg dark:text-gray-400">
              Tailored web design services to give your business a unique online presence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 sm:text-3xl dark:text-gray-100">
              E-Commerce Solutions
            </h3>
            <p className="text-gray-600 sm:text-lg dark:text-gray-400">
              Build your online store with intuitive design and seamless user experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 sm:text-3xl dark:text-gray-100">
              SEO Optimization
            </h3>
            <p className="text-gray-600 sm:text-lg dark:text-gray-400">
              Increase your website's visibility and ranking on search engines.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 sm:text-3xl dark:text-gray-100">
              Web App Development
            </h3>
            <p className="text-gray-600 sm:text-lg dark:text-gray-400">
              Custom web applications built for performance and scalability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 sm:text-3xl dark:text-gray-100">
              UX/UI Design
            </h3>
            <p className="text-gray-600 sm:text-lg dark:text-gray-400">
              Create engaging and intuitive user interfaces for your web applications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-700 dark:text-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 sm:text-3xl dark:text-gray-100">
              Mobile-Friendly Websites
            </h3>
            <p className="text-gray-600 sm:text-lg dark:text-gray-400">
              Ensure your website looks great and functions smoothly on all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
