import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="text-white text-2xl font-bold tracking-wide hover:text-yellow-100">
            Doorstep
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
           
            <Link to="/Order" className="text-white hover:text-yellow-100 transition">Orders</Link>
            <Link to="/Payment" className="text-white hover:text-yellow-100 transition">Payments</Link>
            <Link to="/user" className="text-white hover:text-yellow-100 transition">User</Link>
            <Link to="/Register" className="text-white hover:text-yellow-100 transition">SignUp</Link>
            <Link to="/login" className="text-white hover:text-yellow-100 transition">Login</Link>
            <Link to="/ApiProducts" className="text-white hover:text-yellow-100 transition">Products</Link>
            <Link to="/Profile" className="text-white hover:text-yellow-100 transition">Profile</Link>
            <Link to="/Cart" className="text-white hover:text-yellow-100 transition">Cart</Link>
            <Link to="/ProductsList" className="text-white hover:text-yellow-100 transition">Manage-Product</Link>
            <Link to="/OrderList" className="text-white hover:text-yellow-100 transition">Order List</Link>
            <Link to="/UsersList" className="text-white hover:text-yellow-100 transition">Users List</Link>
            
            <Link to="/feedbackform" className="text-white hover:text-yellow-100 transition">Feedback</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
