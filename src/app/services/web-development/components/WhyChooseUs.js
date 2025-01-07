// src/components/WhyChooseUs.js
"use client"
import { useEffect } from 'react';
import { FaPaintBrush, FaShieldAlt, FaHeadset } from 'react-icons/fa'; // Importing the icons
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing effect
      once: true, // Animation happens only once
    });
  }, []);

  const features = [
    { icon: <FaPaintBrush size={40} />, title: "Custom Design", description: "Tailored website designs that reflect your unique brand and goals, making your online presence truly stand out." },
    { icon: <FaShieldAlt size={40} />, title: "Secure & Fast", description: "Our websites are highly optimized, secure, and provide a seamless user experience, ensuring both speed and safety." },
    { icon: <FaHeadset size={40} />, title: "Ongoing Support", description: "We provide reliable support to ensure your website remains up-to-date and performs optimally at all times." }
  ];

  return (
    <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-400 mb-12">Why Choose Us?</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up" // Add the fade-up animation
            data-aos-delay={`${index * 200}`} // Stagger animation based on the index
            className="text-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow rounded-lg p-8 transform hover:scale-105"
          >
            <div className="text-blue-600 dark:text-blue-300 mx-auto">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold mt-6 text-blue-600 dark:text-blue-300">{item.title}</h3>
            <p className="mt-4 text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
