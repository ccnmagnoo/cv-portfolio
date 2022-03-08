import { Skill, SkillLevel } from '../model/Tech';

const skills: Skill[] = [
  /*Languages*/
  new Skill(SkillLevel.expert, 'Typescript', 'Javascript', 'TS', 'typescript-icon'),
  new Skill(SkillLevel.skilled, 'Python', 'Numpy/Pandas', 'Py', 'python'),
  new Skill(SkillLevel.average, 'Kotlin', 'Java/Android', 'KT', 'kotlin'),
  /*Fron-end*/
  new Skill(SkillLevel.skilled, 'ReacJs', 'Hooks', 'Rjs', 'file-type-reactjs'),
  new Skill(SkillLevel.average, 'NextJs', 'React FrameWork', 'Njs', 'nextjs-icon'),
  /*Databases*/
  new Skill(SkillLevel.specialist, 'Firebase', 'Firestore/NoSQL', 'Fs', 'firebase'),
  new Skill(
    SkillLevel.average,
    'MongoDb',
    'Mongoose/NoSQL',
    'Mdb',
    'folder-type-mongodb'
  ),
  new Skill(SkillLevel.basic, 'PostgreSQL', 'SQL', 'Psql', 'postgresql'),
  /*HTML*/
  new Skill(SkillLevel.specialist, 'MaterialUI', 'UI', 'Mui', 'material-ui'),
  new Skill(SkillLevel.average, 'Bootstrap', 'UI', 'Bs', 'bootstrap'),
  new Skill(SkillLevel.skilled, 'HTML5', 'Web', 'Html', 'file-type-html'),
  new Skill(SkillLevel.skilled, 'CSS3', 'Web', 'CSS', 'file-type-css'),
  /*others*/
  new Skill(SkillLevel.average, 'Express', 'API REST', 'Express', 'express'),
  new Skill(SkillLevel.basic, 'Git', 'GitHub', 'Git', 'git-icon'),
];

export default skills;
