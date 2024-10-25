export type TypeButtons = {
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  minutes: number;
};
