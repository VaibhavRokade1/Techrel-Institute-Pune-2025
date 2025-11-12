import React, { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  const inputClass =
    "w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition";

  return (
    <section className="flex py-25 items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 px-4 transition-all duration-500">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-8 sm:p-10 transition-all duration-300 hover:shadow-blue-200 dark:hover:shadow-cyan-900/40">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Sign in to continue your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="accent-blue-600 dark:accent-cyan-500"
              />
              <span>Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-600 dark:text-cyan-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex justify-center items-center space-x-2"
          >
            <LogIn size={20} />
            <span>Sign In</span>
          </button>
        </form>

        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-5">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 dark:text-cyan-400 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
