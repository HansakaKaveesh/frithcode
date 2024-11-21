"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import teamImage from '../../public/About.png';
import Image from 'next/image';


export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 100,    // Offset for triggering animations
            easing: 'ease-in-out', // Easing function
        });
    }, []);

    return (
        <section className="py-12 px-6 md:px-20 bg-white dark:bg-gray-900 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About FrithCode</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 mb-8">
                    FrithCode is dedicated to empowering businesses through exceptional web development services. Our mission is to create stunning, functional websites that enhance online presence and drive success in the digital landscape.
                </p>
                <div className="flex flex-col md:flex-row justify-start gap-8">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="zoom-in">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2024 Years in Business</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Since our inception, we have focused on quality and customer satisfaction, building lasting relationships with clients across various industries.
                        </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="zoom-in">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">4 Core Values</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Integrity, Innovation, Customer Focus, and Collaboration are the pillars of our company culture, guiding us in every project we undertake.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0" data-aos="fade-left">
            <Image 
                src={teamImage} 
                alt="Team working together" 
                className="rounded-lg" 
                width={400} 
                height={400} 
            />
            </div>
        </section>
    );
}
