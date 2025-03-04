"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import teamImage from '../../public/About.png';
import Image from 'next/image';
import { FiUsers, FiAward, FiHeart, FiBriefcase } from 'react-icons/fi';

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <section className="relative py-10 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                {/* Image Section */}
                <div className="relative group" data-aos="zoom-in-up">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
                    <Image 
                        src={teamImage} 
                        alt="Team working together" 
                        className="relative rounded-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
                        width={600}
                        height={500}
                        quality={100}
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-8">
                    <div data-aos="fade-right">
                        <span className="inline-block mb-4 text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">
                            Who We Are
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Transforming Digital Landscapes
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            At FrithCode, we blend technical excellence with creative vision to craft digital solutions 
                            that propel businesses forward. With a passion for innovation and a commitment to quality, 
                            we turn complex challenges into seamless digital experiences.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-up">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <FiBriefcase className="text-2xl text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">4+</span>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Years Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                    <FiAward className="text-2xl text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">150+</span>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Projects Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <FiHeart className="flex-shrink-0 text-2xl text-red-500" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Client-Centric Approach</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                    Your success is our priority. We listen, adapt, and deliver solutions that exceed expectations.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <FiUsers className="flex-shrink-0 text-2xl text-green-500" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Expert Team</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                    Seasoned professionals combining technical expertise with creative problem-solving.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 pointer-events-none"></div>
        </section>
    );
}