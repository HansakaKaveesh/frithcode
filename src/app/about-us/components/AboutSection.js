"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FiUsers, FiTrendingUp, FiTarget, FiHeart } from "react-icons/fi";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quad",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-4">
            About FrithCode Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pioneering digital excellence through innovative web solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Image Section */}
          <div 
            className="relative h-96 rounded-2xl overflow-hidden group"
            data-aos="fade-right"
          >
            <Image
              src="/Analytic.jpg"
              alt="Analytics"
              fill
              className="object-cover transform transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60">
              <h3 className="text-xl font-semibold text-white">
                Driving Digital Transformation
              </h3>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6" data-aos="fade-left">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At <span className="font-semibold text-blue-600 dark:text-blue-400">FrithCode</span>, 
              we combine technical expertise with creative vision to deliver exceptional 
              web solutions. Our team of seasoned developers and designers specializes in 
              crafting <span className="text-cyan-600 dark:text-cyan-400">responsive</span>, 
              {" "}<span className="text-cyan-600 dark:text-cyan-400">scalable</span>, and 
              {" "}<span className="text-cyan-600 dark:text-cyan-400">high-performance</span> 
              {" "}digital experiences that drive business growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              From sleek corporate websites to complex e-commerce platforms, we blend 
              cutting-edge technologies with user-centric design to create digital 
              solutions that <span className="italic">engage</span>, {" "}
              <span className="italic">convert</span>, and {" "}
              <span className="italic">inspire</span>.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: FiUsers, number: "200+", label: "Happy Clients" },
            { icon: FiTrendingUp, number: "98%", label: "Success Rate" },
            { icon: FiTarget, number: "150+", label: "Projects Completed" },
            { icon: FiHeart, number: "5★", label: "Customer Rating" },
          ].map((item, index) => (
            <div 
              key={index}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <item.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {item.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
            Our Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity First",
                content: "Uncompromising ethics in every interaction",
                color: "bg-blue-100 dark:bg-blue-900/50",
              },
              {
                title: "Innovation Driven",
                content: "Pushing boundaries of digital possibilities",
                color: "bg-cyan-100 dark:bg-cyan-900/50",
              },
              {
                title: "Client Centric",
                content: "Your success is our ultimate metric",
                color: "bg-indigo-100 dark:bg-indigo-900/50",
              },
              {
                title: "Collaborative Spirit",
                content: "Building partnerships, not just projects",
                color: "bg-purple-100 dark:bg-purple-900/50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${item.color} transition-transform hover:scale-105 duration-300`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-2xl mb-4 text-blue-600 dark:text-blue-400">
                  {index + 1}.
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;