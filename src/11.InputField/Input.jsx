import { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <div className="flex flex-col gap-3 w-96">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Write a short bio..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="border-2 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      <div
        className={`w-96 p-5 rounded-xl shadow-lg transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <h2 className="text-2xl font-bold">{name || "Your Name"}</h2>
        <p className="text-sm text-gray-500">{email || "your.email@example.com"}</p>
        <p className="mt-3">{bio || "Your bio will appear here..."}</p>
      </div>
    </div>
  );
}
