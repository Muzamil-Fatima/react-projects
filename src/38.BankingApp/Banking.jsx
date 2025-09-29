import { useState } from "react";

export default function Banking() {
  const [balance, setBalance] = useState(1000); // initial balance
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  // Deposit
  const deposit = () => {
    if (!amount || amount <= 0) return;
    setBalance(balance + Number(amount));
    setTransactions([
      ...transactions,
      { id: Date.now(), type: "Deposit", amount: Number(amount) },
    ]);
    setAmount("");
  };

  // Withdraw
  const withdraw = () => {
    if (!amount || amount <= 0 || amount > balance) return;
    setBalance(balance - Number(amount));
    setTransactions([
      ...transactions,
      { id: Date.now(), type: "Withdraw", amount: Number(amount) },
    ]);
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">🏦 Mini Banking App</h1>

      {/* Balance */}
      <div className="bg-gray-800 p-4 rounded-lg text-center mb-6 w-full max-w-md shadow-lg">
        <p className="text-lg">Current Balance</p>
        <h2 className="text-2xl font-bold text-green-400">${balance}</h2>
      </div>

      {/* Input Section */}
      <div className="flex gap-2 w-full max-w-md mb-6">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="flex-1 p-2 rounded-lg border border-gray-600 bg-gray-800 text-white"
        />
        <button
          onClick={deposit}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
        >
          Deposit
        </button>
        <button
          onClick={withdraw}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
        >
          Withdraw
        </button>
      </div>

      {/* Transactions */}
      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-3">Transaction History</h3>
        {transactions.length === 0 ? (
          <p className="text-gray-400 text-center">No transactions yet</p>
        ) : (
          <ul className="space-y-2">
            {transactions.map((t) => (
              <li
                key={t.id}
                className="flex justify-between p-2 bg-gray-700 rounded-lg"
              >
                <span>{t.type}</span>
                <span
                  className={`${
                    t.type === "Deposit" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  ${t.amount}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
