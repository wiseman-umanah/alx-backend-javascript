export default function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list)) {
    return [];
  }
  const gradesMap = new Map(newGrades.map(({ studentId, grade }) => [studentId, grade]));
  return list
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = gradesMap.get(student.id);
      return { ...student, grade: newGrade !== undefined ? newGrade : 'N/A' };
    });
}
