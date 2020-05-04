import React, { useState, useRef } from "react";
import { Stopwatch } from "./Stopwatch";


function App() {
  const [timer, setTimer] = useState(0);
  const [times, setTimes] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const timerInterval = useRef();

  const onStart = () => {
    if (timerInterval.current) return;
    timerInterval.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 10);

    setIsActive(true);
  };

  const onStop = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
      setIsActive(false);
    }
  };

  const onReset = () => {
    setTimer(0);
  };

  const onLap = () => {
    setTimes([timer, ...times]);
    setTimer(0);
  };

  const onClear = () => {
    setTimes([]);
  };

  return (
    <Stopwatch
      onStart={onStart}
      onStop={onStop}
      onLap={onLap}
      onReset={onReset}
      onClear={onClear}
      timer={timer}
      times={times}
      isActive={isActive}
    />
  );
}

export default App;