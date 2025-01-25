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
import project1 from "../../public/Portfolio/E-commerce.jpg";
import project2 from "../../public/Portfolio/Port.jpg";
import project3 from "../../public/Portfolio/vle.jpg";
import project4 from "../../public/Portfolio/project-1.png";
import project5 from "../../public/About.png";

export default function RecentProjects() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            offset: 100,
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
        <section className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Recent Projects</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
                    Take a look at some of the projects we’ve completed, showcasing our expertise and commitment to quality.
                </p>
            </div>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                                data-aos="fade-up"
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
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                                        data-aos="zoom-in"
                                    >
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
