import React from 'react';
import { AppState } from '../model/AppState.interface';
import { appReducer, darkMode, initialState, lightMode } from './reducer';

//app context
export const AppContext = React.createContext(initialState);

//provider
const Provider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  const init: Partial<AppState> = {
    ...state,
    appMode: 'dark',
    changeToDarkMode: () => dispatch(darkMode),
    changeToLightMode: () => dispatch(lightMode),
  };
  return <AppContext.Provider value={init}>{props.children}</AppContext.Provider>;
};

export default Provider;
