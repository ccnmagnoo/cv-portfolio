import { Contact } from './Contact.inteface';
import Hobby from './Hobby.interface';
import Job from './Job.interface';
import { Skill, Interest } from './Tech';

export interface AppState {
  appMode: 'light' | 'dark';
  changeToDarkMode: () => void;
  changeToLightMode: () => void;
  basicData: {
    name: string | string[] | { [key: string]: string };
    profession: string;
    description?: string /*no more than 20 words*/;
  };
  contact: {
    [id: string]: Contact;
  };

  skills?: Skill[];
  interest?: Interest[];
  hobbies?: Hobby[];
  curriculum: Job[];
  social: Job[];
  certifications: {}[];
}
