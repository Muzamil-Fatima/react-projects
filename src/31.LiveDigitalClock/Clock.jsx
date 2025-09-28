import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [is12Hour, setIs12Hour] = useState(true);
  const [mode, setMode] = useState(true);

  const [sWTime, setSWTime] = useState(0);
  const [isRun, setIsRun] = useState(false);

  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
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
  //  stopwatch useEffect

  useEffect(() => {
    let interval;
    if (isRun) {
      interval = setInterval(() => {
        setSWTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRun]);
  const handleStart = () => setIsRun(true);
  const handleStop = () => setIsRun(false);
  const handleReset = () => {
    setIsRun(false);
    setSWTime(0);
  };

  const formatStopWatch = () => {
    const minutes = Math.floor(sWTime / 60);
    const second = sWTime % 60;
    return `${minutes.toString().padStart(2, "0")}:${second
      .toString()
      .padStart(2, "0")}`;
  };
  // Timer useEffect
  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleTimerStart = () => setIsRunning(true);
  const handleTimerPause = () => setIsRunning(false);
  const handleTimeReset = () => {
    setIsRunning(false);
    setTimer(60);
  };
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, "0")}: ${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen rounded-4xl px-4 sm:px-6 md:px-12 lg:px-20 ${
        mode ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold m-4">
        ⏰ React Clock
      </h2>
      <div className="space-y-4">
        <p className="text-lg sm:text-xl md:text-2xl text-amber-600 font-bold flex justify-center">
          {formattedTime}
        </p>
        <p className="text-base sm:text-lg md:text-xl ">
          {time.toDateString()}
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <p className="text-red-600 font-bold">Switch to</p>
          <button
            onClick={() => setIs12Hour(!is12Hour)}
            className="bg-amber-300 px-3 py-2 rounded-2xl hover:bg-blue-500"
          >
            {is12Hour ? "24-Hour" : "12-Hour"}
          </button>
          <button
            onClick={() => setMode(!mode)}
            className="bg-amber-300 px-4 py-1.5 ml-2 rounded-2xl hover:bg-blue-500"
          >
            {mode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
        <p className="text-red-600 font-bold m-4">
          Stopwatch: {formatStopWatch()}
        </p>
        <button
          onClick={handleStart}
          className="bg-amber-300 px-3 py-2 rounded-lg hover:bg-blue-500"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-amber-300 px-3 py-2 rounded-lg hover:bg-blue-500"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="bg-amber-300 px-3 py-2 rounded-2xl hover:bg-blue-500"
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
        <p className="text-red-600 font-bold m-4">Timer: {formatTimer()}</p>
        <button
          onClick={handleTimerStart}
          className="bg-amber-300 px-3 py-2  rounded-2xl hover:bg-blue-500"
        >
          Start
        </button>
        <button
          onClick={handleTimerPause}
          className="bg-amber-300 px-3 py-2  rounded-2xl hover:bg-blue-500"
        >
          Pause
        </button>
        <button
          onClick={handleTimeReset}
          className="bg-amber-300 px-3 py-2 rounded-2xl hover:bg-blue-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
