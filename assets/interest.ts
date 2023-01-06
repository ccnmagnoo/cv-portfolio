import { Interest, InterestLevel as Level } from "../model/Tech";

const interest: Interest[] = [
  new Interest(Level.moderate, "GraphQl", "back-end", "Gql", "logos/graphql"),
  new Interest(
    Level.extreme,
    "Prisma",
    "back-end",
    "Prisma",
    "file-icons/prisma"
  ),
  new Interest(
    Level.moderate,
    "Go Lang",
    "back-end",
    "Go",
    "vscode-icons/file-type-go"
  ),
  new Interest(
    Level.moderate,
    "PostCSS",
    "front-end",
    "PostCSS",
    "logos/postcss"
  ),
  new Interest(
    Level.slightly,
    "React Native",
    "front-end",
    "Native",
    "tabler/brand-react-native"
  ),
  new Interest(
    Level.slightly,
    "Ionic",
    "front-end",
    "Ionic",
    "logos/ionic-icon"
  ),
  new Interest(
    Level.high,
    "Electron",
    "front-end",
    "Electron",
    "logos/electron"
  ),
  new Interest(
    Level.extreme,
    "Rust/WASM",
    "developer",
    "Rust",
    "vscode-icons/file-type-rust"
  ),
  new Interest(
    Level.extreme,
    "TensorFlow/JS",
    "back-end",
    "TF",
    "logos/tensorflow"
  ),
];

export default interest;
