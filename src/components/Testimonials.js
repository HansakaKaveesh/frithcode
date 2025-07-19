"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; // Modern next/image
import client1 from "../../public/Men.jpg";
import client2 from "../../public/Women.jpg";
import client3 from "../../public/Men.jpg"; // Use a different image for real use

const testimonials = [
  {
    id: 1,
    name: "Sachith Gunasekara",
    role: "CEO, Tech Innovations",
    feedback:
      "FrithCode dedication exceeded our expectations. Their team navigated through challenging timelines while delivering exceptional quality. Truly partners in our success.",
    image: client1,
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Marketing Director",
    feedback:
      "A transformative experience FrithCode strategic approach boosted our online engagement by 300%. Their creativity is matched only by their technical expertise.",
    image: client2,
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Startup Founder",
    feedback:
      "FrithCode demonstrated unparalleled professionalism. Their solutions helped us secure Series A funding within 6 months.",
    image: client3,
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-quad",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section
      className="relative py-20 px-4 sm:px-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/user-people-network-circuit-board-link-connection-technology.jpg')",
        backgroundAttachment: "fixed",
      }}
      aria-label="Client Testimonials"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70 dark:from-gray-900/90 dark:via-gray-900/80 dark:to-gray-900/70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how we have helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid gap-10  md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.id}
              className="relative bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group focus-within:ring-2 focus-within:ring-blue-400"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              tabIndex={0}
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.role}`}
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 group-focus-within:opacity-30 transition-opacity duration-300 -z-10" />

              {/* Quote Icon */}
              <svg
                className="w-12 h-12 text-blue-500 opacity-20 mb-6 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>

              <figcaption className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={testimonial.image}
                    alt={`Photo of ${testimonial.name}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-300 shadow-lg"
                    sizes="80px"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-blue-500 dark:text-blue-400 mb-4">
                  {testimonial.role}
                </p>
                <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  “{testimonial.feedback}”
                </blockquote>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}