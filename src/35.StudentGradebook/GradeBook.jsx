import { useState } from "react";

export default function GradeBook() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [records, setRecords] = useState([]);

  // Add student record
  const addRecord = () => {
    if (!name || !subject || !marks) return;
    setRecords([
      ...records,
      { id: Date.now(), name, subject, marks: Number(marks) },
    ]);
    setName("");
    setSubject("");
    setMarks("");
  };

  // Calculate average marks
  const getAverage = () => {
    if (records.length === 0) return 0;
    const total = records.reduce((acc, r) => acc + r.marks, 0);
    return (total / records.length).toFixed(2);
  };

  // Get grade based on average
  const getGrade = (avg) => {
    if (avg >= 90) return "A+";
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    if (avg >= 50) return "D";
    return "F";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">📘 Grade Book</h1>

      {/* Input Section */}
      <div className="flex flex-col gap-3 w-full max-w-md bg-gray-800 p-4 rounded-lg">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded-lg border border-gray-600 bg-gray-700 text-white"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 rounded-lg border border-gray-600 bg-gray-700 text-white"
        />
        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="p-2 rounded-lg border border-gray-600 bg-gray-700 text-white"
        />
        <button
          onClick={addRecord}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Add Record
        </button>
      </div>

      {/* Records List */}
      <div className="mt-6 w-full max-w-md">
        {records.length === 0 ? (
          <p className="text-gray-400 text-center">No records yet</p>
        ) : (
          <ul className="space-y-2">
            {records.map((rec) => (
              <li
                key={rec.id}
                className="flex justify-between bg-gray-800 p-3 rounded-lg text-white"
              >
                <span>
                  {rec.name} - {rec.subject}
                </span>
                <span>{rec.marks}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Average + Grade */}
      {records.length > 0 && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg text-white text-center w-full max-w-md">
          <p className="text-lg">
            Average Marks: <span className="font-bold">{getAverage()}</span>
          </p>
          <p className="text-lg">
            Grade:{" "}
            <span className="font-bold text-green-400">
              {getGrade(getAverage())}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
