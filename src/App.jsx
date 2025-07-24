import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Dashboard from './components/pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';



const App = () => {
  const user = JSON.parse(localStorage.getItem("babliUser"));
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/dashboard'
          element={<ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>}
        />
      </Routes>
    </div>
  );
};

export default App;
