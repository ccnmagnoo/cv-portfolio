import { Skill, SkillLevel } from '../model/Tech';

const skills: Skill[] = [
  /*Languages*/
  new Skill(SkillLevel.expert, 'Typescript', 'Javascript', 'TS', 'logos/typescript-icon'),
  new Skill(SkillLevel.skilled, 'Kotlin', 'Java/Android', 'KT', 'logos/kotlin'),
  new Skill(SkillLevel.average, 'Python', 'Numpy/Pandas', 'Py', 'logos/python'),
  /*Fron-end*/
  new Skill(
    SkillLevel.skilled,
    'ReacJs',
    'Hooks',
    'Rjs',
    'vscode-icons/file-type-reactjs'
  ),
  new Skill(SkillLevel.average, 'NextJs', 'React FrameWork', 'Njs', 'logos/nextjs-icon'),
  /*HTML*/
  new Skill(SkillLevel.specialist, 'MaterialUI', 'UI', 'Mui', 'logos/material-ui'),
  new Skill(SkillLevel.average, 'Bootstrap', 'UI', 'Bs', 'logos/bootstrap'),
  new Skill(SkillLevel.skilled, 'HTML5', 'Web', 'Html', 'vscode-icons/file-type-html'),
  new Skill(SkillLevel.skilled, 'CSS3', 'Web', 'CSS', 'vscode-icons/file-type-css'),
  /*Backend*/
  new Skill(SkillLevel.specialist, 'Firebase', 'Firestore/NoSQL', 'Fs', 'logos/firebase'),
  new Skill(
    SkillLevel.average,
    'MongoDb',
    'Mongoose/NoSQL',
    'Mdb',
    'vscode-icons/file-type-mongo'
  ),
  new Skill(SkillLevel.basic, 'PostgreSQL', 'SQL', 'Psql', 'logos/postgresql'),
  /*others*/
  new Skill(SkillLevel.average, 'Express', 'API REST', 'Ex', 'simple-icons/express'),
  new Skill(SkillLevel.basic, 'Git', 'GitHub', 'Git', 'logos/git-icon'),
];

export default skills;
