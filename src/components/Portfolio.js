import Image from 'next/image';
import project1 from '../../public/About.png';
import project2 from '../../public/About.png';
import project3 from '../../public/About.png';

export default function RecentProjects() {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'A modern e-commerce platform with user-friendly design and optimized shopping experience.',
            image: project1,
        },
        {
            id: 2,
            title: 'Portfolio Website',
            description: 'A personal portfolio showcasing skills, projects, and achievements for clients and employers.',
            image: project2,
        },
        {
            id: 3,
            title: 'Mobile App Development',
            description: 'A mobile app tailored for seamless user interaction and innovative functionality.',
            image: project3,
        },
    ];

    return (
        <section className="py-16 px-8 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Our Recent Projects</h2>
                <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                    Take a look at some of the projects we’ve completed, showcasing our expertise and commitment to quality.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
