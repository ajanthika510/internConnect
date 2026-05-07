import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-800 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">

        <h1 className="font-bold text-blue-600">InternConnect</h1>

        <div className="flex items-center gap-4">

          {/* NAV LINKS */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg border dark:border-gray-700 text-sm"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

        </div>
      </div>
    </header>
  );
}