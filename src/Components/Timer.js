import { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>Timer: {time}s</h1>
      <ToggleButton isRunning={isRunning} onToggle={() => setIsRunning(!isRunning)} />
    </div>
  );
};

export default Timer;
