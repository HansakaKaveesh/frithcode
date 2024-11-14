// src/components/WebDevelopmentServices.js
import React from 'react';

const WebDevelopmentServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Web Development Services</h2>
        <p className="text-lg text-gray-600 mb-12">We offer a range of web development services to help your business grow online.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom Web Design</h3>
            <p className="text-gray-600">We create responsive and user-friendly web designs tailored to your brand and needs.</p>
          </div>
          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-Commerce Solutions</h3>
            <p className="text-gray-600">We build secure and scalable e-commerce platforms for businesses of all sizes.</p>
          </div>
          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">SEO Optimization</h3>
            <p className="text-gray-600">We optimize your website to rank higher in search engines and drive more traffic.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;
