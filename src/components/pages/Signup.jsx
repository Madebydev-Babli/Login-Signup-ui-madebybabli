import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required.");
      setSuccess("");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      setSuccess("");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("babliUser", JSON.stringify(userData));

    toast.success("Account created successfully! Redirecting...");
    setError("");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

 JSON.parse(localStorage.getItem("babliUser"));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-center justify-center px-4">
       <ToastContainer position="top-center" />
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Create Your Account</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-600">
              Create Password
            </label>
          <input
            type="password"
            name="password"
             placeholder="********"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-600">
              Confirm Password
            </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
           </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;


            
         