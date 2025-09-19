import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function CartCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="relative w-fit">
        <ShoppingCart className="w-14 h-16" />
        <span className="bg-red-500 w-6 h-6 rounded-2xl px-1 flex justify-center items-center absolute -top-2 -right-2">
          {count}
        </span>
      </div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-600 px-6 py-3 rounded-2xl text-2xl font-extrabold m-2"
        >
          +
        </button>
        <button
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
          className={`bg-red-600 px-6 py-3 rounded-2xl text-2xl font-extrabold m-2 `}
        >
          -
        </button>
      </div>
    </>
  );
}
