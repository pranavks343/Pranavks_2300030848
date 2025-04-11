import React from 'react';

const Track = ({ oid, oname, odate, ostate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 to-orange-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-left max-w-xl w-full">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">Order Tracking</h2>
        <p className="text-gray-700 mb-2"><strong>Product ID:</strong> {oid}</p>
        <p className="text-gray-700 mb-2"><strong>Customer Name:</strong> {oname}</p>
        <p className="text-gray-700 mb-2"><strong>Expected Delivery:</strong> {odate}</p>
        <p className="text-gray-700 mb-2"><strong>Status:</strong> {ostate}</p>
        <p className="text-gray-700 mb-2"><strong>Delivery:</strong> In Progress</p>
        <p className="text-gray-700"><strong>Authority:</strong> Logistics Team</p>
      </div>
    </div>
  );
};

export default Track;
