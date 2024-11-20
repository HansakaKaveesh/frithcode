'use client';

import Link from 'next/link'; // Import Link component
import { Button } from "../components/ui/button";
import Image from "next/legacy/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false); // For mobile menu
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For desktop Services dropdown
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // For mobile Services dropdown

    return (
        <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-10">
            {/* Logo */}
            <div className="flex items-center">
                <Link href="/">
                    <Image 
                        src="/Frithcode2.png" // Path relative to the public folder
                        alt="FrithCode Logo" 
                        width={125} 
                        height={34} 
                        className="h-auto w-auto cursor-pointer"
                    />
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 cursor-pointer">
                <Link href="/"><li className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md">
                    Home</li>
                </Link>
                
                <Link href="/about-us"><li className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md">
                    About Us</li>
                </Link>

                <li 
                    className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    Services
                    {/* Dropdown for Services */}
                    {isDropdownOpen && (
                        <ul className="absolute left-0 top-10 bg-white dark:bg-gray-700 shadow-md rounded-md">
                            <Link href="/services/web-development"><li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer">
                                Web Development</li>
                            </Link>
                            
                            <Link href="/services/app-development"><li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer">
                                App Development</li>
                            </Link>

                            <Link href="/services/seo-optimization"><li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer">
                                SEO Optimization</li>
                            </Link>
                        </ul>
                    )}
                </li>
                <Link href="/portfolio"><li className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md">
                    Portfolio</li>
                </Link>
                <Link href="/contact"><li className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md">
                    Contact Us</li>
                </Link>
            </ul>

            {/* Desktop Button and Theme Toggle */}
            <div className="hidden md:flex items-center gap-4">
                <Link href="/quotation">
                    <Button variant="outline">Request a quotation</Button>
                </Link>
                <ThemeToggle /> {/* Add the ThemeToggle button */}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
                <ThemeToggle /> {/* Add ThemeToggle in mobile view */}
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300 focus:outline-none">
                    {/* Hamburger Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
                    <Link href="/"><li className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md">
                        Home</li>
                    </Link>
                    
                    <li className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md">
                        <Link href="/about-us">About Us</Link>
                    </li>
                    <li className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md">
                        <div onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}>Services</div>
                        {/* Mobile Dropdown for Services */}
                        {isMobileDropdownOpen && (
                            <ul className="mt-2 bg-white dark:bg-gray-800 shadow-md rounded-md w-40">
                                <li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer">
                                    <Link href="/services/web-development">Web Development</Link>
                                </li>
                                <li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer">
                                    <Link href="/services/app-development">App Development</Link>
                                </li>
                                <li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer">
                                    <Link href="/services/seo-optimization">SEO Optimization</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md">
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 px-4 py-2 rounded-md">
                        <Link href="/contact">Contact Us</Link>
                    </li>
                    <Link href="/quotation">
                        <Button variant="outline">Request a quotation</Button>
                    </Link>
                </ul>
            )}
        </nav>
    );
}
