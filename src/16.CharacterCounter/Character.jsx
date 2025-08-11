import { useState } from "react";

export default function Character() {
  const [isCount, setIsCount] = useState(0);
  return (
    <>
      <textarea
      maxLength={500}
        onChange={(e) => setIsCount(e.target.length)}
        name=""
        id=""
      ></textarea>
      <p>{isCount}/600</p>
    </>
  );
}
