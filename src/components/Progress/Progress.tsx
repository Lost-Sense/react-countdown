import { useEffect, useState } from 'react';
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
  const [totalValue, setTotalValue] = useState(1);

  useEffect(() => {
    const totalSeconds = minutes * 60 + seconds;
    setValue(totalSeconds);
  }, [seconds, minutes, setValue]);

  useEffect(() => {
    setMinutes(Math.floor(value / 60));
    setSeconds(value % 60);
  }, [value]);

  useEffect(() => {
    if (!start) {
      const totalValues = value;
      setTotalValue(totalValues);
    }
    if (value === 0) {
      const totalValues = 0;
      setTotalValue(totalValues);
    }
  }, [value, start]);

  const rangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  return (
    <>
      <input
        className={s.input}
        onChange={rangeChange}
        type="range"
        value={value}
        max="3599"
        step="15"
        disabled={start ? true : false}
      ></input>
      <div className={s.percent}>
        {value !== 0 ? ((value / totalValue) * 100).toFixed(2) + ' %' : 'Done'}
      </div>
    </>
  );
}
