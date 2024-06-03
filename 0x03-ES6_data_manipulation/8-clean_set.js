export default function cleanSet(set, str) {
  if (str === '') {
    return '';
  }

  return (Array.from(set)
    .filter((element) => element.startsWith(str))
    .map((element) => element.slice(str.length))
    .join('-'));
}
