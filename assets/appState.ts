import interest from './interest';
import skills from './skills';
import { AppState } from '../model/AppState.interface';
import basicData from './basicData';
import { contacts } from './contacts';

export const initialState: Partial<AppState> = {
  appMode: 'dark' /*initial app mode 🌞/🌙*/,
  basicData: basicData,
  skills: skills,
  interest: interest,
  contact: contacts,
  changeToDarkMode: () => {},
  changeToLightMode: () => {},
};
