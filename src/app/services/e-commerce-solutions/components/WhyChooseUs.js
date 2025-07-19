"use client"
import { useEffect } from 'react';
import { FaUserAlt, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    icon: <FaUserAlt size={36} />,
    title: "User-Friendly",
    description: "Designing intuitive interfaces that make online shopping easy and enjoyable for your customers."
  },
  {
    icon: <FaShieldAlt size={36} />,
    title: "Secure Payments",
    description: "Ensuring safe and reliable payment gateways to protect customer data and build trust."
  },
  {
    icon: <FaHeadset size={36} />,
    title: "24/7 Support",
    description: "Providing round-the-clock assistance to keep your online store running smoothly."
  }
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-16 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      {/* Decorative SVG */}
      <svg
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-10 dark:opacity-5 pointer-events-none z-0"
        viewBox="0 0 900 900"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="450" cy="450" r="450" fill="url(#paint0_radial3)" />
        <defs>
          <radialGradient
            id="paint0_radial3"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="translate(450 450) scale(450)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#A5B4FC" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="relative max-w-6xl mx-auto z-10">
        <h2
          id="why-choose-us-heading"
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
        >
          Why Choose Us?
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <article
              key={item.title}
              tabIndex={0}
              aria-label={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative text-center bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-2xl rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-blue-400 outline-none border border-transparent"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon with animated background */}
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-300 shadow mb-6">
                <span className="text-blue-600 dark:text-blue-300">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold mt-2 text-blue-700 dark:text-blue-300">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;