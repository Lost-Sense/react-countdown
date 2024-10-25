export type TypeCountDown = {
  minutes: number;
  seconds: number;
  start: boolean;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};
