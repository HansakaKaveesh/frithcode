'use client';

import { Button } from "../components/ui/button";
import Image from 'next/image';
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-10">
            {/* Logo */}
            <div className="flex items-center">
                <Image 
                    src="/Frithcode.png" // Path relative to the public folder
                    alt="FrithCode Logo" 
                    width={70} 
                    height={40} 
                    className="h-auto w-auto"
                />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6">
                <li className="text-gray-700 hover:text-blue-600">Home</li>
                <li className="text-gray-700 hover:text-blue-600">About Us</li>
                <li className="text-gray-700 hover:text-blue-600">Services</li>
                <li className="text-gray-700 hover:text-blue-600">Portfolio</li>
                <li className="text-gray-700 hover:text-blue-600">Contact Us</li>
            </ul>

            {/* Desktop Button */}
            <div className="hidden md:block">
                <Button variant="outline">Request a quotation</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                    {/* Hamburger Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
                    <li className="text-gray-700 hover:text-blue-600">Home</li>
                    <li className="text-gray-700 hover:text-blue-600">About Us</li>
                    <li className="text-gray-700 hover:text-blue-600">Services</li>
                    <li className="text-gray-700 hover:text-blue-600">Portfolio</li>
                    <li className="text-gray-700 hover:text-blue-600">Contact Us</li>
                    <Button variant="outline">Request a quotation</Button>
                </ul>
            )}
        </nav>
    );
}
