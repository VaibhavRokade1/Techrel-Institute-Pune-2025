import { Link } from "react-router-dom";
import { Moon, Sun, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 dark:bg-gray-900/40 border-b border-white/10 dark:border-gray-700/30 shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent tracking-wide">
            IT
            <span className="text-gray-900 dark:text-gray-100">Institute</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 dark:text-gray-200 font-medium">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/courses" className="hover:text-blue-500 transition">
            Courses
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>

          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Moon size={20} />
          </button>

          <Link
            to="/enroll"
            className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3 text-gray-800 dark:text-gray-200">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <Sun size={20} />
          </button>

          <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Static Mobile Menu (always hidden, design reference) */}
      <div className="hidden md:hidden flex-col items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg py-6 space-y-4 border-t border-gray-200/20 dark:border-gray-700/40">
        <Link
          to="/"
          className="text-lg hover:text-blue-500 dark:hover:text-cyan-400 transition"
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="text-lg hover:text-blue-500 dark:hover:text-cyan-400 transition"
        >
          Courses
        </Link>
        <Link
          to="/about"
          className="text-lg hover:text-blue-500 dark:hover:text-cyan-400 transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-lg hover:text-blue-500 dark:hover:text-cyan-400 transition"
        >
          Contact
        </Link>
        <Link
          to="/enroll"
          className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Enroll Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
