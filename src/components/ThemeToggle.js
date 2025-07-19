"use client";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ className = "" }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      className={`p-2 rounded-full border transition-colors duration-300
        ${isDarkMode ? "bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700" : "bg-yellow-100  text-gray-800 hover:bg-yellow-200"}
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        ${className}
      `}
    >
      {isDarkMode ? (
        <FiSun className="w-6 h-6" />
      ) : (
        <FiMoon className="w-6 h-6" />
      )}
      <span className="sr-only">Switch to {isDarkMode ? "light" : "dark"} theme</span>
    </button>
  );
}