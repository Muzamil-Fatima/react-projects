import { useState } from "react";

export default function CounterApp() {
  const [Increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 w-3/5 mx-auto rounded-3xl p-8 shadow-xl mt-10">
      <h1 className="text-3xl font-extrabold text-fuchsia-700 bg-amber-300 p-4 rounded-xl shadow-md mb-8">
        Button Click Counter
      </h1>

      <div className="w-full flex justify-between items-center bg-amber-100 p-4 rounded-xl shadow-inner mb-6">
        <span className="text-xl font-semibold text-red-700">
          Count: {Increment}
        </span>
        <button
          onClick={() => setIncrement(Increment + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition duration-200"
        >
          Increment
        </button>
      </div>

      <div className="w-full flex justify-between items-center bg-amber-100 p-4 rounded-xl shadow-inner mb-6">
        <span className="text-xl font-semibold text-red-700">
          Count: {decrement}
        </span>
        <button
          onClick={() => setDecrement(decrement - 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition duration-200"
        >
          Decrement
        </button>
      </div>

      <div className="flex flex-col items-center bg-red-300 p-8 rounded-3xl shadow-lg w-full">
        <span className="bg-amber-200 p-6 text-4xl font-extrabold rounded-2xl shadow-md mb-6">
          Count: {count}
        </span>
        <div className="flex gap-4">
          <button
            disabled={count === 0}
            onClick={() => setCount(count - 1)}
            className={`px-6 py-2 rounded-2xl text-white shadow-md transition duration-200 ${
              count === 0
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition duration-200"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
