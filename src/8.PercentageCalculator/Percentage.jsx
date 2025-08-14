import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Percentage() {
  const [total, setTotal] = useState("");
  const [obtained, setObtained] = useState("");
  const [percentage, setPercentage] = useState(null);

  function handleCalculation() {
    if (!obtained) {
      toast.error("Please Fill Obtained Marks");
      return;
    }
    if (!total) {
      toast.error("Please Fill Total Marks");
      return;
    }
    if (Number(total) === 0) {
      toast.error("Total Marks can't be zero");
      return;
    }
    if (Number(obtained) > Number(total)) {
      toast.error("Obtained Marks should be less then total marks ");
      return;
    }

    let totals = (Number(obtained) / Number(total)) * 100;
    setPercentage(totals);
    toast.success("percentage calculated");
  }

  return (
    <div className="bg-amber-200 flex flex-col items-center justify-center w-1/2 rounded-2xl p-10 mx-auto mt-20 shadow-lg">
      <h1 className="text-4xl text-fuchsia-700 font-bold mb-8">
        Percentage Calculator
      </h1>
      <div className="flex flex-col w-full mb-6">
        <label className="mb-2 font-semibold text-gray-700" htmlFor="obtained">
          Obtained Marks
        </label>
        <input
          id="obtained"
          value={obtained}
          onChange={(e) => setObtained(e.target.value)}
          type="number"
          placeholder="Enter Obtained Marks"
          required
          className="p-3 text-black font-bold rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        />
      </div>
      <div className="flex flex-col w-full mb-6">
        <label className="mb-2 font-semibold text-gray-700" htmlFor="total">
          Total Marks
        </label>
        <input
          id="total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          type="number"
          placeholder="Enter Total Marks"
          required
          className="p-3 text-black font-bold rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        />
      </div>
      {percentage !== null && (
        <div className="mb-6 text-xl font-semibold text-fuchsia-700">
          Percentage: {percentage.toFixed(2)}%
        </div>
      )}

      <button
        onClick={handleCalculation}
        className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-8 rounded-md shadow-md transition duration-300"
      >
        Calculate
      </button>

      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#8b5cf6",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#8b5cf6",
            },
          },
          error: {
            style: {
              background: "#f87171",
              color: "#fff",
            },
          },
        }}
      />
    </div>
  );
}
