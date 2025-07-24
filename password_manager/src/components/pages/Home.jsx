// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 flex flex-col items-center justify-center px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
      >
        Secure Interfaces. Clean UX. Fast Performance.
      </motion.h1>
      <p className="text-center text-sm md:text-base text-gray-500 italic mb-6">
        “Login UIs don’t have to be boring — let your first impression be unforgettable.”
      </p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-700 max-w-xl mb-8"
      >
        Delivering modern authentication experiences with smooth animations, clean design, and intuitive navigation — built to convert and scale.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex gap-4"
      >
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Try Demo Login
        </Link>
        <Link
          to="/signup"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
        >
          Create an Account
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;




