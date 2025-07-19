"use client";
import { useEffect } from "react";
import { FiShoppingCart, FiCreditCard, FiTrendingUp } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const ecommerceServices = [
  {
    title: "Custom Online Stores",
    description:
      "Design tailored e-commerce websites with unique features to meet your business needs and attract more customers.",
    icon: <FiShoppingCart className="w-8 h-8" />,
    aosDelay: 0,
  },
  {
    title: "Seamless Integrations",
    description:
      "Integrate payment gateways, shipping solutions, and third-party tools for a smooth e-commerce experience.",
    icon: <FiCreditCard className="w-8 h-8" />,
    aosDelay: 150,
  },
  {
    title: "Scalable Solutions",
    description:
      "Build scalable e-commerce platforms that grow with your business, ensuring long-term success.",
    icon: <FiTrendingUp className="w-8 h-8" />,
    aosDelay: 300,
  },
];

const EcommerceSolutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-20 px-4 sm:px-8 overflow-hidden"
      aria-labelledby="ecommerce-solutions-heading"
      style={{
        backgroundImage: `url('https://thumbs.dreamstime.com/b/digital-shopping-cart-keyboard-e-commerce-icons-glowing-technology-background-digital-shopping-cart-keyboard-e-373822163.jpg')`, // Change to your preferred image
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 pointer-events-none z-0" />

      {/* Decorative SVG */}
      <svg
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-10 dark:opacity-5 pointer-events-none z-0"
        viewBox="0 0 900 900"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="450" cy="450" r="450" fill="url(#paint0_radial2)" />
        <defs>
          <radialGradient
            id="paint0_radial2"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          id="ecommerce-solutions-heading"
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Our E-Commerce Solutions
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecommerceServices.map((service, idx) => (
            <article
              key={service.title}
              tabIndex={0}
              aria-label={service.title}
              className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl border border-transparent focus-within:border-blue-500 outline-none"
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon container */}
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-blue-50 dark:bg-gray-700 rounded-2xl transition-all duration-300 group-hover:scale-110 group-focus-within:scale-110">
                <span className="text-blue-600 dark:text-blue-400">
                  {service.icon}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center" data-aos="fade-up" data-aos-delay="500">
          <a
            href="/quotation"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolutions;