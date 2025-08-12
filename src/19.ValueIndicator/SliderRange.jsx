import { useState } from "react";

export default function SliderRange() {
  const [value, setValue] = useState(50);
  return (
    <div className="flex flex-col justify-center items-center">
      <input
        value={value}
        type="range"
        max={100}
        min={0}
        className="w-2/4 mb-4"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="text-xl font-bold">Selected Value: {value}</div>
    </div>
  );
}
