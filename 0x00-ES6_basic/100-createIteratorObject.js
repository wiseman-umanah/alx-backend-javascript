/* eslint-disable guard-for-in */
export default function createIteratorObject(report) {
  const temp = [];
  for (const item of report.allEmployees) {
    temp.push(...report.allEmployees[item]);
  }
  return temp;
}
