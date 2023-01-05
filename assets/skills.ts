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
    "Current favorite language 🥇, a strongly type programing makes me feel more secure and comfortable with services I'm giving. Simply the best"
  ),
  new Skill(
    Level.specialist,
    'Kotlin',
    'developer',
    'KT',
    'logos/kotlin',
    new Date(2019, 6, 6),
    'This lang was the second I learned, and basically teach me all a know about POO. Beautiful 🌞 Python alike syntax.'
  ),
  new Skill(
    Level.expert,
    'Python',
    'developer',
    'Py',
    'logos/python',
    new Date(2017, 3, 1),
    'Python will be always my first love 💘. Python was a fundamental tool for give smart solutions to a complex and diverse engineering and data problems.'
  ),
  new Skill(
    Level.specialist,
    'Git',
    'developer',
    'Git',
    'logos/git-icon',
    new Date(2020, 7, 13),
    'A "Must Need" tool. I use it in all my projects, and know pretty well his basics features like: push, pull, fork and rebase.'
  ),
  /*Fron-end*/
  new Skill(
    Level.specialist,
    'HTML5 && CSS3',
    'front-end',
    'Html',
    'vscode-icons/file-type-html',
    new Date(2022, 1, 6),
    'I love HTML5 and im really happy write in pure CSS3, constantly learning and creating for make software a nice experience for clients.'
  ),
  // new Skill(SkillLevel.skilled, 'CSS3', 'front-end', 'CSS', 'vscode-icons/file-type-css'),
  new Skill(
    Level.specialist,
    'React Js',
    'front-end',
    'Rjs',
    'vscode-icons/file-type-reactjs',
    new Date(2021, 12, 17),
    'My principal front-end library. React/Hooks + TS is a indispensable tool for give an optimal soluctions.'
  ),
  new Skill(
    Level.average,
    'NextJs',
    'front-end',
    'Njs',
    'logos/nextjs-icon',
    new Date(2022, 2, 1),
    'Well, this page is made in NextJs, and is totally awesome Framework 👍. Count with this if your need quick, secure a solid SPA'
  ),
  /*HTML*/
  new Skill(
    Level.specialist,
    'Material UI',
    'front-end',
    'Mui',
    'logos/material-ui',
    new Date(2021, 6, 31),
    'When a I need to be quick, and performance is the focus'
  ),
  new Skill(
    Level.average,
    'Bootstrap',
    'front-end',
    'Bs',
    'logos/bootstrap',
    new Date(2021, 3, 31),
    'Beautiful & simple, also when i need more personalize UI'
  ),
  /*Backend*/
  new Skill(
    Level.expert,
    'Firebase',
    'back-end',
    'Fs',
    'logos/firebase',
    new Date(2019, 7, 6),
    'I"m huge fan. I use it a lot in my apps when I need speed and flexibility in my solutions 💪. Awesome tool and one of my favorites backend services'
  ),
  new Skill(
    Level.average,
    'MongoDb',
    'back-end',
    'Mdb',
    'vscode-icons/file-type-mongo',
    new Date(2022, 1, 6),
    'And Impressive tool for me, I use it as a database motor when low latency is fundamental. I know how to work with Mongoose Library , but also I"m interested to test anothers with promising ORM as Prisma'
  ),
  new Skill(
    Level.specialist,
    'PostgreSQL',
    'back-end',
    'Psql',
    'logos/postgresql',
    new Date(2021, 3, 31),
    'As an Engineer, SQL is a base and fundamental knowledge to process data analisys, and when solution"s requirements is focused on engineering.'
  ),
  new Skill(
    Level.skilled,
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
