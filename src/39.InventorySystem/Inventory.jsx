import { useState } from "react";

export default function Inventory() {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);

  // Add product
  const addItem = () => {
    if (!name || qty <= 0 || price <= 0) return;
    setItems([
      ...items,
      { id: Date.now(), name, qty: Number(qty), price: Number(price) },
    ]);
    setName("");
    setQty("");
    setPrice("");
  };

  // Delete product
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Totals
  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);
  const totalValue = items.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">📦 Inventory Manager</h1>

      {/* Input Section */}
      <div className="flex flex-col gap-3 w-full max-w-md bg-gray-800 p-4 rounded-lg">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded-lg border border-gray-600 bg-gray-700 text-white"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="p-2 rounded-lg border border-gray-600 bg-gray-700 text-white"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 rounded-lg border border-gray-600 bg-gray-700 text-white"
        />
        <button
          onClick={addItem}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Add Item
        </button>
      </div>

      {/* Inventory List */}
      <div className="mt-6 w-full max-w-md bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Inventory</h3>
        {items.length === 0 ? (
          <p className="text-gray-400 text-center">No items yet</p>
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-700 p-2 rounded-lg"
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-300">
                    Qty: {item.qty} | Price: ${item.price}
                  </p>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Totals */}
      {items.length > 0 && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg text-center w-full max-w-md">
          <p>
            <span className="font-bold">{totalItems}</span> total items
          </p>
          <p>
            Inventory Value:{" "}
            <span className="font-bold text-green-400">${totalValue}</span>
          </p>
        </div>
      )}
    </div>
  );
}
