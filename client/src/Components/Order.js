import React from 'react';
import { Link } from 'react-router-dom';

// Sample order data
const order = [
  { oid: '1001', oname: 'Product 1', oprice: '$70' },
  { oid: 'P002', oname: 'Product 2', oprice: '$30' },
  { oid: 'P003', oname: 'Product 3', oprice: '$20' },
  { oid: 'P004', oname: 'Product 4', oprice: '$40' }
];

const Order = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Order List</h1>
        <p className="text-center font-semibold text-gray-700 mb-6 underline">Array of Objects</p>

        <table className="min-w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Order Name</th>
              <th className="py-3 px-6 text-left">Order Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {order.map((ordr) => (
              <tr key={ordr.oid} className="hover:bg-gray-100 transition">
                <td className="py-3 px-6">{ordr.oid}</td>
                <td className="py-3 px-6">{ordr.oname}</td>
                <td className="py-3 px-6">{ordr.oprice}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 text-center">
          <h2 className="text-lg font-medium text-gray-700">
            Want to track your order?{' '}
            <Link
              to="/Track"
              className="text-blue-600 font-bold hover:underline hover:text-blue-800"
            >
              Track
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Order;
