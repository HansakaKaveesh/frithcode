// src/components/OurServices.js
"use client"
import { useEffect } from "react";
import { FiCode, FiServer, FiShoppingCart } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const services = [
    { 
      title: "Front-End Development", 
      description: "Create interactive and responsive interfaces using modern frameworks like React and Next.js, ensuring your website stands out.",
      icon: <FiCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    { 
      title: "Back-End Development", 
      description: "Build scalable and robust server-side logic for seamless data handling, ensuring your website functions optimally.",
      icon: <FiServer className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    { 
      title: "E-Commerce Solutions", 
      description: "We design custom online stores to enhance your e-commerce experience and boost sales with user-friendly features.",
      icon: <FiShoppingCart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <section className="relative py-20 px-8 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Our Web Development Services
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
            >
              {/* Icon container */}
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-blue-50 rounded-2xl transition-all duration-300 dark:bg-gray-700">
                <span className="text-blue-600 dark:text-blue-400">
                  {service.icon}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;