// src/components/FeaturedProjects.jsx
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'An online store with a modern UI and robust functionality.',
    image: '/Portfolio/project-1.png',
    link: '/projects/ecommerce',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase skills and projects.',
    image: '/Portfolio/project-1.png',
    link: '/projects/portfolio',
  },
  {
    title: 'Task Manager App',
    description: 'A productivity app to manage tasks effectively.',
    image: '/Portfolio/project-1.png',
    link: '/projects/task-manager',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900" id="featured-projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:scale-105 transform transition-all duration-300"
            >
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}