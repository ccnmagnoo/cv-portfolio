//configuration

import interest from '../assets/interest';
import skills from '../assets/skills';
import { AppState } from '../model/AppState.interface';

//init
export const initialState: Partial<AppState> = {
  basicData: { name: 'Carlos Campos', profesion: 'Mid Developer / Mechanical Engineer' },
  skills: skills,
  interest: interest,
};

//
