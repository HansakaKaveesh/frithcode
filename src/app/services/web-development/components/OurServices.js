// src/components/OurServices.js
"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing effect
      once: true, // Animation happens once
    });
  }, []);

  const services = [
    { title: "Front-End Development", description: "Create interactive and responsive interfaces using modern frameworks like React and Next.js, ensuring your website stands out." },
    { title: "Back-End Development", description: "Build scalable and robust server-side logic for seamless data handling, ensuring your website functions optimally." },
    { title: "E-Commerce Solutions", description: "We design custom online stores to enhance your e-commerce experience and boost sales with user-friendly features." }
  ];

  return (
    <section className="bg-gray-100 py-16 px-8 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-400 mb-12">Our Web Development Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up" // Add the fade-up animation
            data-aos-delay={`${index * 200}`} // Stagger animation based on index
            className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl rounded-lg p-8 transform hover:scale-105 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-300">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
