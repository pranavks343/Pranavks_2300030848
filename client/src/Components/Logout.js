import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl px-10 py-12 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Successfully Logged Out</h1>
        <p className="text-gray-600 mb-6">Thank you for visiting Doorstep. We hope to see you again soon!</p>
        <Link
          to="/login"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default Logout;
