import React, { useState } from "react";
import { User, Mail, Lock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  const inputClass =
    "w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition";

  return (
    <section className="flex py-26 items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 px-4 transition-all duration-500">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-8 sm:p-10 transition-all duration-300 hover:shadow-blue-200 dark:hover:shadow-cyan-900/40">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <User
              className="absolute left-3 top-3 text-blue-500 dark:text-cyan-400"
              size={20}
            />
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-3 top-3 text-blue-500 dark:text-cyan-400"
              size={20}
            />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className={inputClass}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              className="absolute left-3 top-3 text-blue-500 dark:text-cyan-400"
              size={20}
            />
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className={inputClass}
            />
          </div>

          {/* Role */}
          <div className="relative">
            <Shield
              className="absolute left-3 top-3 text-blue-500 dark:text-cyan-400"
              size={20}
            />
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 dark:text-cyan-400 hover:underline font-medium"
          >
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
