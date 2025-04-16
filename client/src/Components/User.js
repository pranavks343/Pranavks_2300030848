import React from 'react';

const User = ({ username, role }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-200">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h3 className="text-xl font-bold text-indigo-700 mb-2">
          Welcome <span className="text-purple-700">{username}</span>
        </h3>
        <p className="text-gray-700">Logged in as 230003030848 KONDAPI SRI PRANAV<strong>{role}</strong></p>
      </div>
    </div>
  );
};

export default User;
