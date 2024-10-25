import { useMemo } from 'react';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import s from './Buttons.module.css';
import { TypeButtons } from './Buttons.type';

export function Buttons({
  start,
  setStart,
  setSeconds,
  setMinutes,
  setValue,
  seconds,
  minutes,
}: TypeButtons) {
  const ButtonClick = useMemo(() => {
    return styled(Button)({
      border: '2px solid black',
      color: 'black',
      width: '100px',
    });
  }, []);

  const handleClick = () => {
    setStart(!start);
  };

  const reset = () => {
    if (start) {
      setStart(false);
      return;
    }
    setSeconds(0);
    setMinutes(0);
    setValue(0);
    setStart(false);
  };

  // }

  return (
    <div className={s.buttons}>
      <ButtonClick
        onClick={handleClick}
        disabled={seconds === 0 && minutes === 0}
      >
        {start ? 'PAUSE' : 'START'}
      </ButtonClick>
      <ButtonClick onClick={reset} disabled={seconds === 0 && minutes === 0}>
        RESET
      </ButtonClick>
    </div>
  );
}
