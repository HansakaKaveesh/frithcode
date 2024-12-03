// src/components/FeaturedProjects.jsx
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'An online store with a modern UI and robust functionality.',
    image: '/Portfolio/E-commerce.jpg',
    link: 'https://main.d2o51kknziiguz.amplifyapp.com/',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase skills and projects.',
    image: '/Portfolio/Port.jpg',
    link: '/projects/portfolio',
  },
  {
    title: 'Textile Shop',
    description: 'A productivity app to manage tasks effectively.',
    image: '/Portfolio/project-1.png',
    link: 'https://gloriousfabric.lk/',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900" id="featured-projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800 hover:scale-105 transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="relative w-full h-72 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
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
