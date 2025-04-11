import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
     const response = await axios.post(
  "https://pranavks-2300030848.onrender.com/api/feedback/submit-feedback",
  formData
);

      setMessage(response.data.message || 'Feedback submitted successfully!');
      setFormData({ name: '', email: '', feedback: '' });
    } catch (error) {
      setMessage('Error submitting feedback.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide animate-fade-in">
          Share Your Feedback ✨
        </h2>

        {message && (
          <div className={`mb-4 text-center px-4 py-2 rounded-xl text-sm font-medium ${message.includes('Error') ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />
          <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 h-32 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300 transition resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-pink-600 font-semibold py-3 rounded-xl hover:bg-pink-100 transition transform hover:scale-105 shadow-md disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit ✍️'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
