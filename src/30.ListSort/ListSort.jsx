import { useState } from "react";

export default function ListSort() {
  const [number, setNumber] = useState([12, 13, 14, 45, 67, 89, 9, 2, 5, 7, 8]);
  const [names, setNames] = useState([
    "Ali",
    "Ahmad",
    "Muzamil",
    "Fatima",
    "Zubair",
    "Mughal",
  ]);
  const ascendingOrder = () => {
    setNumber([...number].sort((a, b) => a - b));
  };
  const descendingOrder = () => {
    setNumber([...number].sort((a, b) => b - a));
  };
  const aToZ = () => {
    setNames([...names].sort());
  };
  const zToA = () => {
    setNames([...names].sort().reverse());
  };
  return (
    <>
      <h3 className="text-3xl font-bold text-amber-300 m-6">List Sorting</h3>
      <h2 className="bg-red-300 px-2 py-2">Number</h2>
      <span>{number.join(", ")}</span>
      <div>
        <button
          onClick={ascendingOrder}
          className="bg-blue-400 m-4 px-2 py-2 rounded-2xl"
        >
          Ascending Order
        </button>
        <button
          onClick={descendingOrder}
          className="bg-blue-400 m-4 px-2 py-2 rounded-2xl"
        >
          Descending Order
        </button>
      </div>
      <h2 className="bg-red-300 px-2 py-2">Name</h2>
      <span>{names.join(", ")}</span>
      <div>
        <button
          onClick={zToA}
          className="bg-blue-400 m-4 px-2 py-2 rounded-2xl"
        >
          Z-A
        </button>
        <button
          onClick={aToZ}
          className="bg-blue-400 m-4 px-2 py-2 rounded-2xl"
        >
          A-Z
        </button>
      </div>
    </>
  );
}