// src/components/WhyChooseUs.js
"use client"
import { useEffect } from 'react';
import { FaPaintBrush, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const features = [
    { 
      icon: <FaPaintBrush className="text-blue-600 dark:text-blue-400" size={40} />, 
      title: "Custom Design", 
      description: "Tailored website designs that reflect your unique brand and goals, making your online presence truly stand out." 
    },
    { 
      icon: <FaShieldAlt className="text-blue-600 dark:text-blue-400" size={40} />, 
      title: "Secure & Fast", 
      description: "Our websites are highly optimized, secure, and provide a seamless user experience, ensuring both speed and safety." 
    },
    { 
      icon: <FaHeadset className="text-blue-600 dark:text-blue-400" size={40} />, 
      title: "Ongoing Support", 
      description: "We provide reliable support to ensure your website remains up-to-date and performs optimally at all times." 
    }
  ];

  return (
    <section className="relative py-20 px-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-900 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-900/20" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl dark:bg-purple-900/20" />

      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-5xl font-bold text-center mb-16 relative"
          data-aos="zoom-in"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Why Choose Us?
          </span>
          <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 -translate-x-1/2 rounded-full dark:from-blue-400 dark:to-purple-400" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl dark:shadow-gray-900/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              {/* Updated icon container */}
              <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-2xl mb-6 transition-all duration-300 group-hover:rotate-6 dark:bg-gray-700">
                <span className="text-blue-600 dark:text-blue-400">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 dark:from-blue-400 dark:to-purple-400">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                {item.description}
              </p>

              <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-3/4 group-hover:-translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;