import { Skill, SkillLevel } from '../model/Tech';

const skills: Skill[] = [
  /*base*/
  new Skill(
    SkillLevel.expert,
    'Typescript/JS',
    'developer',
    'TS',
    'logos/typescript-icon'
  ),
  new Skill(SkillLevel.skilled, 'Kotlin', 'developer', 'KT', 'logos/kotlin'),
  new Skill(SkillLevel.average, 'Python', 'developer', 'Py', 'logos/python'),
  new Skill(SkillLevel.basic, 'Git', 'developer', 'Git', 'logos/git-icon'),
  /*Fron-end*/
  new Skill(
    SkillLevel.skilled,
    'HTML5 && CSS3',
    'front-end',
    'Html',
    'vscode-icons/file-type-html'
  ),
  // new Skill(SkillLevel.skilled, 'CSS3', 'front-end', 'CSS', 'vscode-icons/file-type-css'),
  new Skill(
    SkillLevel.specialist,
    'ReacJs',
    'front-end',
    'Rjs',
    'vscode-icons/file-type-reactjs'
  ),
  new Skill(SkillLevel.average, 'NextJs', 'front-end', 'Njs', 'logos/nextjs-icon'),
  /*HTML*/
  new Skill(SkillLevel.specialist, 'MaterialUI', 'front-end', 'Mui', 'logos/material-ui'),
  new Skill(SkillLevel.average, 'Bootstrap', 'front-end', 'Bs', 'logos/bootstrap'),
  /*Backend*/
  new Skill(SkillLevel.specialist, 'Firebase', 'back-end', 'Fs', 'logos/firebase'),
  new Skill(
    SkillLevel.average,
    'MongoDb',
    'back-end',
    'Mdb',
    'vscode-icons/file-type-mongo'
  ),
  new Skill(SkillLevel.basic, 'PostgreSQL', 'back-end', 'Psql', 'logos/postgresql'),
  new Skill(SkillLevel.average, 'REST Express', 'back-end', 'Ex', 'simple-icons/express'),
  /*others*/
  new Skill(
    SkillLevel.specialist,
    'PowerBi/Dax',
    'data-analytics',
    'Bi',
    'simple-icons/powerbi'
  ),
  new Skill(
    SkillLevel.average,
    'Pandas && Numby',
    'data-analytics',
    'Numpy',
    'logos/numpy'
  ),
];

export default skills;
