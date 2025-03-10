import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(120); // Start from 2 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <div className="text-center mt-5">
      <h2>Countdown Timer</h2>
      <h1>
        {String(Math.floor(time / 60)).padStart(2, "0")}:
        {String(time % 60).padStart(2, "0")}
      </h1>
      <button className="btn btn-success me-2" onClick={() => setIsRunning(true)} disabled={isRunning}>
        Start
      </button>
      <button className="btn btn-danger" onClick={() => setIsRunning(false)}>
        Stop
      </button>
    </div>
  );
};

export default CountdownTimer;
