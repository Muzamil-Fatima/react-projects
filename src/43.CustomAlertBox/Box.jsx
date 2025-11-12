import React from "react";

const Box = ({ type = "info", title, message, onClose }) => {
  const typeStyles = {
    success: "bg-green-100 text-green-800 border-green-400",
    error: "bg-red-100 text-red-800 border-red-400",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
    info: "bg-blue-100 text-blue-800 border-blue-400",
  };

  return (
    <div
      className={`fixed top-6 right-6 border px-5 py-4 rounded-xl shadow-lg w-[300px] transform transition-all duration-300 ease-out ${typeStyles[type]}`}
    >
      <div className="flex justify-between items-start">
        <div>
          {title && <h4 className="font-semibold text-lg mb-1">{title}</h4>}
          <p className="text-sm">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-3 text-lg font-bold hover:opacity-70"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Box;
