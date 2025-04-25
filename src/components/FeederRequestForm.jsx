import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeederRequest } from '../redux/requestSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';

function FeederRequestForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/posts', formData); // 🔁 mock API
      dispatch(addFeederRequest(formData));
      toast.success('Feeder request submitted!');
      setFormData({ name: '', location: '', reason: '' });
    } catch (err) {
      toast.error('Failed to submit feeder request.');
      console.error('Axios error:', err);
    }
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Feeder Request</h2>

        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Feeder Location"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Why is this location suitable?"
            rows="3"
            className="w-full px-4 py-2 border rounded"
            required
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
          >
            Submit Request
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-orange-500 hover:underline"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeederRequestForm;
