import Hobby from './Hobby.interface';
import Job from './Job.interface';
import { Skill, Interest } from './Tech';

export interface AppState {
  appMode: 'light' | 'dark';
  changeToDarkMode: () => void;
  changeToLightMode: () => void;
  basicData: {
    name: string | string[] | { [key: string]: string };
    profesion: string;
    description?: string /*no more than 3 lines*/;
  };
  contact: {
    email: string;
    phone: string;
    linkedIn: string;
    github: string;
    freecodecamp: string;
  };

  skills?: Skill[];
  interest?: Interest[];
  hobbies?: Hobby[];
  curriculum: Job[];
  social: Job[];
  certifications: {}[];
}
