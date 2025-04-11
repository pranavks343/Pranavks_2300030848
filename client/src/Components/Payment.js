import React from 'react';
import { FaCcVisa, FaPaypal, FaGooglePay, FaCreditCard } from 'react-icons/fa';
import { SiPhonepe, SiPaytm } from 'react-icons/si';

const Payment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Payment Method</h1>
        <p className="text-gray-700 text-lg mb-6">Choose your preferred method at checkout.</p>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 p-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition">
            <FaCreditCard size={20} /> Credit / Debit
          </button>

          <button className="flex items-center justify-center gap-2 p-3 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition">
            <SiPhonepe size={20} /> PhonePe
          </button>

          <button className="flex items-center justify-center gap-2 p-3 bg-yellow-100 text-yellow-700 rounded-xl hover:bg-yellow-200 transition">
            <SiPaytm size={20} /> Paytm
          </button>

          <button className="flex items-center justify-center gap-2 p-3 bg-blue-200 text-blue-800 rounded-xl hover:bg-blue-300 transition">
            <FaPaypal size={20} /> PayPal
          </button>

          <button className="flex items-center justify-center gap-2 p-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition col-span-2">
            <FaGooglePay size={24} /> Google Pay (UPI)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
