export default function getListStudentIds(arr) {
  const temp = [];
  if (Array.isArray(arr)) {
    arr.forEach((element) => {
      temp.push(element.id);
    });
  }
  return temp;
}
