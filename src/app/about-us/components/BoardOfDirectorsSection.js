"use client";
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
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">Board of Directors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
        {/* Director 1 */}
        <div
          className="text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-600"
          data-aos="fade-up"
        >
          <Image
            src="/madara.png"
            alt="Madhara Wedhage, Founder & CEO"
            width={250}
            height={250}
            className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-600 transition-all duration-300 transform hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
          <h4 className="mt-4 text-3xl font-bold text-gray-100">Madhara Wedhage</h4>
          <p className="text-lg text-gray-100">Founder & CEO</p>
        </div>
        {/* Director 2 */}
        <div
          className="text-center bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-600"
          data-aos="fade-up"
        >
          <Image
            src="/BC.jpg"
            alt="Lakshima Kaushani, Director"
            width={250}
            height={250}
            className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-600 transition-all duration-300 transform hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
          <h4 className="mt-4 text-3xl font-bold text-gray-100">Lakshima Kaushani</h4>
          <p className="text-lg text-gray-100">Director</p>
        </div>
        {/* Director 3 */}
        <div
          className="text-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-600"
          data-aos="fade-up"
        >
          <Image
            src="/Achini.jpg"
            alt="Achini, Director"
            width={250}
            height={250}
            className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-600 transition-all duration-300 transform hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
          <h4 className="mt-4 text-3xl font-bold text-gray-100">Achini</h4>
          <p className="text-lg text-gray-100">Director</p>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectorsSection;
