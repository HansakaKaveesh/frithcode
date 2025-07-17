"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { FiLinkedin } from 'react-icons/fi';

const BoardOfDirectorsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
      offset: 100,
    });
  }, []);

  const members = [
    {
      name: "Madhara Wedhage",
      role: "Founder & CEO",
      image: "/madara.png",
      social: {
        linkedin: "https://www.linkedin.com/in/madhara-wedhage-741114334/",
      }
    },
    {
      name: "Hansaka Wijesinghe",
      role: "Chief Technical Officer",
      image: "/Hansaka.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/hansaka-wijesinghe-285748142/",
      }
    },

    {
      name: "Sanduni Wathsalya",
      role: "Senior Software Engineer",
      image: "/Sanduni.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/sanduni-wathsalya-34aab92ba/",
      }
    },
    // Add more members as needed
  ];

  return (
    <div className="relative bg-gradient-to-b from-blue-50/30 to-white dark:from-gray-900 dark:to-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-16">
          Leadership Team
        </h2>

        {/* Center the grid as a group */}
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {members.map((member, index) => (
              <div 
                key={index}
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 rounded-3xl" />
                <div className="relative">
                  {/* Image Container */}
                  <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl group-hover:border-cyan-400 transition-colors duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transform transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-cyan-600 dark:text-cyan-400 text-center mb-6">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 text-gray-600 dark:text-gray-300 hover:text-cyan-600 transition-colors"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectorsSection;