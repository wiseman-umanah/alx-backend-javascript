export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((i) => i.id);
  }
  return [];
}
