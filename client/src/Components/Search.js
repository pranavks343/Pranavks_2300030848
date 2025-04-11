import React from 'react';

const Search = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Search Page</h1>
        <p className="text-gray-600 text-lg mb-4">Find what you're looking for:</p>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </div>
  );
};

export default Search;
