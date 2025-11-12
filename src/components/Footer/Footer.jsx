import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Code,
  Mail,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative  bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-950 dark:to-gray-900 text-gray-700 dark:text-gray-300 overflow-hidden">
      {/* glowing background */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 to-cyan-300/20 rounded-full blur-3xl opacity-30 dark:opacity-20" />
      </div>

      {/* footer content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Code className="text-blue-600 dark:text-cyan-400" size={26} />
            <h2 className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
              IT Institute
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Empowering students with hands-on learning in web development, AI,
            and cloud technologies. Learn, build, and grow with us 🚀.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 dark:hover:text-cyan-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-blue-500 dark:hover:text-cyan-400 transition"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500 dark:hover:text-cyan-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 dark:hover:text-cyan-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/faq"
                className="hover:text-blue-500 dark:hover:text-cyan-400 transition"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-blue-500 dark:hover:text-cyan-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-blue-500 dark:hover:text-cyan-400 transition"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Connect With Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-blue-600 dark:text-cyan-400" />
              <span>info@itinstitute.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-600 dark:text-cyan-400" />
              <span>Ahmednagar, Maharashtra</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-xl bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-700/50 transition hover:scale-110"
            >
              <Facebook
                className="text-blue-600 dark:text-cyan-400"
                size={20}
              />
            </a>
            <a
              href="#"
              className="p-2 rounded-xl bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-700/50 transition hover:scale-110"
            >
              <Instagram
                className="text-pink-600 dark:text-pink-400"
                size={20}
              />
            </a>
            <a
              href="#"
              className="p-2 rounded-xl bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-700/50 transition hover:scale-110"
            >
              <Linkedin
                className="text-blue-700 dark:text-cyan-400"
                size={20}
              />
            </a>
            <a
              href="#"
              className="p-2 rounded-xl bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-700/50 transition hover:scale-110"
            >
              <Twitter className="text-sky-500 dark:text-cyan-300" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} IT Institute. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
