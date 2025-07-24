import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast ,ToastContainer} from "react-toastify";


const Dashboard = () => {

    const user = JSON.parse(localStorage.getItem("babliUser"));
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("babliUser");
        toast.info("You have been logged out");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      };
      
    useEffect(() => {
        const user = localStorage.getItem("babliUser");
        if (!user) {
            navigate("/login");
        } else {
            toast.success("Login successful! 🎉", {
                autoClose: 1500,
              });
          }
    }, []);


    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center">
         <ToastContainer position="top-right" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-xl rounded-xl p-8 max-w-3xl w-full text-center"
            >
                <div className="absolute top-6 right-6">
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>

                <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome, {user?.name || "User"} 👋</h2>
                <p className="text-gray-600 mb-6">
                    You're logged in successfully. This is your personal dashboard.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-100">
                        <h3 className="text-lg font-semibold text-blue-700">🌐 Build Portfolio</h3>
                        <p className="text-sm text-gray-600 mt-2">Showcase your projects to attract global clients.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-100">
                        <h3 className="text-lg font-semibold text-blue-700">📈 Track Progress</h3>
                        <p className="text-sm text-gray-600 mt-2">Stay motivated with clear goals and achievements.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-100">
                        <h3 className="text-lg font-semibold text-blue-700">💼 Freelance Goals</h3>
                        <p className="text-sm text-gray-600 mt-2">Plan your Fiverr & LinkedIn client strategy.</p>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Dashboard;








