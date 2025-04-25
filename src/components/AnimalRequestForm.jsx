import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnimalRequest } from '../redux/requestSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';

function AnimalRequestForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    condition: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/posts', formData); // 🔁 mock endpoint
      dispatch(addAnimalRequest(formData));
      toast.success('Animal request submitted successfully!');
      setFormData({ name: '', location: '', condition: '' });
    } catch (err) {
      toast.error('Submission failed. Try again later.');
      console.error('Axios error:', err);
    }
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Animal Location Request</h2>

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
            placeholder="Area / Town"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            placeholder="Condition (e.g., Injured, Dead)"
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

export default AnimalRequestForm;
