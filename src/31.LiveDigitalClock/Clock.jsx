import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [is12Hour, setIs12Hour] = useState(true);
  const [mode, setMode] = useState(true);
  // update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });
  // format time as hour:minute: second
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: is12Hour,
  });
  return (
    <div className={`flex flex-col justify-center items-center min-h-screen rounded-4xl ${mode ? "bg-white text-black": "bg-gray-800 text-white"}`}>
      <h2 className="text-2xl font-extrabold m-8">⏰ React Clock</h2>
      <div className="space-y-4">
        <p className="text-2xl text-amber-600 font-bold flex">{formattedTime}</p>
        <p className="text-2xl ">{time.toDateString()}</p>
        <div className="flex">
          <p className="text-red-600 font-bold">Switch to</p>
          <button
            onClick={() => setIs12Hour(!is12Hour)}
            className="bg-amber-300 px-4 py-1.5 ml-2 rounded-2xl hover:bg-blue-500"
          >
            {is12Hour ? "24-Hour" : "12-Hour"}
          </button>
          <button
          onClick={()=> setMode(!mode)}
          className="bg-amber-300 px-4 py-1.5 ml-2 rounded-2xl hover:bg-blue-500">
            {mode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
      <div className="">
        <p>Stopwatch: {}</p>
        <button className="bg-amber-300 px-4 py-1.5 ml-2 rounded-2xl hover:bg-blue-500">
          Start
        </button>
        <button className="bg-amber-300 px-4 py-1.5 ml-2 rounded-2xl hover:bg-blue-500">
          Stop
        </button>
        <button className="bg-amber-300 px-4 py-1.5 ml-2 rounded-2xl hover:bg-blue-500">
          Reset
        </button>
      </div>
      <div>
        <p>Timer: {}</p>
        <button className="bg-amber-300 px-4 py-1.5 ml-2 rounded-2xl hover:bg-blue-500">
          Start
        </button>
        <button className="bg-amber-300 px-4 py-1.5 ml-2 rounded-2xl hover:bg-blue-500">
          Pause
        </button>
        <button className="bg-amber-300 px-4 py-1.5 ml-2 rounded-2xl hover:bg-blue-500">
          Reset
        </button>
      </div>
    </div>
  );
}