import { Interest, InterestLevel } from '../model/Tech';

const interest: Interest[] = [
  new Interest(InterestLevel.extreme, 'GraphQl', 'ORM', 'Gql', 'graphql'),
  new Interest(InterestLevel.high, 'Prisma', 'ORM', 'Prisma', 'prisma'),
  new Interest(InterestLevel.moderate, 'Go Lang', 'Code', 'Go', 'file-type-go'),
  new Interest(InterestLevel.high, 'TailwindCSS', 'UI', 'Tail', 'tailwindcss-icon'),
  new Interest(
    InterestLevel.slightly,
    'React Native',
    'Mobile',
    'Native',
    'brand-react-native'
  ),
  new Interest(InterestLevel.slightly, 'Ionic', 'Mobile', 'Ionic', 'ionic-icon'),
  new Interest(InterestLevel.extreme, 'Electron', 'Desktop', 'Electron', 'electron'),
  new Interest(InterestLevel.high, 'Solidity', 'Code', 'WEB3', 'solidity'),
];

export default interest;
