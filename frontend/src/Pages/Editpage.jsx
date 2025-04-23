import { useState } from "react";

export default function EditForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    status: "active",
    ticketsAssigned: 0,
    ticketsCompleted: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      status: "active",
      ticketsAssigned: 0,
      ticketsCompleted: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-900 p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-semibold">Edit Agent</h2>

      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Department</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Tickets Assigned</label>
          <input
            type="number"
            name="ticketsAssigned"
            value={formData.ticketsAssigned}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            min={0}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Tickets Completed</label>
          <input
            type="number"
            name="ticketsCompleted"
            value={formData.ticketsCompleted}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            min={0}
          />
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Edit Agent
      </button>
    </form>
  );
}
