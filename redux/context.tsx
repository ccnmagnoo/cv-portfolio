import React from 'react';
import { AppState } from '../model/AppState.interface';
import { initialState } from '../assets/appState';
import { appReducer, darkMode, lightMode } from './reducer';

//app context
export const AppContext = React.createContext(initialState);

//provider
const Provider: React.FC = (props) => {
  //useReducer
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  //intial State + dispacher
  const init: Partial<AppState> = {
    ...state,
    changeToDarkMode: () => dispatch(darkMode),
    changeToLightMode: () => dispatch(lightMode),
  };
  return <AppContext.Provider value={init}>{props.children}</AppContext.Provider>;
};

export default Provider;
