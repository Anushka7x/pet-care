import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDonationRequest } from '../redux/requestSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';

function DonationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    item: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/posts', formData); // 🔁 mock API
      dispatch(addDonationRequest(formData));
      toast.success('Donation submitted successfully!');
      setFormData({ name: '', item: '', quantity: '' });
    } catch (err) {
      toast.error('Failed to submit donation. Try again later.');
      console.error('Axios error:', err);
    }
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Donation Form</h2>

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
            name="item"
            value={formData.item}
            onChange={handleChange}
            placeholder="Item to Donate (e.g. food, blanket)"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full px-4 py-2 border rounded"
            required
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
          >
            Submit Donation
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

export default DonationForm;
