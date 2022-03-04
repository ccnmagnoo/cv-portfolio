import { Skill } from './Tech';

export default interface Initiative {
  name: string;
  description: string;
  skillUsed: Skill[];
}
