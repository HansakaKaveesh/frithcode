"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/legacy/image";
import { FiExternalLink } from "react-icons/fi";

import project1 from "../../public/Portfolio/E-commerce.jpg";
import project2 from "../../public/Portfolio/Port.jpg";
import project3 from "../../public/Portfolio/vle.jpg";
import project4 from "../../public/Portfolio/project-1.png";
import project5 from "../../public/About.png";

// ... (keep your image imports the same)

export default function RecentProjects() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const projects = [
        {
            id: 1,
            title: "E-commerce Website",
            description: "An innovative e-commerce platform offering a modern and seamless shopping experience with user-friendly and best features.",
            image: project1,
            link: "https://main.d3a1zc6e3rvt3f.amplifyapp.com/",
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A professional portfolio website designed to showcase skills, projects, and achievements for personal branding and client acquisition.",
            image: project2,
            link: "/projects/portfolio-website",
        },
        {
            id: 3,
            title: "Virtual Learning Environment",
            description: "A dynamic platform providing online learning tools and resources, allowing students to access education anytime, anywhere.",
            image: project3,
            link: "https://main.d1i1q5sjg3pojs.amplifyapp.com/",
        },
        {
            id: 4,
            title: "Textile Shop",
            description: "An engaging and functional online textile shop that makes it easy to browse, select, and purchase fabrics with a smooth user interface.",
            image: project4,
            link: "https://gloriousfabric.lk/",
        },
        {
            id: 5,
            title: "CRM Solution",
            description: "A robust and customizable customer relationship management tool to streamline business interactions, enhance customer engagement, and boost sales.",
            image: project5,
            link: "/projects/crm-solution",
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Recent Projects
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Explore our portfolio of successfully delivered projects that demonstrate our technical excellence and creative approach.
                </p>
            </div>

            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 },
                }}
                className="!pb-12"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div
                            className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                            data-aos="fade-up"
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative overflow-hidden rounded-t-xl"
                            >
                                <div className="relative w-full h-60">
                                    <Image
                                        src={project.image}
                                        alt={`Screenshot of ${project.title}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                                </div>
                                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                                    <span className="text-white text-lg font-medium">
                                        {project.title}
                                    </span>
                                    <FiExternalLink className="text-white w-5 h-5" />
                                </div>
                            </a>
                            <div className="p-6">
                                <p
                                    className="text-gray-600 dark:text-gray-300 mb-4 h-24 overflow-y-auto"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    {project.description}
                                </p>
                                <div
                                    className="flex justify-end"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                                    >
                                        View Project
                                        <FiExternalLink className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}