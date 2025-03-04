"use client";
import { useEffect } from 'react';
import { FiGlobe, FiTarget } from 'react-icons/fi';
import { FaWandSparkles } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisionMissionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl dark:bg-blue-900/50"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl dark:bg-cyan-900/50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-4">
            Our Guiding Principles
          </h2>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div 
            className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 rounded-3xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-2xl">
                  <FiGlobe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Global Vision
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To pioneer as a worldwide digital solutions leader through 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> 100% client satisfaction</span>, 
                delivering innovative web experiences that transcend boundaries and 
                set new industry standards.
              </p>
              <div className="mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400">
                Worldwide Impact → Client Success → Continuous Innovation
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div 
            className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent dark:from-cyan-900/20 rounded-3xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-cyan-100 dark:bg-cyan-900/50 rounded-2xl">
                  <FiTarget className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Core Mission
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To transform client visions into cutting-edge digital realities through 
                <span className="font-semibold text-cyan-600 dark:text-cyan-400"> bespoke web solutions</span>, 
                leveraging the latest technologies to create platforms that drive growth, 
                engagement, and measurable success.
              </p>
              <div className="mt-6 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                Idea Transformation → Technology Excellence → Results-Driven
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default VisionMissionSection;