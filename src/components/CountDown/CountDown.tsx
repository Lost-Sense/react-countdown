import { styled } from '@mui/material';
import Input from '@mui/material/Input';
import s from './CountDown.module.css';
import { useEffect, useMemo } from 'react';
import { TypeCountDown } from './CountDown.type';

export function CountDown({
  seconds,
  minutes,
  setSeconds,
  setMinutes,
  start,
  setStart,
}: TypeCountDown) {
  const InputTime = useMemo(() => {
    return styled(Input)({
      backgroundColor: 'none',
      fontSize: '30px',
      width: '100px',
      textAlign: 'center',
    });
  }, []);

  useEffect(() => {
    if (!start) return;
    const interval = setInterval(() => {
      if (minutes !== 0 || seconds !== 0) {
        if (seconds !== 0) {
          setSeconds(seconds - 1);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    if (minutes === 0 && seconds === 0) setStart(false);
    return () => clearInterval(interval);
  }, [start, seconds, minutes]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length > 2 || value === '0') return;
    else if (name === 'seconds') {
      const newSeconds = Math.max(0, Math.min(59, Number(value)));
      setSeconds(newSeconds);
    } else if (name === 'minutes') {
      const newMinutes = Math.max(0, Math.min(59, Number(value)));
      setMinutes(newMinutes);
    }
  };

  return (
    <div className={s.countDown}>
      <InputTime
        className={s.buttonss}
        name="minutes"
        type="number"
        onChange={inputChange}
        value={minutes}
        disabled={start ? true : false}
      />
      {':'}
      <InputTime
        name="seconds"
        type="number"
        value={seconds}
        onChange={inputChange}
        disabled={start ? true : false}
      />
    </div>
  );
}
