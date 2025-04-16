import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Profile</h1>
        <p className="text-lg text-gray-800 mb-2">
          <strong>ID Number:</strong> 2300031365
        </p>
        <p className="text-lg text-gray-800">
          <strong>Name:</strong> kiliveti sihrudh amru
        </p>
      </div>
    </div>
  );
};

export default Profile;
