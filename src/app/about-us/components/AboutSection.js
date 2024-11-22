"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing type
      once: true, // Ensures the animation happens once
      offset: 100, // Scroll offset to trigger animation earlier or later
    });
  }, []);

  return (
    <div className="container mx-auto py-12 px-6" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
        About FrithCode Technologies
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image Section */}
        <div
          className="relative h-full w-full overflow-hidden rounded-lg shadow-md"
          data-aos="zoom-in"
        >
          <Image
            src="/Analytic.jpg"
            alt="Analytics"
            width={500}
            height={300}
            className="h-full w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div
          className="text-gray-700 dark:text-gray-300"
          data-aos="fade-up" data-aos-delay="300"
        >
          <p className="text-base md:text-lg leading-relaxed mb-6">
            We are an award-winning, multi-disciplinary web designing/development, digital,
            and social media marketing agency in Sri Lanka. We integrate creativity,
            proven marketing strategies, and cutting-edge technologies to deliver powerful
            results that drive the growth of brands.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Interested in partnering with us? We’d love to hear from you! Say hello to get
            to know what we can do for your brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
