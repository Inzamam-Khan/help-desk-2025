
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { createTicket } from '../redux/actions';

export default function ViewTicketForm(){
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Bug',
  });

  const categories = ['Bug', 'Feature Request', 'Support', 'Other'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ ...formData, id: Date.now() }));
    setFormData({ title: '', description: '', category: 'Bug' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow rounded bg-gray-900">
      <h2 className="text-xl font-bold mb-4">Ticket Details</h2>

      <div className="mb-3">
        <label className="block mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Created By</label>
        <input
          type="text"
          name="title"
          value="Marcos"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>


      <div className="mb-3">
        <label className="block mb-1">Status</label>
        <select
          name="status"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-gray-900"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="block mb-1">Assigned To:</label>
        <input
          name="description"
          value="hazer"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>



      <div className="mb-3">
        <label className="block mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-gray-900"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};


