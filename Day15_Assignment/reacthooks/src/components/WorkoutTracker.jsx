import React from "react";
import { useTimer } from "../hooks/useTimer";

export default function WorkoutTracker() {
  const { time, start, stop, reset } = useTimer(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Workout Tracker</h2>
      <p>Time: {time} seconds</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
