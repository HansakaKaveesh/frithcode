// src/components/FeaturedProjects.jsx
import Image from 'next/image';

const projects = [
  {
    title: 'Virtual Learning Environment',
    description: 'An interactive platform for online education with courses, study materials, and assessments.',
    image: '/Portfolio/VLE-100.jpg',
    link: 'https://vle-project-172202922309.us-central1.run.app/',
  },
  {
    title: 'Student Management System',
    description: 'A system to manage student records, attendance, and grades.',
    image: '/Portfolio/LMS-100.jpg',
    link: 'https://sms-172202922309.us-central1.run.app/',
  },
  {
    title: 'Textile Shop',
    description: 'E-commerce platform offering various fabrics and tailoring services.',
    image: '/Portfolio/Glorias-100.jpg',
    link: 'https://gloriousfabric.lk/',
  },
];

const ExternalLinkIcon = () => (
  <svg
    className="w-4 h-4 ml-1.5 inline-block"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export default function FeaturedProjects() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900" id="featured-projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-4 dark:focus:ring-offset-gray-900"
                aria-label={`Visit ${project.title} project`}
              >
                <div className="relative w-full h-48 md:h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover: scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold text-lg flex items-center">
                      Visit Project
                      <ExternalLinkIcon />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100 flex items-center">
                    {project.title}
                    <ExternalLinkIcon className="ml-2 w-5 h-5 text-gray-500 group-hover:text-indigo-500 transition-colors duration-300" />
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}