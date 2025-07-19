"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Example client logos (replace with your own images or project screenshots)
const clients = [
  {
    name: "Glorious fabric pvt ltd",
    logo: "/clients/Glorious.png", // Place your logo in public/clients/
    url: "https://gloriousfabric.lk/"
  },
  {
    name: "SynapZ",
    logo: "/clients/synapz-logo.png",
    url: "https://synapz.com"
  },
  {
    name: "Heama Chemicals",
    logo: "/clients/Heama.png",
    url: "https://heama-chemicals.vercel.app/"
  },
  {
    name: "Lala Studio",
    logo: "/clients/LALA LOGO AW FINAL.png",
    url: "https://lala-studio.vercel.app/"
  },

];

const ClientWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      aria-labelledby="client-works-heading"
    >
      {/* Decorative SVG */}
      <svg
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-10 dark:opacity-5 pointer-events-none z-0"
        viewBox="0 0 900 900"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="450" cy="450" r="450" fill="url(#paint0_radial_clients)" />
        <defs>
          <radialGradient
            id="paint0_radial_clients"
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
          id="client-works-heading"
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
        >
          Our Clients
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          We’re proud to have worked with these amazing brands and organizations.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, idx) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={client.name}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group flex flex-col items-center justify-center p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <img
                src={client.logo}
                alt={client.name + " logo"}
                className="h-16 w-auto object-contain mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWorks;