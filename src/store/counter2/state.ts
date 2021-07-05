export type State = {
  counterVar: number;
}

export function state(): State {
  return {
    counterVar: 0
  }
};
