import { Interest, InterestLevel as Level } from '../model/Tech';

const interest: Interest[] = [
  new Interest(Level.extreme, 'GraphQl', 'back-end', 'Gql', 'logos/graphql'),
  new Interest(Level.high, 'Prisma', 'back-end', 'Prisma', 'file-icons/prisma'),
  new Interest(Level.moderate, 'Go Lang', 'back-end', 'Go', 'vscode-icons/file-type-go'),
  new Interest(
    Level.moderate,
    'TailwindCSS',
    'front-end',
    'Tail',
    'logos/tailwindcss-icon'
  ),
  new Interest(
    Level.slightly,
    'React Native',
    'front-end',
    'Native',
    'tabler/brand-react-native'
  ),
  new Interest(Level.slightly, 'Ionic', 'front-end', 'Ionic', 'logos/ionic-icon'),
  new Interest(Level.extreme, 'Electron', 'front-end', 'Electron', 'logo/electron'),
  new Interest(
    Level.high,
    'Solidity',
    'back-end',
    'WEB3',
    'vscode-icons/file-type-solidity'
  ),
  new Interest(Level.extreme, 'TensorFlow/JS', 'back-end', 'TF', 'logos/tensorflow'),
];

export default interest;
