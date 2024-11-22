"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set to true for dark mode by default

  useEffect(() => {
    // Check if there's a saved theme in localStorage, otherwise apply dark mode by default
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md text-black dark:text-white flex items-center gap-2"
    >
      <span>{isDarkMode ? "🌙" : "☀️"}</span> {/* Display On/Off based on theme */}
      <div className={`w-10 h-6 ${isDarkMode ? 'bg-red-500' : 'bg-gray-500'} rounded-full relative`}>
        <div
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? "transform translate-x-4" : ""}`}
        ></div>
      </div>
    </button>
  );
}
