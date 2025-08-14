import { useState } from "react";

export default function Mode() {
  const [color, setColor] = useState();
  return (
    <div
      className={`text-2xl border-2 border-dashed p-4 flex flex-col justify-center items-center ${
        color === "black" ? "bg-black text-white" : "bg-white text-black"
      } w-full rounded-2xl`}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus
        assumenda temporibus vero rerum, alias ea molestias repellendus dolore
        magnam aspernatur nam! Sunt quam ratione quidem exercitationem molestias
        id itaque tempore eveniet! Amet, pariatur?
      </p>
      <button
        onClick={() => setColor("white")}
        className="bg-amber-400 hover:bg-amber-700 h-14 w-3xs rounded-2xl m-2 "
      >
        light
      </button>
      <button
        onClick={() => setColor("black")}
        className="bg-amber-400 hover:bg-amber-700 h-14 w-3xs rounded-2xl"
      >
        Dark
      </button>
    </div>
  );
}
