
import { ShoppingCart } from "lucide-react"; 
import { useState } from "react";

export default function WithLibrary() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="flex items-center gap-6">
      {/* Cart Icon with badge */}
      <div className="relative inline-block">
        <ShoppingCart className="w-10 h-10 " />

        {/* Badge */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setCartCount(cartCount + 1)}
          className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          +
        </button>
        <button
          onClick={() => setCartCount(cartCount > 0 ? cartCount - 1 : 0)}
          className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          -
        </button>
      </div>
    </div>
  );
}

