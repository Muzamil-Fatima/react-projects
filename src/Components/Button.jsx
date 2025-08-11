import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-3 m-2
        bg-gradient-to-r from-blue-500 to-indigo-600
        text-white font-semibold text-lg
        rounded-lg
        border-2 border-transparent
        shadow-lg
        transition
        duration-300
        ease-in-out
        hover:from-indigo-600 hover:to-blue-500
        hover:border-blue-300
        hover:shadow-xl
        active:scale-95
        focus:outline-none focus:ring-4 focus:ring-blue-300
      "
    >
      {children}
    </button>
  );
}
