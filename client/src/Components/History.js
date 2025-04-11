import React from 'react';

const History = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center tracking-wide animate-fade-in">
          📜 History
        </h2>
        <p className="text-white text-center mt-4 text-lg">
          This is your activity history. More insights will appear here soon!
        </p>
      </div>
    </div>
  );
};

export default History;
