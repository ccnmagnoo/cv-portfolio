//configuration

import interest from '../assets/interest';
import skills from '../assets/skills';
import { AppState } from '../model/AppState.interface';

//init

//Actions Types
enum ActionType {
  darkMode = 'DARK_MODE',
  lightMode = 'LIGHT_MODE',
}
export type Action = {
  type: ActionType;
  payload: 'dark' | 'light';
};
//Actions Payloads
export const darkMode: Action = {
  type: ActionType.darkMode,
  payload: 'dark',
};
export const lightMode: Action = {
  type: ActionType.lightMode,
  payload: 'light',
};

//Reducer
export const appReducer: React.Reducer<Partial<AppState>, Action> = (
  state: Partial<AppState>,
  action: Action
) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.darkMode: {
      return { ...state, appMode: payload };
    }
    case ActionType.lightMode: {
      return { ...state, appMode: payload };
    }
    default: {
      return state;
    }
  }
};
