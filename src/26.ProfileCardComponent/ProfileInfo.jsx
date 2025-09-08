import { useState } from "react";

export default function ProfileInfo({ user, editMode, handleSave }) {
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (!editMode) {
    return (
      <>
        <h2 className="text-xl font-semibold text-center">{user.name}</h2>
        <p className="text-center text-gray-500">{user.email}</p>
        <p className="text-center text-gray-400">{user.role}</p>
      </>
    );
  }
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded"
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded"
        placeholder="Email"
      />
      <button
        onClick={() => handleSave(formData)}
        className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Save
      </button>
    </div>
  );
}
export default