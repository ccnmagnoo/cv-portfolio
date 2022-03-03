//configuration

import { Interest, Skill } from '../model/Tech';

export interface AppState {
  basicData: {
    name: string;
    profesion: string;
    description?: string /*no more than 3 lines*/;
  };

  skills?: Skill[];
  interest?: Interest[];
  hobbies?: { name: string; description: string; url: string }[];
  curriculum: [];
  social: [];
  certifications: [];
}
//init
export const initialState: Partial<AppState> = {
  basicData: { name: 'Carlos Campos', profesion: 'Mid Developer / Mechanical Engineer' },
  skills: [],
};

//
