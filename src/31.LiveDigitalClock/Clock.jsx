
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Stopwatch
  const [stopwatch, setStopwatch] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Timer
  const [timer, setTimer] = useState(60); // 1 minute default
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Stopwatch effect
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setStopwatch((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  // Format time
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (!is24Hour) {
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Format stopwatch / timer
  const formatSeconds = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
        borderRadius: "10px",
        textAlign: "center",
        background: darkMode ? "#222" : "#f4f4f4",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2>⏰ React Clock</h2>

      {/* Digital Clock */}
      <h1>{formatTime(time)}</h1>
      <p>{time.toDateString()}</p>

      <button onClick={() => setIs24Hour(!is24Hour)} style={{ margin: "5px" }}>
        Switch to {is24Hour ? "12-Hour" : "24-Hour"}
      </button>
      <button onClick={() => setDarkMode(!darkMode)} style={{ margin: "5px" }}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Stopwatch */}
      <div style={{ marginTop: "20px" }}>
        <h3>Stopwatch: {formatSeconds(stopwatch)}</h3>
        <button onClick={() => setIsRunning(true)} style={{ margin: "5px" }}>
          Start
        </button>
        <button onClick={() => setIsRunning(false)} style={{ margin: "5px" }}>
          Stop
        </button>
        <button onClick={() => setStopwatch(0)} style={{ margin: "5px" }}>
          Reset
        </button>
      </div>

      {/* Timer */}
      <div style={{ marginTop: "20px" }}>
        <h3>Timer: {formatSeconds(timer)}</h3>
        <button onClick={() => setIsTimerRunning(true)} style={{ margin: "5px" }}>
          Start
        </button>
        <button onClick={() => setIsTimerRunning(false)} style={{ margin: "5px" }}>
          Pause
        </button>
        <button
          onClick={() => {
            setTimer(60);
            setIsTimerRunning(false);
          }}
          style={{ margin: "5px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
