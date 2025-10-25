import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(60); 
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState(60);

  // countdown logic
  useEffect(() => {
    let interval;
    
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);


  // format seconds -> mm:ss
  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  // set custom time
  const handleSetTime = () => {
    setTime(Number(input));
    setIsRunning(false);
  };

  return (
    <div
    className="p-2.5 border-red-400 text-center bg-gray-400 m-auto w-1/2 rounded-2xl"
      // style={{
      //   padding: "20px",
      //   maxWidth: "400px",
      //   margin: "auto",
      //   textAlign: "center",
      //   border: "1px solid #ccc",
      //   borderRadius: "10px",
      //   background : "gray",
      // }}
    >
      <h2>⏳ Countdown Timer</h2>

      {/* Display Time */}
      <h1 style={{ fontSize: "48px", margin: "20px 0" }}>{formatTime(time)}</h1>

      {/* Input to set custom time */}
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", marginRight: "8px", width: "120px" }}
      />
      <button onClick={handleSetTime}>Set Time (sec)</button>

      {/* Controls */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setIsRunning(true)}
          disabled={time === 0}
          style={{ margin: "5px" }}
        >
          Start
        </button>
        <button onClick={() => setIsRunning(false)} style={{ margin: "5px" }}>
          Pause
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTime(input);
          }}
          style={{ margin: "5px" }}
        >
          Reset
        </button>
      </div>

      {/* When time is up */}
      {time === 0 && <h3 style={{ color: "red" }}>⏰ Time’s Up!</h3>}
    </div>
  );
}
// ⏰
