export default function hasValuesFromArray(set, arr) {
  const res = arr.map((x) => set.has(x));
  return res.map(String).includes('false') ? 'false' : 'true';
}
