import { Skill, SkillLevel as Level } from '../model/Tech';

const skills: Skill[] = [
  /*base*/
  new Skill(
    Level.expert,
    'Typescript/JS',
    'developer',
    'TS',
    'logos/typescript-icon',
    new Date(2022, 2, 1),
    'Current favorite language. I prefer it over JS and a blame Kotlin for that. It is familiar & comfortable for me, and his lint saved me a lot of debuggin`s hours.'
  ),
  new Skill(
    Level.skilled,
    'Kotlin',
    'developer',
    'KT',
    'logos/kotlin',
    new Date(2019, 6, 6),
    'Second language, I learned this over Java because his lovely resemblance to Python. I started into POO world and hard typing thanks to this.'
  ),
  new Skill(
    Level.average,
    'Python',
    'developer',
    'Py',
    'logos/python',
    new Date(2017, 3, 1),
    "Python's my first love, opened my eyes when i needed to evolve from VBA💘, helping me to solve a lot of engineering problems giving me a powefull tools."
  ),
  new Skill(
    Level.basic,
    'Git',
    'developer',
    'Git',
    'logos/git-icon',
    new Date(2020, 7, 13),
    'Necesary basic skill, I know how to use just basics; you know push pull, fork & commit'
  ),
  /*Fron-end*/
  new Skill(
    Level.skilled,
    'HTML5 && CSS3',
    'front-end',
    'Html',
    'vscode-icons/file-type-html',
    new Date(2022, 1, 6)
  ),
  // new Skill(SkillLevel.skilled, 'CSS3', 'front-end', 'CSS', 'vscode-icons/file-type-css'),
  new Skill(
    Level.specialist,
    'ReacJs',
    'front-end',
    'Rjs',
    'vscode-icons/file-type-reactjs',
    new Date(2021, 12, 17)
  ),
  new Skill(
    Level.average,
    'NextJs',
    'front-end',
    'Njs',
    'logos/nextjs-icon',
    new Date(2022, 2, 1)
  ),
  /*HTML*/
  new Skill(Level.specialist, 'MaterialUI', 'front-end', 'Mui', 'logos/material-ui'),
  new Skill(Level.average, 'Bootstrap', 'front-end', 'Bs', 'logos/bootstrap'),
  /*Backend*/
  new Skill(Level.specialist, 'Firebase', 'back-end', 'Fs', 'logos/firebase'),
  new Skill(
    Level.average,
    'MongoDb',
    'back-end',
    'Mdb',
    'vscode-icons/file-type-mongo',
    new Date(2022, 1, 6)
  ),
  new Skill(
    Level.basic,
    'PostgreSQL',
    'back-end',
    'Psql',
    'logos/postgresql',
    new Date(2021, 3, 31)
  ),
  new Skill(
    Level.average,
    'REST Express',
    'back-end',
    'Ex',
    'simple-icons/express',
    new Date(2022, 1, 6)
  ),
  /*others*/
  new Skill(
    Level.specialist,
    'PowerBi/Dax',
    'data-analytics',
    'Bi',
    'simple-icons/powerbi',
    new Date(2022, 2, 26)
  ),
  new Skill(
    Level.average,
    'Pandas && Numby',
    'data-analytics',
    'Numpy',
    'logos/numpy',
    new Date(2022, 2, 26)
  ),
];

export default skills;
