import { useState } from "react";

export default function Capitalize() {
  const [isCapitalize, setIsCapitalize] = useState("");
  const handleChange = (e) => {
    setIsCapitalize(e.target.value.toUpperCase());
  };
  return (
    <>
      <div>
        <input
          value={isCapitalize}
          onChange={handleChange}
          type="text"
          className="border-2 h-14 w-64 pl-2 "
        />
      </div>
    </>
  );
}