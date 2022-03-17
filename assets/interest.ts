import { Interest, InterestLevel } from '../model/Tech';

const interest: Interest[] = [
  new Interest(InterestLevel.extreme, 'GraphQl', 'back-end', 'Gql', 'logos/graphql'),
  new Interest(InterestLevel.high, 'Prisma', 'back-end', 'Prisma', 'file-icons/prisma'),
  new Interest(
    InterestLevel.moderate,
    'Go Lang',
    'back-end',
    'Go',
    'vscode-icons/file-type-go'
  ),
  new Interest(
    InterestLevel.moderate,
    'TailwindCSS',
    'front-end',
    'Tail',
    'logos/tailwindcss-icon'
  ),
  new Interest(
    InterestLevel.slightly,
    'React Native',
    'front-end',
    'Native',
    'tabler/brand-react-native'
  ),
  new Interest(InterestLevel.slightly, 'Ionic', 'front-end', 'Ionic', 'logos/ionic-icon'),
  new Interest(
    InterestLevel.extreme,
    'Electron',
    'front-end',
    'Electron',
    'logo/electron'
  ),
  new Interest(
    InterestLevel.high,
    'Solidity',
    'back-end',
    'WEB3',
    'vscode-icons/file-type-solidity'
  ),
  new Interest(
    InterestLevel.extreme,
    'TensorFlow/JS',
    'back-end',
    'TF',
    'logos/tensorflow'
  ),
];

export default interest;
