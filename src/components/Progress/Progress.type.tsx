export type TypeProgress = {
  minutes: number;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  start: boolean;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};
