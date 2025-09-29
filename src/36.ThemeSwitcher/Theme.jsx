import { useState } from "react";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-6 py-2 rounded-lg font-semibold shadow-lg transition duration-300 ${
          darkMode
            ? "bg-yellow-400 text-black hover:bg-yellow-500"
            : "bg-gray-800 text-white hover:bg-gray-900"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}
