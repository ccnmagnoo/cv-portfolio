import interest from '../assets/interest';
import skills from '../assets/skills';
import { AppState } from '../model/AppState.interface';

export const initialState: Partial<AppState> = {
  appMode: 'dark' /*initial app mode 🌞/🌙*/,
  basicData: {
    name: ['cARlos', 'R.', 'cAmpos', 'N.'],
    profesion: '<Mid Developer/> Mechanical Engineer & Data Analytics',
  },
  skills: skills,
  interest: interest,
  changeToDarkMode: () => {},
  changeToLightMode: () => {},
};
