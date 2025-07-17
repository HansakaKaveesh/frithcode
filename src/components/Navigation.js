'use client';
import Link from 'next/link';
import { Button } from "../components/ui/button";
import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiChevronRight,
  FiBriefcase,
  FiMail,
  FiArrowRight,
  FiCode,
  FiShoppingCart,
  FiMenu,
  FiX
} from 'react-icons/fi';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 border-b border-gray-100 dark:border-gray-800
        transition-all duration-300
        ${scrolled ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md" : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-none shadow-sm"}
      `}
    >
      <div className="flex items-center px-4 lg:px-8 py-3 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center mt-1">
          <Link href="/">
            <Image
              src="/singale logo.png"
              alt="FrithCode Logo"
              width={34}
              height={34}
              className="h-auto w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <ul className="hidden md:flex gap-1 cursor-pointer flex-1 justify-center">
          <li className="group relative">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <FiHome className="w-4 h-4 mr-1.5 text-current" />
              <span className="text-sm relative before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[1.5px] before:bg-blue-600 dark:before:bg-blue-400 before:transition-all before:duration-300 group-hover:before:w-full">
                Home
              </span>
            </Link>
          </li>
          <li className="group relative">
            <Link
              href="/about-us"
              className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <FiUsers className="w-4 h-4 mr-1.5 text-current" />
              <span className="text-sm relative before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[1.5px] before:bg-blue-600 dark:before:bg-blue-400 before:transition-all before:duration-300 group-hover:before:w-full">
                About
              </span>
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              <FiSettings className="w-4 h-4 mr-1.5 text-current" />
              <span className="text-sm relative before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[1.5px] before:bg-blue-600 dark:before:bg-blue-400 before:transition-all before:duration-300 group-hover:before:w-full">
                Services
              </span>
              <FiChevronRight
                className={`w-3 h-3 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`absolute top-full left-0 w-44 pt-1 transition-all duration-300 ease-out ${
                isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
              }`}
            >
              <ul className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-1.5 space-y-0.5 border border-gray-100 dark:border-gray-700">
                <li>
                  <Link
                    href="/services/web-development"
                    className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200"
                  >
                    <FiCode className="w-4 h-4 mr-1.5 text-blue-600 dark:text-blue-400" />
                    Web Dev
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/e-commerce-solutions"
                    className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors duration-200"
                  >
                    <FiShoppingCart className="w-4 h-4 mr-1.5 text-blue-600 dark:text-blue-400" />
                    E-Commerce
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="group relative">
            <Link
              href="/portfolio"
              className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <FiBriefcase className="w-4 h-4 mr-1.5 text-current" />
              <span className="text-sm relative before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[1.5px] before:bg-blue-600 dark:before:bg-blue-400 before:transition-all before:duration-300 group-hover:before:w-full">
                Portfolio
              </span>
            </Link>
          </li>
          <li className="group relative">
            <Link
              href="/contact"
              className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <FiMail className="w-4 h-4 mr-1.5 text-current" />
              <span className="text-sm relative before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-[1.5px] before:bg-blue-600 dark:before:bg-blue-400 before:transition-all before:duration-300 group-hover:before:w-full">
                Contact
              </span>
            </Link>
          </li>
        </ul>

        {/* Right: Desktop Button and Theme Toggle */}
        <div className="hidden md:flex items-center gap-3 flex-1 justify-end">
          <Link href="/quotation">
            <Button
              variant="outline"
              className="group relative bg-gradient-to-br from-white/80 to-white/20 dark:from-gray-800/50 dark:to-gray-800/30 hover:shadow-lg border border-gray-200/80 dark:border-gray-700 rounded-xl px-5 py-2.5 font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-cyan-600 transition-colors">
                Get Quotation
                <FiArrowRight className="inline-block ml-2 -mb-0.5 w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
          <div className="h-6 w-px bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-700" />
          <div className="relative group">
            <ThemeToggle className="p-1 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors border border-transparent hover:border-gray-200/30 dark:hover:border-gray-700/50" />
            <div className="absolute -right-1 -top-1 w-2 h-2 bg-cyan-400/80 rounded-full animate-pulse group-hover:scale-150 transition-transform" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <div className="relative group">
            <ThemeToggle className="p-1 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors" />
            <div className="absolute -right-0.5 -top-0.5 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-pulse" />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl flex flex-col items-center gap-2 py-4 md:hidden animate-fade-in z-50">
          <li className="w-full px-4 group">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
            >
              <FiHome className="text-xl text-blue-600 dark:text-blue-400 opacity-80" />
              <span className="font-medium">Home</span>
            </Link>
          </li>
          <li className="w-full px-4 group">
            <Link
              href="/about-us"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
            >
              <FiUsers className="text-xl text-blue-600 dark:text-blue-400 opacity-80" />
              <span className="font-medium">About Us</span>
            </Link>
          </li>
          <li className="w-full px-4 group">
            <div
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex items-center justify-between px-4 py-3 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
            >
              <div className="flex items-center gap-3">
                <FiSettings className="text-xl text-blue-600 dark:text-blue-400 opacity-80" />
                <span className="font-medium">Services</span>
              </div>
              <FiChevronRight
                className={`text-lg transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-90' : ''}`}
              />
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
              <ul className="ml-8 pl-3 border-l-2 border-blue-100 dark:border-gray-700 space-y-2">
                <li>
                  <Link
                    href="/services/web-development"
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200"
                  >
                    <FiCode className="text-blue-500 dark:text-blue-400" />
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/e-commerce-solutions"
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors duration-200"
                  >
                    <FiShoppingCart className="text-blue-500 dark:text-blue-400" />
                    E-Commerce Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-full px-4 group">
            <Link
              href="/portfolio"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
            >
              <FiBriefcase className="text-xl text-blue-600 dark:text-blue-400 opacity-80" />
              <span className="font-medium">Portfolio</span>
            </Link>
          </li>
          <li className="w-full px-4 group">
            <Link
              href="/contact"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
            >
              <FiMail className="text-xl text-blue-600 dark:text-blue-400 opacity-80" />
              <span className="font-medium">Contact</span>
            </Link>
          </li>
          <li className="w-full px-4 mt-2">
            <Link
              href="/quotation"
              className="block mx-4 px-6 py-3 text-center font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              Request Quotation
              <FiArrowRight className="inline-block ml-2 -mb-0.5 animate-pulse" />
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}