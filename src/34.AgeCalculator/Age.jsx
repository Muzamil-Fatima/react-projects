import { useState } from "react";

export default function Age() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust if negative
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">🎂 Age Calculator</h1>

      {/* Date Input */}
      <div className="flex gap-2 w-full max-w-sm">
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="flex-1 p-2 rounded-lg outline-none border border-gray-600 bg-gray-800 text-white"
        />
        <button
          onClick={calculateAge}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Calculate
        </button>
      </div>

      {/* Result */}
      {age && (
        <div className="mt-6 text-center bg-gray-800 p-4 rounded-lg shadow-lg text-white">
          <p className="text-lg">
            You are <span className="font-bold">{age.years}</span> years,{" "}
            <span className="font-bold">{age.months}</span> months, and{" "}
            <span className="font-bold">{age.days}</span> days old.
          </p>
        </div>
      )}
    </div>
  );
}