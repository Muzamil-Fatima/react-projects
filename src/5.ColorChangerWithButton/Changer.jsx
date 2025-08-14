import { useState } from "react";

export default function Changer() {
  const [color, setColor] = useState("blue");

  const colors = [
    { name: "Red", class: "bg-red-500" },
    { name: "Yellow", class: "bg-yellow-500" },
    { name: "Green", class: "bg-green-500" },
    { name: "Purple", class: "bg-purple-500" },
    { name: "Teal", class: "bg-teal-500" },
    { name: "Orange", class: "bg-orange-500" },
    { name: "Pink", class: "bg-pink-500" },
  ];
  return (
    <>
      <div
        className={`w-full h-2/5 ${
          colors.find((c) => c.name === color)?.class
        }`}
      >
        {colors.map((c) => (
          <button
            className={`px-2 py-3 m-2 text-2xl font-bold text-white border-2 ${c.class}`}
            key={c.name}
            onClick={() => setColor(c.name)}
          >
            {c.name}
          </button>
        ))}
      </div>
    </>
  );
}

