import { useState, useEffect, useRef } from "react";

export function useTimer(initialTime = 0) {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef(null);

  const start = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(initialTime);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current); // cleanup on unmount
  }, []);

  return { time, start, stop, reset };
}
