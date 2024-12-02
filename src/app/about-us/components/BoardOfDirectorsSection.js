"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const BoardOfDirectorsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="container mx-auto py-20 px-6 md:px-12 flex flex-col items-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">Board of Directors</h2>
      <div className="transform hover:scale-105 motion-safe:animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
        {/* Director 1 */}
        <div
          className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white"
          data-aos="fade-up"
        >
          <Image
            src="/madara.png"
            alt="Madhara Wedhage, Founder & CEO"
            width={250}
            height={250}
            className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-600"
            style={{ objectFit: 'cover' }}
          />
          <h4 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Madhara Wedhage</h4>
          <p className="text-md text-gray-600 dark:text-gray-300">Founder & CEO</p>
        </div>
        {/* Director 2 */}
        
        <div
          className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white"
          data-aos="fade-up"
        >
          <Image
            src="/Director2.jpg"
            alt="Lakshima Kaushani, Director"
            width={250}
            height={250}
            className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-600"
            style={{ objectFit: 'cover' }}
          />
          <h4 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Lakshima Kaushani</h4>
          <p className="text-md text-gray-600 dark:text-gray-300">Director</p>
        </div>
        {/* Director 3 */}
        <div
          className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:bg-gray-800 dark:text-white"
          data-aos="fade-up"
        >
          <Image
            src="/Director2.jpg"
            alt="Achini, Director"
            width={250}
            height={250}
            className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-600"
            style={{ objectFit: 'cover' }}
          />
          <h4 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Achini</h4>
          <p className="text-md text-gray-600 dark:text-gray-300">Director</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BoardOfDirectorsSection;
