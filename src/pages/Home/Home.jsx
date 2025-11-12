import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-500">
      {/* Glassy Card */}
      <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-900/40 border border-white/10 dark:border-gray-700/30 shadow-2xl rounded-2xl p-10 text-center max-w-2xl w-full">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-4">
          Welcome to IT Institute 🚀
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          Empowering the next generation of tech innovators. Learn{" "}
          <span className="font-semibold text-blue-500 dark:text-cyan-400">
            Fullstack, AI, Cloud
          </span>{" "}
          and more — from industry experts.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/courses"
            className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Explore Courses
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-blue-500 dark:border-cyan-400 rounded-xl text-blue-600 dark:text-cyan-400 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl opacity-40 dark:opacity-30" />
      </div>
    </section>
  );
}

export default Home;
