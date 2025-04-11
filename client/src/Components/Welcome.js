import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { username, role } = location.state || {};

  // If no user info is passed, redirect to home or login
  if (!username || !role) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-600 text-lg">
        <p>Unauthorized access. Please login.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Welcome, {username}!
        </h1>
        <h2 className="text-xl text-gray-700 mb-6">
          Your role is: <span className="font-semibold">{role}</span>
        </h2>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Welcome;
