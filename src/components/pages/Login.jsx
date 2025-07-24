// src/pages/Login.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("babliUser"));
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      setSuccess("");
      return;
    }

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      toast.error("Invalid credentials. Please try again.");
      setSuccess("");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    toast.success("Login successful! Redirecting...");
    setError("");

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };
  

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-100 to-blue-200 px-4">
     <ToastContainer position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-xl w-full max-w-md p-8"
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Welcome Back 👋</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Error & Success Messages */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Log In
          </motion.button>
        </form>

        {/* Signup link */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Login;

