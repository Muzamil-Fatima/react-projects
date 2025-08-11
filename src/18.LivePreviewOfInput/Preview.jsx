import { useState } from "react";

export default function Preview() {
  const [isInput, setIsInput] = useState();
  const handleInput = (e) => {
    setIsInput(e.target.value);
  };
  return (
    <>
      <input
        onChange={handleInput}
        value={isInput}
        type="text"
        className="h-14 w-64  border-2"
      />
      <p>{isInput}</p>
    </>
  );
}
