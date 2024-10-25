import { useEffect } from 'react';
import s from './Progress.module.css';
import { TypeProgress } from './Progress.type';

export function Progress({
  seconds,
  minutes,
  value,
  setValue,
  start,
  setMinutes,
  setSeconds,
}: TypeProgress) {
  useEffect(() => {
    const totalSeconds = minutes * 60 + seconds;
    setValue(totalSeconds);
  }, [seconds, minutes, setValue]);

  useEffect(() => {
    setMinutes(Math.floor(value / 60));
    setSeconds(value % 60);
  }, [value]);

  const rangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  return (
    <input
      className={s.input}
      onChange={rangeChange}
      type="range"
      value={value}
      max="3599"
      step="15"
      disabled={start ? true : false}
    ></input>
  );
}
