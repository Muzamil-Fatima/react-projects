import { useState } from "react";

export default function FormHandler() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Enter your name"
        value={form.name}
        type="text"
        onChange={handleChange}
        className="border-2 border-white focus:border-blue-500"
      />
      <input
        name="email"
        placeholder="Enter your email"
        value={form.email}
        type="email"
        onChange={handleChange}
        className="border-2 border-white focus:border-blue-500"
      />
      <input
        name="message"
        placeholder="Enter your message"
        value={form.message}
        type="text"
        onChange={handleChange}
        className="border-2 border-white focus:border-blue-500"
      />
      <button
        className="w-12 h-12 flex justify-center items-center"
      >
        Submit
      </button>
    </form>
  );
}
