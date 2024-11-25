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
import project1 from "../../public/About.png";
import project2 from "../../public/About.png";
import project3 from "../../public/About.png";

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
            description: "A modern e-commerce platform with user-friendly design and optimized shopping experience.",
            image: project1,
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A personal portfolio showcasing skills, projects, and achievements for clients and employers.",
            image: project2,
        },
        {
            id: 3,
            title: "Mobile App Development",
            description: "A mobile app tailored for seamless user interaction and innovative functionality.",
            image: project3,
        },
        {
            id: 4,
            title: "Mobile App Development",
            description: "A mobile app tailored for seamless user interaction and innovative functionality.",
            image: project3,
        },
        {
            id: 5,
            title: "Mobile App Development",
            description: "A mobile app tailored for seamless user interaction and innovative functionality.",
            image: project3,
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
                modules={[ Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000, // Delay in ms
                    disableOnInteraction: false, // Continue autoplay after user interaction
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                        data-aos="fade-up" // Add animation here
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
                                data-aos="zoom-in" // Optional: add a different animation
                            >
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
                
                ))}
            </Swiper>
        </section>
    );
}
