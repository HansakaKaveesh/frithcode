"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("dark");
     localStorage.setItem("theme", "light");
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
