export default function getStudentsByLocation(list, city) {
  return list.filter((c) => c.location === city);
}
