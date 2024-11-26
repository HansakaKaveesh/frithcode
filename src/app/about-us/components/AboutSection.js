"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
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
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-base md:text-lg leading-relaxed mb-6 text-justify">
          At FrithCode, we are a passionate team of web development experts dedicated to transforming ideas into reality. Specializing in custom website design, development, and digital solutions, we cater to businesses of all sizes. Our mission is to create cutting-edge, responsive, and scalable websites that not only look stunning but also perform flawlessly across all devices. With a focus on client satisfaction, we pride ourselves on delivering projects that meet deadlines, exceed expectations, and drive measurable results. Whether it&rsquo;s e-commerce platforms, corporate websites, or custom web applications, we are here to elevate your online presence and help your business thrive in the digital world.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" data-aos="fade-up">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Integrity</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We act with honesty and uphold the highest ethical standards.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Innovation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We embrace creativity and continuously improve to deliver cutting-edge solutions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Customer Focus</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Our clients are at the heart of everything we do, ensuring their success.
            </p>
          </div>
          {/* Card 4 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Collaboration</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We believe in teamwork and building strong partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
