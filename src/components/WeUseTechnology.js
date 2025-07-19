"use client"
import { useEffect } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiPhp, SiMysql } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const technologies = [
  { name: "React", icon: <FaReact size={40} className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-gray-900 dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-700" /> },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "PHP", icon: <SiPhp size={40} className="text-indigo-700 dark:text-indigo-400" /> },
  { name: "SQL", icon: <SiMysql size={40} className="text-yellow-600 dark:text-yellow-400" /> },
];

const WeUseTechnology = () => {
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
      aria-labelledby="we-use-technology-heading"
    >
      {/* Decorative SVG */}
      <svg
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] opacity-10 dark:opacity-5 pointer-events-none z-0"
        viewBox="0 0 900 900"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="450" cy="450" r="450" fill="url(#paint0_radial_tech)" />
        <defs>
          <radialGradient
            id="paint0_radial_tech"
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
          id="we-use-technology-heading"
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
        >
          We Use Technology
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          We leverage the latest technologies and frameworks to deliver robust, scalable, and high-performance solutions.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 items-center justify-center">
          {technologies.map((tech, idx) => (
            <div
              key={tech.name}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="group flex flex-col items-center justify-center p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              tabIndex={0}
              aria-label={tech.name}
            >
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeUseTechnology;