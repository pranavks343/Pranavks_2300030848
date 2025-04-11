import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

function UserMList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = 'http://localhost:5555/api/users';

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const saveUser = async () => {
    try {
      const userData = { name, email, role };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, userData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, userData);
      }

      setName('');
      setEmail('');
      setRole('');
      fetchUsers();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const editUser = (user) => {
    setEditingId(user._id);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>

      <button
        className="w-full py-3 mb-8 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition"
        onClick={saveUser}
      >
        {editingId ? 'Update User' : 'Add User'}
      </button>

      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user._id}
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <div className="text-gray-800">
              <p className="font-semibold text-lg">{user.name}</p>
              <p className="text-sm text-gray-600">Email: {user.email}</p>
              <p className="text-sm text-gray-600">Role: {user.role}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 transition"
                onClick={() => editUser(user)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
                onClick={() => deleteUser(user._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserMList;
