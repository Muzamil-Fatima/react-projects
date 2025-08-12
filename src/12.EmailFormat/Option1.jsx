import { useState } from "react";

export default function Option1() {
  const [email, setEmail] = useState();
  function handleSubmit(c) {
    c.preventDefault();
    console.log("Form Submit", email);
  }
  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <input
        className="border-1 px-3 py-4 mr-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        placeholder="Enter Email"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
      />
      <button type="submit" className="px-4 py-2 bg-blue-400 text-white">
        Submit
      </button>
    </form>
  );
}
