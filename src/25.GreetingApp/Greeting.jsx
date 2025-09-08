import { useState } from "react";

export default function Greeting() {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");
  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleGreet = () => {
    if (name.trim() === "") {
      setGreet("Please Enter Your Name");
    } else {
      setGreet(`Hello ${name}, Welcome to our site.`);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2 bg-pink-300 p-20 flex flex-col justify-center rounded-2xl gap-4">
        <h1 className="font-extrabold text-3xl text-center">Greet App</h1>
        <input
          placeholder="Enter Your Name"
          value={name}
          type="text"
          className="border-2 py-3 px-2 "
          onChange={handleInput}
        />
        <button onClick={handleGreet} className="bg-blue-500 p-4 ">
          Greet Me
        </button>
        {greet && <p className="text-2xl text-amber-700">{greet}</p>}
      </div>
    </div>
  );
}
