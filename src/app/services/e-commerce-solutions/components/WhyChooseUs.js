"use client"
import { useEffect } from 'react';
import { FaUserAlt, FaShieldAlt, FaHeadset } from 'react-icons/fa'; // Import the icons from react-icons
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const WhyChooseUs = () => {
  const features = [
    { icon: <FaUserAlt size={40} />, title: "User-Friendly", description: "Designing intuitive interfaces that make online shopping easy and enjoyable for your customers." },
    { icon: <FaShieldAlt size={40} />, title: "Secure Payments", description: "Ensuring safe and reliable payment gateways to protect customer data and build trust." },
    { icon: <FaHeadset size={40} />, title: "24/7 Support", description: "Providing round-the-clock assistance to keep your online store running smoothly." }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // This ensures the animation happens only once when scrolling to the element
    });
  }, []);

  return (
    <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-400 mb-12">Why Choose Us?</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up" // Adding animation on scroll
            className="text-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow rounded-lg p-8 transform hover:scale-105"
          >
            <div className="text-blue-600 dark:text-blue-300 mx-auto">
              {item.icon} {/* Display the icon */}
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
