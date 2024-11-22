"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisionMissionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing type
      once: true, // Ensures the animation happens once
      offset: 100, // Scroll offset to trigger animation earlier or later
    });
  }, []);

  return (
    <div className="bg-gray-50 py-16 md:py-20 dark:bg-gray-800" >
      <div className="container mx-auto max-w-full sm:max-w-md lg:max-w-3xl xl:max-w-4xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 text-center">
          {/* Vision */}
          <div className="transform hover:scale-105 motion-safe:animate-fadeIn">
          <div
            className="bg-white shadow-lg p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 dark:bg-gray-700 dark:text-white"
            data-aos="zoom-in"
          >
            <h3 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">Our Vision</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed dark:text-gray-300">
              Our vision is to operate as a worldwide web solution provider through 100% 
              customer satisfaction while providing creative, unique, and effective websites.
            </p>
          </div>
          </div>

          {/* Mission */}
          <div className="transform hover:scale-105 motion-safe:animate-fadeIn">
          <div
            className="bg-white shadow-lg p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 dark:bg-gray-700 dark:text-white"
            data-aos="zoom-in"
          >
            <h3 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">Our Mission</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed dark:text-gray-300">
              Our mission is to furnish the best web solution to customers by conceptualizing 
              their ideas and transforming them into the latest web designing technology.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
