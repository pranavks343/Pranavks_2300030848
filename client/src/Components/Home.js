import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100">
      {/* Hero Section */}
      <header className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center py-16 shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md">
          Welcome to <span className="bg-white text-purple-600 px-3 rounded-full">Doorstep</span>
        </h1>
        <p className="mt-4 text-xl font-light">Bringing services and products to your doorstep</p>
        <Link
          to="/services"
          className="mt-6 inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-purple-100 transition"
        >
          Explore Services
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-16 w-11/12 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-purple-600">⚡ Fast Delivery</h2>
          <p className="mt-3 text-gray-600">Get your orders delivered in no time.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-pink-600">💰 Best Prices</h2>
          <p className="mt-3 text-gray-600">Affordable rates for all services and products.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold text-blue-600">🕐 24/7 Support</h2>
          <p className="mt-3 text-gray-600">We are always here to help you, anytime.</p>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="w-full text-center py-10 bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-auto">
        <h3 className="text-2xl font-semibold">Start your journey with Doorstep today!</h3>
        <Link
          to="/register"
          className="mt-5 inline-block bg-blue-500 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-600 transition shadow-lg"
        >
          Sign Up Now
        </Link>
      </footer>
    </div>
  );
};

export default Home;
