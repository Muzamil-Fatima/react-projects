import { useState } from "react";
export default function Counter() {
  const [Increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 w-1/2 rounded-2xl">
      <div>
        <h1 className="text-2xl font-bold bg-amber-300 p-2.5 m-6 ">
          Button Click Counter
        </h1>
      </div>
      <div className="px-8 py-2 h-14 text-xl font-bold text-red-700 bg-amber-100 m-6 flex justify-center items-center">
        <label htmlFor="">Count: {Increment}</label>
        <button
          value={Increment}
          onClick={() => setIncrement(Increment + 1)}
          className="bg-blue-600 p-2 m-2 rounded-2xl"
        >
          Increment
        </button>
      </div>
      <div className="px-8 py-2 h-14 text-xl font-bold text-red-700 bg-amber-100 m-6 flex justify-center items-center">
        <label htmlFor="">Count: {decrement}</label>
        <button
          value={decrement}
          onClick={() => setDecrement(decrement - 1)}
          className="bg-blue-600 p-2 m-2 rounded-2xl"
        >
          Decrement
        </button>
      </div>
      <div className="flex flex-col bg-red-300 p-10  rounded-2xl">
        <label
          htmlFor=""
          className="bg-amber-200 p-4  text-3xl font-extrabold rounded-2xl m-4"
        >
          Count: {count}
        </label>
        <div>
          <button
            disabled={count == 0}
            value={count}
            onClick={() => setCount(count - 1)}
            className={` p-2 m-2 rounded-2xl ${
              count === 0 ? "bg-blue-300" : "bg-blue-600"
            }  `}
          >
            Decrement
          </button>
          <button
            value={count}
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 p-2 m-2 rounded-2xl"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
