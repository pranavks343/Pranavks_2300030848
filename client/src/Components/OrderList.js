import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = 'http://localhost:5555/api/orders';

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(API_URL);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const saveOrders = async () => {
    try {
      const orderData = { name, age, grade };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, orderData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, orderData);
      }

      setName('');
      setAge('');
      setGrade('');
      fetchOrders();
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const deleteOrders = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const editOrders = (order) => {
    setEditingId(order._id);
    setName(order.name);
    setAge(order.age);
    setGrade(order.grade);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 p-6 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Manage Orders</h2>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <input 
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input 
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
          <button
            onClick={saveOrders}
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            {editingId ? 'Update Order' : 'Add Order'}
          </button>
        </div>

        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order._id}
              className="flex justify-between items-center p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="text-gray-700 font-medium">{order.name}</p>
                <p className="text-sm text-gray-500">Age: {order.age}, Grade: {order.grade}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  onClick={() => editOrders(order)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={() => deleteOrders(order._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderList;
