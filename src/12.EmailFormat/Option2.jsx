import { useState } from "react";
export default function Option2() {
  const [email, setEmail] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submit", email);
  }
  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <input
        value={email}
        className="border-1 px-3 py-4 mr-2"
        onChange={(c) => setEmail(c.target.value)}
        type="email"
        required
        placeholder="Enter Email"
      />
      <button type="submit" className="px-4 py-2 bg-blue-400 text-white">
        Submit
      </button>
    </form>
  );
}