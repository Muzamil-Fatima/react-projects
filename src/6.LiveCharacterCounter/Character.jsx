import { useState } from "react";

export default function Character() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="text-2xl">
        <textarea
          maxLength={600}
          onChange={(e) => setCount(e.target.value.length)}
          name=""
          id=""
          className="border-2 border-dashed border-amber-400 text-white bg-gray w-full"
        ></textarea>
        <p className="text-[15px] absolute right-0 mr-12">{count}/600</p>
      </div>
    </>
  );
}