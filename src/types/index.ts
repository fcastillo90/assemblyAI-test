export interface InputState {
  firstEntry: string;
  secondEntry: string;
}
export interface InputValidation {
  firstEntry: boolean;
  secondEntry: boolean;
}

export enum AppRoutes {
  MAIN = '/',
  NO_MATCH = '*',
  RESULT = '/result',
}