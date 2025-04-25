import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCareRequest } from '../redux/requestSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';

function CareRequestForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    animal: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/posts', formData); // 🔁 mock API
      dispatch(addCareRequest(formData));
      toast.success('Care request submitted!');
      setFormData({ name: '', animal: '', notes: '' });
    } catch (err) {
      toast.error('Failed to submit care request.');
      console.error('Axios error:', err);
    }
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Pet Care Request</h2>

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
            name="animal"
            value={formData.animal}
            onChange={handleChange}
            placeholder="Animal Type (e.g. Dog, Cow)"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any Notes"
            rows="3"
            className="w-full px-4 py-2 border rounded"
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

export default CareRequestForm;
