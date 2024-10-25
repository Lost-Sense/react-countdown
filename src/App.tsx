import { useState } from 'react';
import './App.css';
import { Buttons } from './components/Buttons/Buttons';
import { CountDown } from './components/CountDown/CountDown';
import { Progress } from './components/Progress/Progress';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [start, setStart] = useState(false);
  const [value, setValue] = useState(minutes * 60 + seconds);
  return (
    <>
      <CountDown
        start={start}
        seconds={seconds}
        setSeconds={setSeconds}
        minutes={minutes}
        setMinutes={setMinutes}
        setStart={setStart}
      />
      <Progress
        seconds={seconds}
        minutes={minutes}
        setSeconds={setSeconds}
        setMinutes={setMinutes}
        start={start}
        value={value}
        setValue={setValue}
      />
      <Buttons
        start={start}
        seconds={seconds}
        minutes={minutes}
        setStart={setStart}
        setSeconds={setSeconds}
        setMinutes={setMinutes}
        setValue={setValue}
      />
    </>
  );
}

export default App;
