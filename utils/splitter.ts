export default function splitter<T>(list?: T[], division?: number) {
  if (!list) {
    return undefined;
  }

  const size = Math.ceil(list.length / (division ?? 1));
  const data: T[][] = [];

  for (let i = 0; i < (division ?? 1); i++) {
    const inferior = i * size;
    const superior = (i + 1) * size <= list.length ? (i + 1) * size : list.length;
    data.push(list.slice(inferior, superior));
  }

  return data;
}
